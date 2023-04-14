import os
import json

json_data = []

# iterate through all output files in the root folder
for filename in os.listdir():
    if filename.endswith(".out"):
        try:
            # read the number from the output file and convert to float
            with open(filename) as output_file:
                number = float(output_file.read().strip())

            # create a new dictionary and add it to the list
            json_dict = {'ticker': filename, 'complexity': number}
            json_data.append(json_dict)

        except Exception as e:
            print(f"Error processing {filename}: {e}")

# write the list of dictionaries to a JSON file
if json_data:
    with open("prealarm/public/output.json", "w") as json_file:
        json.dump(json_data, json_file)
        print("JSON file created successfully!")
else:
    print("No output files found.")
