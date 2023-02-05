<script>
  import { Input, Label } from 'sveltestrap';

  export let checkVar = false;
  export let label = 'default';

</script>

<div class='d-flex flex-row gap-1'>
  <Label class='my-auto' for='{label}Input'>{label}</Label>
  <Input bind:checked={checkVar} class='my-auto' id='{label}Input' type='switch' />
</div>
