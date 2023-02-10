export const gitPlatforms = ['Other', 'GitHub', 'Bitbucket', 'GitLab', 'Assembla'];

export const selfHosted = ['No', 'Both', 'Yes'];

export const OSs = ['Linux', 'Docker', 'Windows', 'macOS'];

export const boolJoins = ['Or', 'And'];

export const supports = ['External companies', 'No', 'Yes', 'Yes with SLA'];

export const ignoredFieldsDefault = ['colID', 'LicenseCost$PerMonth', 'NCloudConcurrentBuilds',
                                     'PriceExtraParallelBuild', 'NSelf-hostedRunners', 'PriceExtraRunners',
                                     'BuildsPerMonthLimit', 'IncludedCreditsPerMonth',
                                     'CreditsPerSelfHostedBuildMinute', 'CreditsPerCloudBuildMinuteLinux',
                                     'CreditsPerCloudBuildMinuteDocker', 'CreditsPerCloudBuildMinuteWindows',
                                     'CreditsPerCloudBuildMinutemacOS', 'PricePerExtraCredit', 'IncludedUsers',
                                     'MaxUsers', 'PriceExtraUser', 'IncludedCreditsPerExtraUser'];

export const ignoredVCFieldsDefault = ['colID', 'LicenseCost$PerMonth', 'ExtrasIncluded', 'IncludedUsers', 'MaxUsers',
                                       'PriceExtraUser$', 'DiskSpaceExtraUserGB', 'NPrivateReposPerExtraUser',
                                       'PriceExtraGBDiskSpace', 'DiskSpaceGB', 'NPrivateReposIncluded'];
export const ignoredChatFieldsDefault = ['colID', 'LicenseCost$PerMonth', 'ExtrasIncluded', 'IncludedUsers', 'MaxUsers',
                                       'PriceExtraUser$','FreeTemporaryGuestsFormula', 'ChatFilesFormulaGB', ];
                        