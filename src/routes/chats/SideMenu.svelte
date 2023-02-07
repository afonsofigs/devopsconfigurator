<script>
  import { Offcanvas } from 'sveltestrap';
  import NumberInput from '$lib/commons/NumberInput.svelte';
  import MultiSelect from 'svelte-multiselect';
  import { supports } from '$lib/commons/options.js';

  export let sideMenuOpen = false;
  const toggleEnd = () => (sideMenuOpen = !sideMenuOpen);
  export let allFieldNames = [];
  export let fieldsSelected = [];
  export let currentPagination = 10;
  export let allBrands = [];
  export let brandsSelected = [];
  export let supportSelected = [];
  export let freeGuests = 0;
  export let chatFiles = 0;
</script>

<Offcanvas
  class='w-25'
  header='More filters'
  isOpen={sideMenuOpen}
  placement='end'
  toggle={toggleEnd}
>
  <div class='d-flex flex-column justify-content-start gap-4'>

    <NumberInput
      bind:value={chatFiles}
      classNames='bg-light'
      label='Chat files GB'
      placeholder='GB'
      width='60px'
    />

    <NumberInput
      bind:value={freeGuests}
      classNames='bg-light'
      label='Free Guests'
      placeholder='guests'
      width='60px'
    />

    <MultiSelect
      bind:options={allBrands}
      bind:selected={brandsSelected}
      placeholder='Brands: All ({allBrands.length})'
    />

    <div>
      <p class='mb-2'>Commercial support:</p>
      <MultiSelect bind:selected={supportSelected} options={supports} placeholder='Support: All' />
    </div>

    <NumberInput
      bind:value={currentPagination}
      label='Results per page:'
      max='70'
      min='1'
      placeholder='pagination'
    />

    <MultiSelect
      bind:options={allFieldNames}
      bind:selected={fieldsSelected}
      placeholder='Visible fields: All'
    />
  </div>
</Offcanvas>
