<script>
  import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "sveltestrap";

  export let fieldsSelected = [];
  export let allFieldNames = [];

</script>

<Dropdown>
  <DropdownToggle caret color="light">Visible fields</DropdownToggle>
  <DropdownMenu style="max-height: 50vh; overflow-y: auto;">
    {#each allFieldNames.filter((name) => name !== "") as fieldName}
      {#if fieldsSelected.includes(fieldName)}
        <DropdownItem on:click={(e)=> fieldsSelected=fieldsSelected.filter((val)=>val!==e.target.innerText.slice(2))}>
          ✓ {fieldName}</DropdownItem>
      {:else}
        <DropdownItem on:click={(e)=> fieldsSelected=[...fieldsSelected, e.target.innerText]}>{fieldName}</DropdownItem>
      {/if}
    {/each}
  </DropdownMenu>
</Dropdown>