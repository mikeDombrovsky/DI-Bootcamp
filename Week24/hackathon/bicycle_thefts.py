import matplotlib.pyplot as plt
import json
import pandas as pd
from datetime import datetime
from setup import set_up


def main():

    # reading db from json file
    json_data = None
    try:
        with open("./cases.json", "r") as outfile:
            json_data = json.load(outfile)
    except Exception as e:
        print(e)
    finally:
        # load data from server if needed
        if not json_data or len(json_data) == 0:
            print('loading data from server...')
            json_data = set_up()

    # Convert OCC_DATE to a readable datetime format
    for item in json_data:
        item['OCC_DATE'] = datetime.utcfromtimestamp(item['OCC_DATE'] / 1000.0)
        item['REPORT_DATE'] = datetime.utcfromtimestamp(
            item['REPORT_DATE'] / 1000.0)

    # Create a DataFrame
    df = pd.DataFrame(json_data)

    # Incidents by Month
    plt.figure(figsize=(10, 6))
    df['OCC_DATE'].groupby(df['OCC_MONTH']).count().plot(
        kind='bar', color='skyblue')
    plt.title('Incidents by Month')
    plt.xlabel('Month')
    plt.ylabel('Number of Incidents')
    plt.subplots_adjust(bottom=0.2)
    plt.grid(True)
    plt.show()

    # Extract weekday from OCC_DATE using strftime('%A')
    df['WEEKDAY'] = df['OCC_DATE'].dt.strftime('%A')

    # Plot the distribution of incidents by weekday
    plt.figure(figsize=(10, 6))
    df['WEEKDAY'].value_counts().sort_index().plot(kind='bar', color='skyblue')
    plt.title('Incidents by Weekday')
    plt.xlabel('Weekday')
    plt.ylabel('Number of Incidents')
    plt.subplots_adjust(bottom=0.2)
    plt.grid(True)
    plt.show()

    # Status of Incidents
    plt.figure(figsize=(8, 6))
    df['STATUS'].value_counts().plot(kind='barh', color='lightcoral')
    plt.title('Status of Incidents')
    plt.xlabel('Number of cases')
    plt.subplots_adjust(left=0.2, bottom=0.1)
    plt.grid(True)
    plt.show()

    # Location Types
    plt.figure(figsize=(14, 6))
    df['LOCATION_TYPE'].value_counts().plot(kind='barh', color='orange')
    plt.title('Distribution of Location Types')
    plt.xlabel('Number of Incidents')
    plt.ylabel('Location Type')
    plt.subplots_adjust(left=0.6, bottom=0.1)
    plt.grid(True)
    plt.show()

    # Calculate the time difference between OCC_DATE and REPORT_DATE
    df['TIME_DIFFERENCE'] = (df['REPORT_DATE'] - df['OCC_DATE']
                             ).dt.total_seconds() / (3600.0 * 24)  # Convert to days

    # Plot the time difference for each incident
    # Find the 10 biggest differences according to DIVISION
    top_20_diff_by_division = df.groupby(
        'DIVISION')['TIME_DIFFERENCE'].max().nlargest(20)

    # Plot the time difference for each incident
    plt.figure(figsize=(12, 8))

    # Plot OCC_DATE and REPORT_DATE differences
    top_20_diff_by_division.plot(kind='bar', color='purple')

    plt.title(
        'Top 20 Time Differences between OCC_DATE and REPORT_DATE Grouped by Division')
    plt.xlabel('Division')
    plt.ylabel('Time Difference (days)')
    plt.show()

    # Group by division and count incidents
    division_counts = df['DIVISION'].value_counts()

    # Plot the count of incidents by division
    plt.figure(figsize=(12, 8))
    division_counts.plot(kind='bar', color='green')
    plt.title('Incidents by Division')
    plt.xlabel('Division')
    plt.ylabel('Number of Incidents')
    plt.grid(True)
    plt.show()

    # Group by location and count incidents (max)
    location_counts = df['NEIGHBOURHOOD_140'].value_counts(
        ascending=True).loc[lambda x: x > 20]

    # Plot the count of incidents by location
    plt.figure(figsize=(12, 8))
    location_counts.plot(kind='barh', color='green')
    plt.title('Incidents by Location (max)')
    plt.xlabel('Number of Incidents')
    plt.ylabel('Location')
    plt.subplots_adjust(left=0.6, bottom=0.1)
    plt.grid(True)
    plt.show()

    # Group by location and count incidents
    location_counts = df['NEIGHBOURHOOD_140'].value_counts(
    ).loc[lambda x: x < 5]

    # Plot the count of incidents by location
    plt.figure(figsize=(12, 10))
    location_counts.plot(kind='barh', color='green')
    plt.title('Incidents by Location (min)')
    plt.xlabel('Number of Incidents')
    plt.ylabel('Location')
    plt.subplots_adjust(left=0.5)
    plt.grid(True)
    plt.show()

    # Plot 1: Incidents by Primary offence
    plt.figure(figsize=(10, 6))
    df['PRIMARY_OFFENCE'].value_counts().plot(
        kind='barh', color='skyblue')
    plt.title('Primary offence')
    plt.xlabel('Number of Incedents')
    plt.ylabel('Primary offence')
    plt.subplots_adjust(bottom=0.2, left=0.3)
    plt.grid(True)
    plt.show()


main()
