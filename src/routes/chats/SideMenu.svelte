<script>
  import { Offcanvas } from "sveltestrap";
  import NumberInput from "$lib/commons/NumberInput.svelte";
  import MultiSelect from "svelte-multiselect";
  import { supports } from "$lib/commons/options.js";

  export let sideMenuOpen = false;
  const toggleEnd = () => (sideMenuOpen = !sideMenuOpen);
  export let currentPagination = 10;
  export let allBrands = [];
  export let brandsSelected = [];
  export let supportSelected = [];
  export let freeGuests = 0;
  export let chatFiles = 0;
  export let callDuration = 0;
</script>

<Offcanvas header="More filters" isOpen={sideMenuOpen} placement="end" toggle={toggleEnd}>
  <div class="d-flex flex-column justify-content-start gap-4">

    <NumberInput bind:value={callDuration} label="Max call duration minutes" placeholder="minutes" width="60px" />

    <NumberInput bind:value={chatFiles} label="Chat files GB" placeholder="GB" width="60px" />

    <NumberInput bind:value={freeGuests} label="Free Guests" placeholder="guests" width="60px" />

    <MultiSelect bind:options={allBrands} bind:selected={brandsSelected}
                 placeholder="Brands: All ({allBrands.length})" />

    <div>
      <p class="mb-2">Commercial support:</p>
      <MultiSelect bind:selected={supportSelected} options={supports} placeholder="Support: All" />
    </div>

    <NumberInput bind:value={currentPagination} label="Results per page:" max="70" min="1" placeholder="pagination" />
  </div>
</Offcanvas>
