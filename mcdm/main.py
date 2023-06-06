import numpy as np
import pandas as pd
import json
from pymcdm.methods import PROMETHEE_II
from pymcdm.helpers import rrankdata
from tabulate import tabulate


def calculate(filename, excel_page, weights, filters):
    # load data using Python JSON module
    with open(filename, 'r') as f:
        data = json.loads(f.read())

    # json to dataframe
    full_matrix = pd.json_normalize(data, record_path=[excel_page])[1:].filter(items=["Brand", "Service"] + filters)
    # print(full_matrix.info())

    matrix = full_matrix[full_matrix.columns[2:]].to_numpy(dtype="float")
    # print(matrix)

    types = np.ones(matrix.shape[1])

    brand_service = (full_matrix["Brand"] + " - " + full_matrix["Service"]).array

    promethee = PROMETHEE_II('usual')
    Fi = promethee(matrix, weights, types)
    results = []
    for idx, name in enumerate(brand_service):
        results.append({"Brand": name, "Rank": rrankdata(Fi)[idx], "Score": Fi[idx]})

    # Write updated json with ranks
    for i in range(1, len(data[excel_page])):
        data[excel_page][i]["mcdm_Rank"] = rrankdata(Fi)[i - 1]
    with open(filename, 'w') as f:
        json.dump(data, f)

    new_results = sorted(results, key=lambda d: d["Rank"])
    print("\n--------", excel_page, "--------")
    print(tabulate(new_results))


if __name__ == '__main__':
    CIsWeights = [2,  # mcdm_ExtrasIncluded-
                  5,  # mcdm_CD.
                  3.75,  # mcdm_GitPlatforms.
                  2.5,  # ExternalIntegrations.
                  4.5,  # mcdm_CloudOSs.
                  4.5,  # mcdm_SelfhostedOSs.
                  3.75,  # mcdm_CloudConcurrent.
                  4,  # mcdm_SelfHostedConcurrent.
                  3,  # mcdm_BuildsLimit-
                  3,  # mcdm_NUsers-
                  3.25,  # mcdm_Caching.
                  3.75,  # mcdm_ScheduledPipeline.
                  4.75,  # mcdm_Metrics.
                  3.75  # mcdm_Support.
                  ]
    calculate("../src/lib/jsons/CIs.json", "CIs", CIsWeights,
              ["mcdm_ExtrasIncluded", "mcdm_CD", "mcdm_GitPlatforms", "ExternalIntegrations", "mcdm_CloudOSs",
               "mcdm_SelfhostedOSs", "mcdm_CloudConcurrent", "mcdm_SelfHostedConcurrent", "mcdm_BuildsLimit",
               "mcdm_NUsers", "mcdm_Caching", "mcdm_ScheduledPipeline", "mcdm_Metrics", "mcdm_Support"])

    VCsWeights = [2,  # mcdm_ExtrasIncluded-
                  4,  # mcdm_Issues.
                  3,  # mcdm_Kanban.
                  3.5,  # mcdm_Wiki.
                  3.25,  # mcdm_PackageRegistry.
                  3,  # mcdm_NUsers-
                  4.25,  # mcdm_NPrivateRepos.
                  3.25,  # mcdm_DiskSpace.
                  3.75  # mcdm_Support.
                  ]
    calculate("../src/lib/jsons/VCs.json", "VCs", VCsWeights,
              ["mcdm_ExtrasIncluded", "mcdm_Issues", "mcdm_Kanban", "mcdm_Wiki", "mcdm_PackageRegistry", "mcdm_NUsers",
               "mcdm_NPrivateRepos", "mcdm_DiskSpace", "mcdm_Support"])

    ChatsWeights = [2,  # mcdm_ExtrasIncluded-
                    3.25,  # mcdm_ChatFiles.
                    4.25,  # mcdm_History.
                    4,  # mcdm_PerCall.
                    3.75,  # mcmd_CallDuration.
                    3,  # mcmd_FreeGuests.
                    4,  # mcmd_Integrations.
                    3,  # mcdm_NUsers-
                    3.75  # mcdm_Support.
                    ]
    calculate("../src/lib/jsons/Chats.json", "Chats", ChatsWeights,
              ["mcdm_ExtrasIncluded", "mcdm_ChatFiles", "mcdm_History", "mcdm_PerCall", "mcmd_CallDuration",
               "mcmd_FreeGuests", "mcmd_Integrations", "mcdm_NUsers", "mcdm_Support"])
