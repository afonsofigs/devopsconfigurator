const e=[{Brand:"Brand",Service:"Service",colID:0,CalculatedCost:"Final Price $",LicenseCost$PerMonth:"Base Cost",ExtrasIncluded:"Extras Included","Self-hosted":"Self-hosted",Issues:"Issues",Kanban:"Kanban Boards",Wiki:"Wiki",PackageRegistry:"Package Registry",IncludedUsers:"Included Users",MaxUsers:"Max Users",PriceExtraUser$:"Price per Extra User",FinalNRepos:"Repositories",NPrivateReposFormula:"Nº Private Repositories Formula",FinalDiskSpace:"Disk Space",DiskSpaceGBFormula:"Disk Space Included Formula",PriceExtraGBDiskSpace:"Price per Extra GB of Disk Space",CommercialSupport:"Commercial Support"},{Brand:"GitHub",Service:"Free",desc_Service:"https://github.com/pricing",colID:1,CalculatedCost:"Runtime calc",LicenseCost$PerMonth:0,ExtrasIncluded:"Github also includes services like CI/CD, online coding platforms, simple website hosting, wikis","Self-hosted":"No",Issues:"Yes",Kanban:"Yes",Wiki:"Yes",PackageRegistry:"Yes",IncludedUsers:1,MaxUsers:"∞",PriceExtraUser$:0,FinalNRepos:"Runtime calc",NPrivateReposFormula:"∞",FinalDiskSpace:"Runtime calc",DiskSpaceGBFormula:"∞",PriceExtraGBDiskSpace:"N/A",CommercialSupport:"No"},{Brand:"GitHub",Service:"Team",desc_Service:"https://github.com/pricing",colID:2,CalculatedCost:"Runtime calc",LicenseCost$PerMonth:4,ExtrasIncluded:"Github also includes services like CI/CD, online coding platforms, simple website hosting, wikis","Self-hosted":"No",Issues:"Yes",Kanban:"Yes",Wiki:"Yes",PackageRegistry:"Yes",IncludedUsers:1,MaxUsers:"∞",PriceExtraUser$:4,FinalNRepos:"Runtime calc",NPrivateReposFormula:"∞",FinalDiskSpace:"Runtime calc",DiskSpaceGBFormula:"∞",PriceExtraGBDiskSpace:"N/A",CommercialSupport:"Yes"},{Brand:"GitHub",Service:"Enterprise",desc_Service:"https://github.com/pricing",colID:3,CalculatedCost:"Runtime calc",LicenseCost$PerMonth:21,ExtrasIncluded:"Github also includes services like CI/CD, online coding platforms, simple website hosting, wikis","Self-hosted":"No",Issues:"Yes",Kanban:"Yes",Wiki:"Yes",PackageRegistry:"Yes",IncludedUsers:1,MaxUsers:"∞",PriceExtraUser$:21,FinalNRepos:"Runtime calc",NPrivateReposFormula:"∞",FinalDiskSpace:"Runtime calc",DiskSpaceGBFormula:"∞",PriceExtraGBDiskSpace:"N/A",CommercialSupport:"Yes with SLA"},{Brand:"Azure DevOps Repos",Service:"Basic",desc_Service:"https://azure.microsoft.com/en-us/pricing/details/devops/azure-devops-services/",colID:4,CalculatedCost:"Runtime calc",LicenseCost$PerMonth:0,ExtrasIncluded:"Azure DevOps Basic also includes CI/CD, Kanban boards, Artifact storage","Self-hosted":"No",Issues:"Yes",Kanban:"Yes",Wiki:"Yes",PackageRegistry:"Yes",IncludedUsers:5,MaxUsers:"∞",PriceExtraUser$:6,FinalNRepos:"Runtime calc",NPrivateReposFormula:"∞",FinalDiskSpace:"Runtime calc",DiskSpaceGBFormula:"2+(extraUsers*10)",PriceExtraGBDiskSpace:1,CommercialSupport:"Yes with SLA"},{Brand:"AWS CodeCommit",Service:"Base",desc_Service:"https://aws.amazon.com/codecommit/pricing/",colID:5,CalculatedCost:"Runtime calc",LicenseCost$PerMonth:0,ExtrasIncluded:"The AWS Always Free tier includes services for all needs. For DevOps: CI/CD, Monitoring, Artifacts","Self-hosted":"No",Issues:"Yes",Kanban:"No",Wiki:"Yes",PackageRegistry:"Yes",IncludedUsers:5,MaxUsers:"∞",PriceExtraUser$:1,FinalNRepos:"Runtime calc",NPrivateReposFormula:"5000+(extraUsers*1000)",FinalDiskSpace:"Runtime calc",DiskSpaceGBFormula:50,PriceExtraGBDiskSpace:"N/A",CommercialSupport:"Yes with SLA"},{Brand:"Google Cloud",Service:"Source Repositories",desc_Service:"https://cloud.google.com/source-repositories/pricing",colID:6,CalculatedCost:"Runtime calc",LicenseCost$PerMonth:0,ExtrasIncluded:"The Google Cloud Always Free tier includes services for all needs. For DevOps: CI/CD, Monitoring, Artifacts","Self-hosted":"No",Issues:"No",Kanban:"No",Wiki:"No",PackageRegistry:"Yes",IncludedUsers:5,MaxUsers:"∞",PriceExtraUser$:1,FinalNRepos:"Runtime calc",NPrivateReposFormula:1e3,FinalDiskSpace:"Runtime calc",DiskSpaceGBFormula:50,PriceExtraGBDiskSpace:.1,CommercialSupport:"Yes with SLA"},{Brand:"Jetbrains Space",Service:"Cloud Free",desc_Service:"https://www.jetbrains.com/space/buy/?billing=yearly#cloud",colID:7,CalculatedCost:"Runtime calc",LicenseCost$PerMonth:0,ExtrasIncluded:"Jetbrains Space comes included with tools like: IDEs, CI/CD, Chats, Issue boards and tracker, Internal blogs and documents, meeting management and calendar","Self-hosted":"No",Issues:"Yes",Kanban:"Yes",Wiki:"Yes",PackageRegistry:"Yes",IncludedUsers:"∞",MaxUsers:"∞",PriceExtraUser$:0,FinalNRepos:"Runtime calc",NPrivateReposFormula:"∞",FinalDiskSpace:"Runtime calc",DiskSpaceGBFormula:10,PriceExtraGBDiskSpace:"N/A",CommercialSupport:"Yes with SLA"},{Brand:"Jetbrains Space",Service:"Cloud Team",desc_Service:"https://www.jetbrains.com/space/buy/?billing=yearly#cloud",colID:8,CalculatedCost:"Runtime calc",LicenseCost$PerMonth:8,ExtrasIncluded:"Jetbrains Space comes included with tools like: IDEs, CI/CD, Chats, Issue boards and tracker, Internal blogs and documents, meeting management and calendar","Self-hosted":"No",Issues:"Yes",Kanban:"Yes",Wiki:"Yes",PackageRegistry:"Yes",IncludedUsers:1,MaxUsers:"∞",PriceExtraUser$:8,FinalNRepos:"Runtime calc",NPrivateReposFormula:"∞",FinalDiskSpace:"Runtime calc",DiskSpaceGBFormula:"10+(extraUsers*10)",PriceExtraGBDiskSpace:"N/A",CommercialSupport:"Yes with SLA"},{Brand:"Jetbrains Space",Service:"Cloud Organization",desc_Service:"https://www.jetbrains.com/space/buy/?billing=yearly#cloud",colID:9,CalculatedCost:"Runtime calc",LicenseCost$PerMonth:20,ExtrasIncluded:"Jetbrains Space comes included with tools like: IDEs, CI/CD, Chats, Issue boards and tracker, Internal blogs and documents, meeting management and calendar","Self-hosted":"No",Issues:"Yes",Kanban:"Yes",Wiki:"Yes",PackageRegistry:"Yes",IncludedUsers:1,MaxUsers:"∞",PriceExtraUser$:20,FinalNRepos:"Runtime calc",NPrivateReposFormula:"∞",FinalDiskSpace:"Runtime calc",DiskSpaceGBFormula:"25+(extraUsers*25)",PriceExtraGBDiskSpace:"N/A",CommercialSupport:"Yes with SLA"},{Brand:"Jetbrains Space",Service:"Cloud Enterprise",desc_Service:"https://www.jetbrains.com/space/buy/?billing=yearly#cloud",colID:10,CalculatedCost:"Runtime calc",LicenseCost$PerMonth:99,ExtrasIncluded:"Jetbrains Space comes included with tools like: IDEs, CI/CD, Chats, Issue boards and tracker, Internal blogs and documents, meeting management and calendar","Self-hosted":"No",Issues:"Yes",Kanban:"Yes",Wiki:"Yes",PackageRegistry:"Yes",IncludedUsers:1,MaxUsers:"∞",PriceExtraUser$:99,FinalNRepos:"Runtime calc",NPrivateReposFormula:"∞",FinalDiskSpace:"Runtime calc",DiskSpaceGBFormula:"100+(extraUsers*100)",PriceExtraGBDiskSpace:"N/A",CommercialSupport:"Yes with SLA"},{Brand:"Jetbrains Space",Service:"Space On-Premises Free",desc_Service:"https://www.jetbrains.com/space/buy/?billing=yearly#cloud",colID:11,CalculatedCost:"Runtime calc",LicenseCost$PerMonth:0,ExtrasIncluded:"Jetbrains Space comes included with tools like: IDEs, CI/CD, Chats, Issue boards and tracker, Internal blogs and documents, meeting management and calendar","Self-hosted":"Yes",Issues:"Yes",Kanban:"Yes",Wiki:"Yes",PackageRegistry:"Yes",IncludedUsers:"∞",MaxUsers:"∞",PriceExtraUser$:0,FinalNRepos:"Runtime calc",NPrivateReposFormula:"∞",FinalDiskSpace:"Runtime calc",DiskSpaceGBFormula:"∞",PriceExtraGBDiskSpace:"N/A",CommercialSupport:"Yes with SLA"},{Brand:"Atlassian Bitbucket",Service:"Free",desc_Service:"https://www.atlassian.com/software/bitbucket/pricing?tab=cloud-tab",colID:12,CalculatedCost:"Runtime calc",LicenseCost$PerMonth:0,ExtrasIncluded:"Bitbucket plans include CI/CD, Artifacts","Self-hosted":"No",Issues:"Yes",Kanban:"Yes",Wiki:"Yes",PackageRegistry:"Yes",IncludedUsers:5,MaxUsers:5,PriceExtraUser$:0,FinalNRepos:"Runtime calc",NPrivateReposFormula:"∞",FinalDiskSpace:"Runtime calc",DiskSpaceGBFormula:"∞",PriceExtraGBDiskSpace:"N/A",CommercialSupport:"No"},{Brand:"Atlassian Bitbucket",Service:"Standard",desc_Service:"https://www.atlassian.com/software/bitbucket/pricing?tab=cloud-tab",colID:13,CalculatedCost:"Runtime calc",LicenseCost$PerMonth:0,ExtrasIncluded:"Bitbucket plans include CI/CD, Artifacts","Self-hosted":"No",Issues:"Yes",Kanban:"Yes",Wiki:"Yes",PackageRegistry:"Yes",IncludedUsers:5,MaxUsers:"∞",PriceExtraUser$:3,FinalNRepos:"Runtime calc",NPrivateReposFormula:"∞",FinalDiskSpace:"Runtime calc",DiskSpaceGBFormula:"∞",PriceExtraGBDiskSpace:"N/A",CommercialSupport:"Yes"},{Brand:"Atlassian Bitbucket",Service:"Premium",desc_Service:"https://www.atlassian.com/software/bitbucket/pricing?tab=cloud-tab",colID:14,CalculatedCost:"Runtime calc",LicenseCost$PerMonth:0,ExtrasIncluded:"Bitbucket plans include CI/CD, Artifacts","Self-hosted":"No",Issues:"Yes",Kanban:"Yes",Wiki:"Yes",PackageRegistry:"Yes",IncludedUsers:5,MaxUsers:"∞",PriceExtraUser$:6,FinalNRepos:"Runtime calc",NPrivateReposFormula:"∞",FinalDiskSpace:"Runtime calc",DiskSpaceGBFormula:"∞",PriceExtraGBDiskSpace:"N/A",CommercialSupport:"Yes with SLA"},{Brand:"Atlassian Bitbucket",Service:"Data Center",desc_Service:"https://www.atlassian.com/software/bitbucket/pricing?tab=self-manageddata-center",colID:15,CalculatedCost:"Runtime calc",LicenseCost$PerMonth:191.66666666666666,ExtrasIncluded:"Bitbucket plans include CI/CD, Artifacts","Self-hosted":"Yes",Issues:"Yes",Kanban:"Yes",Wiki:"Yes",PackageRegistry:"Yes",IncludedUsers:25,MaxUsers:"∞",PriceExtraUser$:7,FinalNRepos:"Runtime calc",NPrivateReposFormula:"∞",FinalDiskSpace:"Runtime calc",DiskSpaceGBFormula:"∞",PriceExtraGBDiskSpace:"N/A",CommercialSupport:"Yes with SLA"},{Brand:"Gitlab",Service:"Free",desc_Service:"https://about.gitlab.com/pricing/",colID:16,CalculatedCost:"Runtime calc",LicenseCost$PerMonth:0,ExtrasIncluded:"Gitlab offer a complete DevOps ecosystem:CI/CD, issue tracking, chat, wiki, simple websites,  artifacts, monitoring","Self-hosted":"Both",Issues:"Yes",Kanban:"Yes",Wiki:"Yes",PackageRegistry:"Yes",IncludedUsers:1,MaxUsers:5,PriceExtraUser$:0,FinalNRepos:"Runtime calc",NPrivateReposFormula:"∞",FinalDiskSpace:"Runtime calc",DiskSpaceGBFormula:5,PriceExtraGBDiskSpace:"N/A",CommercialSupport:"No"},{Brand:"Gitlab",Service:"Premium",desc_Service:"https://about.gitlab.com/pricing/",colID:17,CalculatedCost:"Runtime calc",LicenseCost$PerMonth:19,ExtrasIncluded:"Gitlab offer a complete DevOps ecosystem:CI/CD, issue tracking, chat, wiki, simple websites,  artifacts, monitoring","Self-hosted":"Both",Issues:"Yes",Kanban:"Yes",Wiki:"Yes",PackageRegistry:"Yes",IncludedUsers:1,MaxUsers:"∞",PriceExtraUser$:19,FinalNRepos:"Runtime calc",NPrivateReposFormula:"∞",FinalDiskSpace:"Runtime calc",DiskSpaceGBFormula:50,PriceExtraGBDiskSpace:"N/A",CommercialSupport:"Yes with SLA"},{Brand:"Gitlab",Service:"Ultimate",desc_Service:"https://about.gitlab.com/pricing/",colID:18,CalculatedCost:"Runtime calc",LicenseCost$PerMonth:99,ExtrasIncluded:"Gitlab offer a complete DevOps ecosystem:CI/CD, issue tracking, chat, wiki, simple websites,  artifacts, monitoring","Self-hosted":"Both",Issues:"Yes",Kanban:"Yes",Wiki:"Yes",PackageRegistry:"Yes",IncludedUsers:1,MaxUsers:"∞",PriceExtraUser$:99,FinalNRepos:"Runtime calc",NPrivateReposFormula:"∞",FinalDiskSpace:"Runtime calc",DiskSpaceGBFormula:250,PriceExtraGBDiskSpace:6,CommercialSupport:"Yes with SLA"},{Brand:"Gogs",Service:"Free",desc_Service:"https://gogs.io/",colID:19,CalculatedCost:"Runtime calc",LicenseCost$PerMonth:0,ExtrasIncluded:"Gogs includes Wiki tools","Self-hosted":"Yes",Issues:"Yes",Kanban:"No",Wiki:"Yes",PackageRegistry:"No",IncludedUsers:"∞",MaxUsers:"∞",PriceExtraUser$:0,FinalNRepos:"Runtime calc",NPrivateReposFormula:"∞",FinalDiskSpace:"Runtime calc",DiskSpaceGBFormula:"∞",PriceExtraGBDiskSpace:"N/A",CommercialSupport:"No"},{Brand:"Gitea",Service:"Free",desc_Service:"https://docs.gitea.io/",colID:20,CalculatedCost:"Runtime calc",LicenseCost$PerMonth:0,ExtrasIncluded:"Gitea comes with CI/CD and package repository","Self-hosted":"Yes",Issues:"Yes",Kanban:"Yes",Wiki:"Yes",PackageRegistry:"Yes",IncludedUsers:"∞",MaxUsers:"∞",PriceExtraUser$:0,FinalNRepos:"Runtime calc",NPrivateReposFormula:"∞",FinalDiskSpace:"Runtime calc",DiskSpaceGBFormula:"∞",PriceExtraGBDiskSpace:"N/A",CommercialSupport:"No"},{Brand:"Beanstalk",Service:"Free",desc_Service:"https://beanstalkapp.com/",colID:21,CalculatedCost:"Runtime calc",LicenseCost$PerMonth:0,ExtrasIncluded:"Beanstalk also features CD tools","Self-hosted":"No",Issues:"Yes",Kanban:"No",Wiki:"No",PackageRegistry:"No",IncludedUsers:1,MaxUsers:1,PriceExtraUser$:0,FinalNRepos:"Runtime calc",NPrivateReposFormula:1,FinalDiskSpace:"Runtime calc",DiskSpaceGBFormula:.1,PriceExtraGBDiskSpace:"N/A",CommercialSupport:"Yes"},{Brand:"Beanstalk",Service:"Bronze",desc_Service:"https://beanstalkapp.com/",colID:22,CalculatedCost:"Runtime calc",LicenseCost$PerMonth:15,ExtrasIncluded:"Beanstalk also features CD tools","Self-hosted":"No",Issues:"Yes",Kanban:"No",Wiki:"No",PackageRegistry:"No",IncludedUsers:5,MaxUsers:5,PriceExtraUser$:0,FinalNRepos:"Runtime calc",NPrivateReposFormula:10,FinalDiskSpace:"Runtime calc",DiskSpaceGBFormula:3,PriceExtraGBDiskSpace:"N/A",CommercialSupport:"Yes"},{Brand:"Beanstalk",Service:"Silver",desc_Service:"https://beanstalkapp.com/",colID:23,CalculatedCost:"Runtime calc",LicenseCost$PerMonth:25,ExtrasIncluded:"Beanstalk also features CD tools","Self-hosted":"No",Issues:"Yes",Kanban:"No",Wiki:"No",PackageRegistry:"No",IncludedUsers:20,MaxUsers:20,PriceExtraUser$:0,FinalNRepos:"Runtime calc",NPrivateReposFormula:25,FinalDiskSpace:"Runtime calc",DiskSpaceGBFormula:6,PriceExtraGBDiskSpace:"N/A",CommercialSupport:"Yes"},{Brand:"Beanstalk",Service:"Gold",desc_Service:"https://beanstalkapp.com/",colID:24,CalculatedCost:"Runtime calc",LicenseCost$PerMonth:50,ExtrasIncluded:"Beanstalk also features CD tools","Self-hosted":"No",Issues:"Yes",Kanban:"No",Wiki:"No",PackageRegistry:"No",IncludedUsers:40,MaxUsers:40,PriceExtraUser$:0,FinalNRepos:"Runtime calc",NPrivateReposFormula:50,FinalDiskSpace:"Runtime calc",DiskSpaceGBFormula:12,PriceExtraGBDiskSpace:"N/A",CommercialSupport:"Yes"},{Brand:"Beanstalk",Service:"Platinum",desc_Service:"https://beanstalkapp.com/",colID:25,CalculatedCost:"Runtime calc",LicenseCost$PerMonth:100,ExtrasIncluded:"Beanstalk also features CD tools","Self-hosted":"No",Issues:"Yes",Kanban:"No",Wiki:"No",PackageRegistry:"No",IncludedUsers:100,MaxUsers:100,PriceExtraUser$:0,FinalNRepos:"Runtime calc",NPrivateReposFormula:120,FinalDiskSpace:"Runtime calc",DiskSpaceGBFormula:24,PriceExtraGBDiskSpace:"N/A",CommercialSupport:"Yes"},{Brand:"Beanstalk",Service:"Diamond",desc_Service:"https://beanstalkapp.com/",colID:26,CalculatedCost:"Runtime calc",LicenseCost$PerMonth:200,ExtrasIncluded:"Beanstalk also features CD tools","Self-hosted":"No",Issues:"Yes",Kanban:"No",Wiki:"No",PackageRegistry:"No",IncludedUsers:200,MaxUsers:200,PriceExtraUser$:0,FinalNRepos:"Runtime calc",NPrivateReposFormula:300,FinalDiskSpace:"Runtime calc",DiskSpaceGBFormula:60,PriceExtraGBDiskSpace:"N/A",CommercialSupport:"Yes"},{Brand:"GitBucket",Service:"Free",desc_Service:"https://gitbucket.github.io/",colID:27,CalculatedCost:"Runtime calc",LicenseCost$PerMonth:0,ExtrasIncluded:"GitBucket comes with a Wiki","Self-hosted":"Yes",Issues:"Yes",Kanban:"Yes",Wiki:"Yes",PackageRegistry:"No",IncludedUsers:"∞",MaxUsers:"∞",PriceExtraUser$:0,FinalNRepos:"Runtime calc",NPrivateReposFormula:"∞",FinalDiskSpace:"Runtime calc",DiskSpaceGBFormula:"∞",PriceExtraGBDiskSpace:"N/A",CommercialSupport:"No"},{Brand:"Gitblit",Service:"Free",desc_Service:"http://www.gitblit.com",colID:28,CalculatedCost:"Runtime calc",LicenseCost$PerMonth:0,ExtrasIncluded:"Gitblit comes with a ticketing service for commit servicing","Self-hosted":"Yes",Issues:"Yes",Kanban:"No",Wiki:"No",PackageRegistry:"No",IncludedUsers:"∞",MaxUsers:"∞",PriceExtraUser$:0,FinalNRepos:"Runtime calc",NPrivateReposFormula:"∞",FinalDiskSpace:"Runtime calc",DiskSpaceGBFormula:"∞",PriceExtraGBDiskSpace:"N/A",CommercialSupport:"No"},{Brand:"Fossil SCM DVCS",Service:"Free",desc_Service:"https://www.fossil-scm.org",colID:29,CalculatedCost:"Runtime calc",LicenseCost$PerMonth:0,ExtrasIncluded:"Fossil SCM comes with bug tracking, wiki, forum, email alerts, chat, and technotes.","Self-hosted":"Yes",Issues:"Yes",Kanban:"No",Wiki:"Yes",PackageRegistry:"No",IncludedUsers:"∞",MaxUsers:"∞",PriceExtraUser$:0,FinalNRepos:"Runtime calc",NPrivateReposFormula:"∞",FinalDiskSpace:"Runtime calc",DiskSpaceGBFormula:"∞",PriceExtraGBDiskSpace:"N/A",CommercialSupport:"No"},{Brand:"Kallithea SCM",Service:"Free",desc_Service:"https://kallithea-scm.org/",colID:30,CalculatedCost:"Runtime calc",LicenseCost$PerMonth:0,ExtrasIncluded:"No","Self-hosted":"Yes",Issues:"No",Kanban:"No",Wiki:"No",PackageRegistry:"No",IncludedUsers:"∞",MaxUsers:"∞",PriceExtraUser$:0,FinalNRepos:"Runtime calc",NPrivateReposFormula:"∞",FinalDiskSpace:"Runtime calc",DiskSpaceGBFormula:"∞",PriceExtraGBDiskSpace:"N/A",CommercialSupport:"No"},{Brand:"OneDev",Service:"Free",desc_Service:"https://github.com/theonedev/onedev",colID:31,CalculatedCost:"Runtime calc",LicenseCost$PerMonth:0,ExtrasIncluded:"Onedev comes with a symbol search engine, issue boards, CI/CD","Self-hosted":"Yes",Issues:"Yes",Kanban:"Yes",Wiki:"No",PackageRegistry:"No",IncludedUsers:"∞",MaxUsers:"∞",PriceExtraUser$:0,FinalNRepos:"Runtime calc",NPrivateReposFormula:"∞",FinalDiskSpace:"Runtime calc",DiskSpaceGBFormula:"∞",PriceExtraGBDiskSpace:"N/A",CommercialSupport:"No"},{Brand:"Codebase HQ",Service:"Free",desc_Service:"https://www.codebasehq.com/",colID:32,CalculatedCost:"Runtime calc",LicenseCost$PerMonth:0,ExtrasIncluded:"Codebase comes with a ticketing service, wikis, time tracking, kanban boards, milestones  and sprints","Self-hosted":"No",Issues:"Yes",Kanban:"Yes",Wiki:"Yes",PackageRegistry:"No",IncludedUsers:2,MaxUsers:2,PriceExtraUser$:0,FinalNRepos:"Runtime calc",NPrivateReposFormula:1,FinalDiskSpace:"Runtime calc",DiskSpaceGBFormula:.1,PriceExtraGBDiskSpace:"N/A",CommercialSupport:"Yes"},{Brand:"Codebase HQ",Service:"Hobbyist",desc_Service:"https://www.codebasehq.com/",colID:33,CalculatedCost:"Runtime calc",LicenseCost$PerMonth:12,ExtrasIncluded:"Codebase comes with a ticketing service, wikis, time tracking, kanban boards, milestones  and sprints","Self-hosted":"No",Issues:"Yes",Kanban:"Yes",Wiki:"Yes",PackageRegistry:"No",IncludedUsers:10,MaxUsers:10,PriceExtraUser$:0,FinalNRepos:"Runtime calc",NPrivateReposFormula:6,FinalDiskSpace:"Runtime calc",DiskSpaceGBFormula:4,PriceExtraGBDiskSpace:"N/A",CommercialSupport:"Yes with SLA"},{Brand:"Codebase HQ",Service:"Freelancer",desc_Service:"https://www.codebasehq.com/",colID:34,CalculatedCost:"Runtime calc",LicenseCost$PerMonth:24,ExtrasIncluded:"Codebase comes with a ticketing service, wikis, time tracking, kanban boards, milestones  and sprints","Self-hosted":"No",Issues:"Yes",Kanban:"Yes",Wiki:"Yes",PackageRegistry:"No",IncludedUsers:"∞",MaxUsers:"∞",PriceExtraUser$:0,FinalNRepos:"Runtime calc",NPrivateReposFormula:20,FinalDiskSpace:"Runtime calc",DiskSpaceGBFormula:8,PriceExtraGBDiskSpace:"N/A",CommercialSupport:"Yes with SLA"},{Brand:"Codebase HQ",Service:"Studio",desc_Service:"https://www.codebasehq.com/",colID:35,CalculatedCost:"Runtime calc",LicenseCost$PerMonth:35,ExtrasIncluded:"Codebase comes with a ticketing service, wikis, time tracking, kanban boards, milestones  and sprints","Self-hosted":"No",Issues:"Yes",Kanban:"Yes",Wiki:"Yes",PackageRegistry:"No",IncludedUsers:"∞",MaxUsers:"∞",PriceExtraUser$:0,FinalNRepos:"Runtime calc",NPrivateReposFormula:45,FinalDiskSpace:"Runtime calc",DiskSpaceGBFormula:14,PriceExtraGBDiskSpace:"N/A",CommercialSupport:"Yes with SLA"},{Brand:"Codebase HQ",Service:"Agency",desc_Service:"https://www.codebasehq.com/",colID:36,CalculatedCost:"Runtime calc",LicenseCost$PerMonth:75,ExtrasIncluded:"Codebase comes with a ticketing service, wikis, time tracking, kanban boards, milestones  and sprints","Self-hosted":"No",Issues:"Yes",Kanban:"Yes",Wiki:"Yes",PackageRegistry:"No",IncludedUsers:"∞",MaxUsers:"∞",PriceExtraUser$:0,FinalNRepos:"Runtime calc",NPrivateReposFormula:110,FinalDiskSpace:"Runtime calc",DiskSpaceGBFormula:30,PriceExtraGBDiskSpace:"N/A",CommercialSupport:"Yes with SLA"},{Brand:"Codebase HQ",Service:"Corporate",desc_Service:"https://www.codebasehq.com/",colID:37,CalculatedCost:"Runtime calc",LicenseCost$PerMonth:150,ExtrasIncluded:"Codebase comes with a ticketing service, wikis, time tracking, kanban boards, milestones  and sprints","Self-hosted":"No",Issues:"Yes",Kanban:"Yes",Wiki:"Yes",PackageRegistry:"No",IncludedUsers:"∞",MaxUsers:"∞",PriceExtraUser$:0,FinalNRepos:"Runtime calc",NPrivateReposFormula:230,FinalDiskSpace:"Runtime calc",DiskSpaceGBFormula:70,PriceExtraGBDiskSpace:"N/A",CommercialSupport:"Yes with SLA"},{Brand:"Apache Allura",Service:"Free",desc_Service:"https://allura.apache.org/",colID:38,CalculatedCost:"Runtime calc",LicenseCost$PerMonth:0,ExtrasIncluded:"Apache Allura comes with  bug reports, discussions, wiki pages, blogs","Self-hosted":"Yes",Issues:"Yes",Kanban:"No",Wiki:"Yes",PackageRegistry:"No",IncludedUsers:"∞",MaxUsers:"∞",PriceExtraUser$:0,FinalNRepos:"Runtime calc",NPrivateReposFormula:"∞",FinalDiskSpace:"Runtime calc",DiskSpaceGBFormula:"∞",PriceExtraGBDiskSpace:"N/A",CommercialSupport:"No"},{Brand:"Assembla",Service:"Cloud Starter",desc_Service:"https://get.assembla.com/",colID:39,CalculatedCost:"Runtime calc",LicenseCost$PerMonth:12,ExtrasIncluded:"Assembla includes tickets services, wiki and visual kanban boards","Self-hosted":"No",Issues:"Yes",Kanban:"Yes",Wiki:"Yes",PackageRegistry:"No",IncludedUsers:1,MaxUsers:5,PriceExtraUser$:12,FinalNRepos:"Runtime calc",NPrivateReposFormula:"∞",FinalDiskSpace:"Runtime calc",DiskSpaceGBFormula:5,PriceExtraGBDiskSpace:"N/A",CommercialSupport:"Yes with SLA"},{Brand:"Assembla",Service:"Cloud Pro",desc_Service:"https://get.assembla.com/",colID:40,CalculatedCost:"Runtime calc",LicenseCost$PerMonth:95,ExtrasIncluded:"Assembla includes tickets services, wiki and visual kanban boards","Self-hosted":"No",Issues:"Yes",Kanban:"Yes",Wiki:"Yes",PackageRegistry:"No",IncludedUsers:5,MaxUsers:"∞",PriceExtraUser$:19,FinalNRepos:"Runtime calc",NPrivateReposFormula:"∞",FinalDiskSpace:"Runtime calc",DiskSpaceGBFormula:500,PriceExtraGBDiskSpace:"N/A",CommercialSupport:"Yes with SLA"},{Brand:"Assembla",Service:"Perforce Cloud Pro",desc_Service:"https://get.assembla.com/",colID:41,CalculatedCost:"Runtime calc",LicenseCost$PerMonth:52.25,ExtrasIncluded:"Assembla includes tickets services, wiki and visual kanban boards","Self-hosted":"No",Issues:"Yes",Kanban:"Yes",Wiki:"Yes",PackageRegistry:"No",IncludedUsers:1,MaxUsers:50,PriceExtraUser$:52.25,FinalNRepos:"Runtime calc",NPrivateReposFormula:"∞",FinalDiskSpace:"Runtime calc",DiskSpaceGBFormula:1e3,PriceExtraGBDiskSpace:"N/A",CommercialSupport:"Yes with SLA"}],s={VCs:e};export{s as v};
