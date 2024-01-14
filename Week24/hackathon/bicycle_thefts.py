import requests
import json


def set_up():
    resp = requests.get(
        'https://services.arcgis.com/S9th0jAJ7bqgIRjw/arcgis/rest/services/Bicycle_Thefts_Open_Data/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json')

    db_dict = resp.json()

    fields = ['PRIMARY_OFFENCE', 'OCC_DATE', "OCC_YEAR", "OCC_MONTH", "OCC_DAY",
              "OCC_HOUR", "REPORT_DATE", "REPORT_YEAR", "REPORT_MONTH", "REPORT_DAY",
              "REPORT_HOUR", "DIVISION", "LOCATION_TYPE", "PREMISES_TYPE", "BIKE_MAKE",
              "BIKE_MODEL", "BIKE_TYPE", "BIKE_SPEED", "BIKE_COLOUR", "BIKE_COST",
              "STATUS", 'NEIGHBOURHOOD_158', 'LONG_WGS84', 'LAT_WGS84']
    print(fields)

    features = []

    # for attr in db_dict['features']:
    #     my_dict = {}
    #     features.append({
    #        'PRIMARY_OFFENCE': attr['PRIMARY_OFFENCE'],

    #     })
    # my_dict[]

    # with open("./sample.json", "w") as outfile:
    #     outfile.write(json.dumps(db_dict, indent=2))


set_up()
