<script>
  export let option = "";
  export let height = "20px";
  export let gap = "4pt";

  const repo = `https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons`;
  let src = "";

  $: lang = String(option)
    .toLowerCase()
    .replaceAll(`+`, `p`)
    .replace(`#`, `sharp`)
    .replace(`javascript`, `js`)
    .replace(`bitbucket`, `bitbucketpipeline`)
    .replace(`dart`, `dartlang`);

  function changeSrc() {
    if (lang === "assembla") {
      src = "https://seeklogo.com/images/A/assembla-logo-0BE7A98406-seeklogo.com.png";
    }
    else if (lang === "github") {
      src = "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg";
    }
    else if (lang === "all") {
      src = "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg";
    }
    else {
      src = `${repo}/file_type_${lang}.svg`;
    }
  }

  $: lang && changeSrc();
  let hidden;
  // default back to visible every time src changes to see if the image loads successfully
  $: src, (hidden = false);
</script>

<span style:gap>
	<img alt={lang} {height} {hidden} on:error={() => (hidden = true)} {src} />
  {option}
</span>

<style>
  span {
    display: flex;
  }
</style>
