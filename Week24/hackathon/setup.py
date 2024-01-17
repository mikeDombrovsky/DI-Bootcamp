import requests
import json
from datetime import datetime


def set_up():
    resp = requests.get(
        'https://services.arcgis.com/S9th0jAJ7bqgIRjw/arcgis/rest/services/Bicycle_Thefts_Open_Data/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json')

    db_dict = resp.json()

    # fields I considered useful
    fields = ['PRIMARY_OFFENCE', 'OCC_DATE', "OCC_YEAR", "OCC_MONTH", "OCC_DAY",
              "OCC_HOUR", "REPORT_DATE", "REPORT_YEAR", "REPORT_MONTH", "REPORT_DAY",
              "REPORT_HOUR", "DIVISION", "LOCATION_TYPE", "PREMISES_TYPE", "BIKE_MAKE",
              "BIKE_MODEL", "BIKE_TYPE", "BIKE_SPEED", "BIKE_COLOUR", "BIKE_COST",
              "STATUS", 'NEIGHBOURHOOD_140', 'LONG_WGS84', 'LAT_WGS84']

    cases = []

    # mapping dict to array of cases as dicts filtered by useful fields
    for attr in db_dict['features']:
        thief_case = {}
        for key in attr['attributes'].keys():
            if key in fields:
                thief_case[key] = attr['attributes'][key]
        cases.append(thief_case)
        
    # Convert OCC_DATE to a readable datetime format
    # for item in cases:
    #     item['OCC_DATE'] = datetime.utcfromtimestamp(item['OCC_DATE'] / 1000.0)
        
    # saving result to json file
    with open("./cases.json", "w") as outfile:
        outfile.write(json.dumps(cases, indent=2))
