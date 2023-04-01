## About

This website consists of **multiple comparators**, each for a component needed to have a **complete DevOps ecosystem.**

Each comparator gathers information about the most popular services, **obtained by manual research** and without the
help of crawlers.

If for instance you are interested in using **CI/CD** to create DevOps pipelines, click on
the [CI/CD configurator tab](https://afonsofigs.github.io/devopsconfigurator/cicd) and enter your parameters, in order
to decrease the number of results and
reach a more suitable recommendation.

Unlike other comparators, this one **calculates the expected prices on the fly** based on the parameters entered.

The parameters that are possible to choose are also particular to this configurator and have been chosen after gathering
information on a **large number of services, cloud and self-hosted.**

Currently, there are comparators for [**version control**](https://afonsofigs.github.io/devopsconfigurator/vcs), [**continuous integration and
deployment**](https://afonsofigs.github.io/devopsconfigurator/cicd) and [**team
chat**](https://afonsofigs.github.io/devopsconfigurator/vcs) platforms.

It is also possible to view a [**set of graphs**](https://afonsofigs.github.io/devopsconfigurator/stats) related to the
information gathered on each type of
comparator.

This project was carried out within the scope of Afonso Figuinha's **M.Sc. thesis** in partnership
with [UNL-SST](https://www.fct.unl.pt/), which ended in March 2023.

For more information about this project and **how to update information**, see the wiki of
this [github repository.](https://github.com/afonsofigs/devopsconfigurator)

## Corrections

If you would like to suggest a change, please do it via pull request or the issues tab.

## Developing

This website is built using Svelte and the data comes from static json files, because of its reduced size.

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a
development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target
> environment.
