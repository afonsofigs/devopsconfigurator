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
    calculate("../src/lib/jsons/CIs.json", "CIs", [3, 5, 1, 5, 5, 3, 3, 3, 4, 2, 3, 5, 4],
              ["mcdm_ExtrasIncluded", "mcdm_CD", "ExternalIntegrations", "mcdm_CloudOSs", "mcdm_SelfhostedOSs",
               "mcdm_CloudConcurrent", "mcdm_SelfHostedConcurrent", "mcdm_BuildsLimit", "mcdm_NUsers", "mcdm_Caching",
               "mcdm_ScheduledPipeline", "mcdm_Metrics", "mcdm_Support"])

    calculate("../src/lib/jsons/VCs.json", "VCs", [2, 2, 2, 5, 4, 4, 2, 4],
              ["mcdm_PackageRegistry", "mcdm_Wiki", "mcdm_Kanban", "mcdm_Issues", "mcdm_NUsers", "mcdm_NPrivateRepos",
               "mcdm_DiskSpace", "mcdm_Support"])

    calculate("../src/lib/jsons/Chats.json", "Chats", [2, 4, 3, 3, 1, 3, 4],
              ["mcdm_ChatFiles", "mcdm_History", "mcdm_PerCall", "mcmd_CallDuration", "mcmd_FreeGuests",
               "mcmd_Integrations", "mcdm_NUsers"])
