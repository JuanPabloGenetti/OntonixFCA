import urllib.request
import csv
import json

tickerData = ["GDAXI.INDX","BTC-USD.CC","NDX.INDX","XAU.INDX","FCHI.INDX","GSPC.INDX","FTSE.INDX","N225.INDX","SHE"]

def to_hankel(arr):
    n = len(arr)
    hankel = [[0] * n for _ in range(n)]
    for i in range(n):
        for j in range(n):
            if i + j < n:
                hankel[i][j] = arr[i + j]
    return hankel
    

# Loop through the endpoint URLs
for i, endpoint in enumerate(tickerData):
    # Make a GET request to the API endpoint !!!! ATTENTION. CURRENTLY USING DEMO URL.
    # response = urllib.request.urlopen(f'https://eodhistoricaldata.com/api/eod/{tickerData[i]}?api_token=62dd2dc11d6518.30783709&period=d&from=2022-04-05&fmt=json')
    response = urllib.request.urlopen(f'https://eodhistoricaldata.com/api/eod/MCD.US?from=2017-01-05&to=2017-02-10&period=d&fmt=json&api_token=demo')
    # Read the response data and parse it as JSON
    data = json.loads(response.read().decode())

    # Get the last 24 objects from the JSON data
    last_24_objects = data[-24:]
    
    # Create an empty array to store the values
    values = []


    # Loop through the last 24 objects in the JSON data
    for obj in last_24_objects:
        # Append the fifth value of each object to the `values` array
        values.append(str(obj["close"]))

    hankel_values = to_hankel(values)   

    # 'f(tickerData[i])'
    with open(f'{tickerData[i]}.csv', 'w', newline='') as csvfile:
    # Write each row of the hankel matrix to the CSV file as a separate string
        for i, row in enumerate(hankel_values):
        # slice the row to remove the last 8 elements
            row_sliced = row[:-8]
        # join the sliced row with commas and add an extra comma at the end
            if i < 23:
                row_string = ','.join([str(value) for value in row_sliced]) + ','
            else:
                row_string = ','.join([str(value) for value in row_sliced])
        # write the row string to the CSV file
            csvfile.write(row_string + '\n')



