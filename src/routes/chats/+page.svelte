<script>
  import { Button, ButtonGroup, Label } from 'sveltestrap';
  import './styles.css';
  import { ignoredChatFieldsDefault, selfHosted } from '$lib/commons/options.js';
  import NumberInput from '$lib/commons/NumberInput.svelte';
  import Grid from 'gridjs-svelte';
  import RowModal from './RowModal.svelte';
  import chatsJson from '$lib/jsons/chatsJson.json';
  import GreenSwitch from '$lib/commons/GreenSwitch.svelte';
  import SideMenu from './SideMenu.svelte';
  import { evaluate } from 'mathjs';

  let colIDIdx = 0; //Index of the column "colID"
  let chatsEntries = []; //[]
  let filteredEntries = []; //[]
  let allFields = []; //[]
  let allFieldNames = []; //[]
  let basePagination = 10; //10

  let users = 1; //1
  let allBrands = []; //[]
  let brandsSelected = []; //[]
  let selfHostedChecked = 'Both'; //"Both"
  let supportSelected = []; //[]
  let currentPagination = 10; //10
  let fieldsSelected = []; //[]

  let rowModalOpen = false; //false
  let modalColID = 0; //0
  let sideMenuOpen = false; //false

  let msgHistoryUnlimitedChecked = false;
  let chatFiles = 0;
  let peoplePerCall = 0;
  let callDuration = 0;
  let freeGuests = 0;

  //Fetch json
  (() => {
    const chatsColumns = chatsJson['Chats'][0];
    //Slice names row
    chatsEntries = chatsJson['Chats'].slice(1);

    let auxFields = [];
    let auxFieldNames = [];
    let auxAllBrands = [];

    Object.keys(chatsColumns).forEach((key, index) => {
      if (key === 'colID') {
        colIDIdx = index;
        auxFields[index] = { id: key, name: chatsColumns[key], hidden: true };
      } else {
        auxFields[index] = { id: key, name: chatsColumns[key] };
        auxFieldNames[index] = chatsColumns[key];
      }
    });

    chatsEntries.forEach((chatsArr) => auxAllBrands.includes(chatsArr['Brand']) ? '' : (auxAllBrands = [...auxAllBrands,
                                                                                                        chatsArr['Brand']]));

    allFields = auxFields;

    //Exclude fields ignored by default from the selected
    auxFields.forEach(
      (field) => ignoredChatFieldsDefault.includes(field.id) ? null : (fieldsSelected = [...fieldsSelected,
                                                                                         field.name]));

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

    function checkUnlimitedHistory(arr) {
      return arr['MsgHistory'] === '∞' || !msgHistoryUnlimitedChecked;
    }

    function checkSelfHosted(arr) {
      return (selfHostedChecked === 'Both' || arr['Self-hosted'] === 'Both' || arr['Self-hosted'] === selfHostedChecked);
    }

    function checkPeoplePerCall(arr) {
      return arr['PeoplePerCall'] === '∞' || peoplePerCall <= parseInt(arr['PeoplePerCall']);
    }

    function checkCallDuration(arr) {
      return arr['CallDurationMins'] === '∞' || callDuration <= parseFloat(arr['CallDurationMins']);
    }

    function checkSupport(arr) {
      return (supportSelected.length === 0 || supportSelected.some((git) => arr['CommercialSupport'].includes(git)));
    }

    function calcUsersBasedValues(arr) {
      arr['ChatFilesGBFinal'] = arr['ChatFilesFormulaGB'] !== '∞' ? evaluate(
        arr['ChatFilesFormulaGB'].replace('users', users)) : '∞';
      arr['FreeTemporaryGuestsFinal'] = arr['FreeTemporaryGuestsFormula'] !== '∞' ? evaluate(
        arr['FreeTemporaryGuestsFormula'].replace('users', users)) : '∞';
    }

    function extraUsers(arr) {
      if (arr['IncludedUsers'] === '∞') return 0;
      const parsedIncludedUsers = parseInt(arr['IncludedUsers']);
      if (parsedIncludedUsers >= users) return 0;
      return users - parsedIncludedUsers;
    }

    function checkChatFiles(arr) {
      return arr['ChatFilesFormulaGB'] === '∞' || chatFiles <= parseFloat(arr['ChatFilesGBFinal']);
    }

    function checkFreeGuests(arr) {
      return (arr['FreeTemporaryGuestsFormula'] === '∞' || freeGuests <= parseInt(arr['FreeTemporaryGuestsFinal']));
    }

    function calcCustomPrice(arr) {
      function priceUsers() {
        return extraUsers(arr) * parseFloat(arr['PriceExtraUser$']);
      }

      //Cell value changes
      arr['CalculatedCost'] = Math.round(
        (parseFloat(arr['LicenseCost$PerMonth']) + priceUsers() + Number.EPSILON) * 100) / 100;
    }

    filteredEntries = chatsEntries
      .filter((arr) => checkBrand(arr) && checkUsers(arr) && checkUnlimitedHistory(arr) && checkSelfHosted(
        arr) && checkPeoplePerCall(arr) && checkCallDuration(arr) && checkSupport(arr))
      .map((arr) => {
        calcUsersBasedValues(arr);
        return arr;
      })
      .filter((arr) => {
        return checkChatFiles(arr) && checkFreeGuests(arr);
      })
      .map((arr) => {
        calcCustomPrice(arr);
        return arr;
      });
  }

  //Source or filters changed, run filtering
  $: (chatsEntries, selfHostedChecked, users, brandsSelected, supportSelected, msgHistoryUnlimitedChecked, chatFiles, peoplePerCall, callDuration, freeGuests), filteredData();

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

  //TODO: e.srcElement switch to e.target on button click
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

  <GreenSwitch bind:checkVar={msgHistoryUnlimitedChecked} label='Unlimited history' />


  <NumberInput
    bind:value={peoplePerCall}
    classNames='bg-light'
    label='Max users per call'
    placeholder='users'
    width='60px'
  />
  <NumberInput
    bind:value={callDuration}
    classNames='bg-light'
    label='Max call duration'
    placeholder='minutes'
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
  style={{ table: { 'white-space': 'nowrap' }, td: { 'min-width': '100px' } }}
/>

<RowModal {allFields} bind:rowModalOpen fullRow={chatsEntries[modalColID]} />

<SideMenu
  bind:allBrands
  bind:allFieldNames
  bind:brandsSelected
  bind:chatFiles
  bind:currentPagination
  bind:fieldsSelected
  bind:freeGuests
  bind:sideMenuOpen
  bind:supportSelected
/>
