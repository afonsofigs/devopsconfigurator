<script>
  import { Button, ButtonGroup, Label } from 'sveltestrap';
  import './styles.css';
  import { ignoredVCFieldsDefault, selfHosted } from '$lib/commons/options.js';
  import NumberInput from '$lib/commons/NumberInput.svelte';
  import Grid from 'gridjs-svelte';
  import RowModal from './RowModal.svelte';
  import vcsJson from '$lib/jsons/vcsJson.json';
  import GreenSwitch from '$lib/commons/GreenSwitch.svelte';
  import SideMenu from './SideMenu.svelte';


  let colIDIdx = 0; //Index of the column "colID"
  let vcsEntries = []; //[]
  let filteredEntries = []; //[]
  let allFields = []; //[]
  let allFieldNames = []; //[]
  let basePagination = 10; //10

  let users = 1; //1
  let privateRepos = 1; //1
  let diskSpace = 0.1; //Minimum on the list is currently 0.1
  let allBrands = []; //[]
  let selfHostedChecked = 'Both'; //"Both"
  let issuesChecked = false;
  let kanbanChecked = false;
  let wikiChecked = false;
  let packageRegistryChecked = false;
  let brandsSelected = []; //[]
  let supportSelected = []; //[]
  let currentPagination = 10; //10
  let fieldsSelected = []; //[]

  let rowModalOpen = false; //false
  let modalColID = 0; //0
  let sideMenuOpen = false; //false

  //Fetch json
  (() => {
    const vcsColumns = vcsJson['VCs'][0];
    //Slice names row
    vcsEntries = vcsJson['VCs'].slice(1);

    let auxFields = [];
    let auxFieldNames = [];
    let auxAllBrands = [];

    Object.keys(vcsColumns).forEach((key, index) => {
      if (key === 'colID') {
        colIDIdx = index;
        auxFields[index] = { id: key, name: vcsColumns[key], hidden: true };
      } else {
        auxFields[index] = { id: key, name: vcsColumns[key] };
        auxFieldNames[index] = vcsColumns[key];
      }
    });

    vcsEntries.forEach(
      (vcsArr) => auxAllBrands.includes(vcsArr['Brand']) ? '' : (auxAllBrands = [...auxAllBrands, vcsArr['Brand']]));

    allFields = auxFields;

    //Exclude fields ignored by default from the selected
    auxFields.forEach(
      (field) => ignoredVCFieldsDefault.includes(field.id) ? null : fieldsSelected = [...fieldsSelected, field.name]);

    allFieldNames = auxFieldNames;
    allBrands = auxAllBrands;
    return true;
  })();

  function filteredData() {
    function checkBrand(arr) {
      return brandsSelected.length === 0 || brandsSelected.includes(arr['Brand']);
    }

    function checkUsers(arr) {
      return arr['MaxUsers'] === '∞' || users <= parseInt(arr['MaxUsers']);
    }

    function checkPrivateRepos(arr) {
      return arr['NPrivateReposIncluded'] === '∞' || (privateRepos <= parseInt(arr['FinalNRepos']));
    }

    function checkDiskGB(arr) {
      if (arr['DiskSpaceGB'] === '∞' || diskSpace <= parseFloat(arr['FinalDiskSpace'])) {
        return true;
      } else {
        return (arr['PriceExtraGBDiskSpace'] !== 'N/A');
      }
    }

    function checkSelfHosted(arr) {
      return (selfHostedChecked === 'Both' || arr['Self-hosted'] === 'Both' || arr['Self-hosted'] === selfHostedChecked);
    }

    function checkIssues(arr) {
      return !issuesChecked || (issuesChecked && arr['Issues'] === 'Yes');
    }

    function checkKanban(arr) {
      return !kanbanChecked || (kanbanChecked && arr['Kanban'] === 'Yes');
    }

    function checkWiki(arr) {
      return !wikiChecked || (wikiChecked && arr['Wiki'] === 'Yes');
    }

    function checkPackageReg(arr) {
      return !packageRegistryChecked || (packageRegistryChecked && arr['PackageRegistry'] === 'Yes');
    }

    function checkSupport(arr) {
      return (supportSelected.length === 0 || supportSelected.some((git) => arr['CommercialSupport'].includes(git)));
    }

    function extraUsers(arr) {
      if (arr['IncludedUsers'] === '∞') return 0;
      const parsedIncludedUsers = parseInt(arr['IncludedUsers']);
      if (parsedIncludedUsers >= users) return 0;
      return (users - parsedIncludedUsers);
    }

    function calcUsersBasedValues(arr) {
      function calcNPrivateRepos() {
        if (arr['NPrivateReposIncluded'] === '∞') return '∞';
        const parsedNPrivateReposIncluded = parseInt(arr['NPrivateReposIncluded']);
        const parsedNPrivateReposPerExtraUser = parseInt(arr['NPrivateReposPerExtraUser']);

        if (parsedNPrivateReposPerExtraUser === 0) return parsedNPrivateReposIncluded;
        return parsedNPrivateReposIncluded + (extraUsers(arr) * parsedNPrivateReposPerExtraUser);
      }

      function calcDiskSpace() {
        if (arr['DiskSpaceGB'] === '∞') return '∞';

        const parsedDiskSpace = parseFloat(arr['DiskSpaceGB']);
        const parsedDiskSpaceExtraUserGB = parseFloat(arr['DiskSpaceExtraUserGB']);

        if (parsedDiskSpaceExtraUserGB === 0) return parsedDiskSpace;
        let included = parsedDiskSpace + (extraUsers(arr) * parsedDiskSpaceExtraUserGB);

        return ((included < diskSpace) ? diskSpace : included);
      }

      arr['FinalNRepos'] = calcNPrivateRepos();
      arr['FinalDiskSpace'] = calcDiskSpace();
    }

    function calcCustomPrice(arr) {

      function priceUsers() {
        return extraUsers(arr) * parseFloat(arr['PriceExtraUser$']);
      }

      function priceDiskGB() {
        if (arr['PriceExtraGBDiskSpace'] === 'N/A') return 0;
        if (arr['DiskSpaceGB'] === '∞') return 0;
        const extraGBs = (() => {
          const parsedDiskSpaceGB = parseFloat(arr['DiskSpaceGB']);
          if (parsedDiskSpaceGB >= diskSpace) return 0;
          return (diskSpace - parsedDiskSpaceGB);
        })();
        return extraGBs * parseFloat(arr['PriceExtraGBDiskSpace']);
      }

      //Cell value changes
      arr['CalculatedCost'] = Math.round(
        (parseFloat(arr['LicenseCost$PerMonth']) + priceUsers() + priceDiskGB() + Number.EPSILON) * 100) / 100;
    }

    filteredEntries = vcsEntries.filter(
      (arr) => (checkBrand(arr) && checkUsers(arr) && checkSelfHosted(arr) && checkIssues(arr) && checkKanban(
        arr) && checkWiki(arr) && checkPackageReg(arr) && checkSupport(arr)))
      .map((arr) => {
        calcUsersBasedValues(arr);
        return arr;
      }).filter((arr) => {
        return (checkPrivateRepos(arr) && checkDiskGB(arr));
      }).map((arr) => {
        calcCustomPrice(arr);
        return arr;
      });
  }

  //Source or filters changed, run filtering
  $: (vcsEntries, selfHostedChecked, users, privateRepos, diskSpace, brandsSelected, supportSelected, issuesChecked, kanbanChecked, wikiChecked, packageRegistryChecked), filteredData();

  function filterFields() {
    return allFields.filter((arr) => {
      return arr.id === 'colID' || fieldsSelected.includes(arr.name);
    });
  }

  function openRowModal(rowColID) {
    modalColID = rowColID - 1;
    rowModalOpen = !rowModalOpen;
  }

  function openSideMenu() {
    sideMenuOpen = !sideMenuOpen;
  }
</script>

<svelte:head>
  <title>VCs Comparison</title>
</svelte:head>

<div class='d-flex flex-row flex-wrap gap-4 justify-content-center align-content-center mb-3 mt-5'>
  <NumberInput
    bind:value={users}
    classNames='bg-light'
    label='Users'
    min='1'
    placeholder='users'
    width='60px'
  />
  <div class='d-flex flex-row gap-2 mb-0 align-content-center'>
    <Label class='my-auto' for='runnersInput'>Self-hosted</Label>
    <ButtonGroup>
      {#each selfHosted as selfHostedState}
        <Button
          size='sm'
          color='light'
          active={selfHostedChecked === selfHostedState}
          on:click={(e) => (selfHostedChecked = e.srcElement.innerText)}>{selfHostedState}</Button
        >
      {/each}
    </ButtonGroup>
  </div>


  <GreenSwitch bind:checkVar={issuesChecked} label='Issues' />
  <GreenSwitch bind:checkVar={wikiChecked} label='Wiki' />

  <NumberInput
    bind:value={privateRepos}
    classNames='bg-light'
    label='Private Repositories'
    min='1'
    placeholder='repos'
    width='60px'
  />

  <NumberInput
    bind:value={diskSpace}
    classNames='bg-light'
    label='Storage GB'
    min='0'
    placeholder='repos'
    step='0.1'
    width='60px'
  />

  <Button color='light' on:click={openSideMenu}>More filters</Button>
</div>

<Grid
  autoWidth={true}
  className={{ table: 'small w-auto' }}
  columns={fieldsSelected.length === 0 ? allFields : filterFields()}
  data={filteredEntries}
  on:rowClick={(e) => openRowModal(e.detail[1]._cells[colIDIdx].data)}
  pagination={{
		enabled: true,
		limit: currentPagination == null ? basePagination : currentPagination,
		summary: true
	}}
  resizable={true}
  search={true}
  sort={true}
  style={{ table: { 'white-space': 'nowrap' }, td: {"min-width":"100px"} }}
/>

<RowModal {allFields} bind:rowModalOpen fullRow={vcsEntries[modalColID]} />

<SideMenu
  bind:allBrands
  bind:allFieldNames
  bind:brandsSelected
  bind:currentPagination
  bind:fieldsSelected
  bind:kanbanChecked
  bind:packageRegistryChecked
  bind:sideMenuOpen
  bind:supportSelected
/>
