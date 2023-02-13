<script>
  import { Button } from "sveltestrap";
  import { base } from "$app/paths";
  import Title from "$lib/commons/Title.svelte";
</script>

<Title prefix="Home" />

<section class="d-flex flex-column align-items-center" style="margin-top: 80px">
  <div class="d-flex flex-row justify-content-center align-items-center gap-3 mb-5">
    <img alt="Website logo" class="w-25 h-auto" src="{base}/images/gearWithInfinitySign.svg" />
    <p class="h3 my-0">DevOps<br>Comparator</p>
  </div>
  <div class="text-column">
    <p>
      This website consists of <b>multiple comparators</b>, each for a component needed to have a <b>complete DevOps
      ecosystem.</b></p>
    <p>Each comparator gathers information about the most popular services, <b>obtained by manual research</b> and
      without the help of crawlers.</p>
    <p>If for instance you are interested in using <b>CI/CD</b> to create DevOps pipelines, click on the <a
      href="{base}/cicd">CI/CD configurator tab</a> and enter your parameters, in order to decrease the number of
      results and reach a more suitable recommendation.</p>
    <p>Unlike other comparators, this one <b>calculates the expected prices on the fly</b> based on the parameters
      entered.</p>
    <p>The parameters that are possible to choose are also particular to this configurator and have been chosen after
      gathering information on a <b>large number of services, cloud and self-hosted.</b></p>
    <p>Currently, there are comparators for <a href="{base}/vcs"><b>version control</b></a>, <a href="{base}/cicd"><b>continuous
      integration and deployment</b></a> and <a href="{base}/vcs"><b>team chat</b></a> platforms.</p>
    <p>It is also possible to view a <a href="{base}/stats"><b>set of graphs</b></a> related to the information gathered
      on each type of comparator.</p>
    <p>This project was carried out within the scope of Afonso Figuinha's <b>MSc thesis</b> in partnership with <a
      href="https://www.fct.unl.pt/" rel="noreferrer" target="_blank">UNL-SST</a>, which ended in March 2023.</p>
    <p>For more information about this project and <b>how to update information</b>, see the wiki of this <a
      href="https://github.com/afonsofigs/devopsconfigurator" rel="noreferrer" target="_blank">github repository.</a>
    </p>
  </div>
  <Button class="opacity-75 my-3 py-2" color="dark" href="{base}/cicd" size="lg">Go to the CI/CD comparator
  </Button>
</section>