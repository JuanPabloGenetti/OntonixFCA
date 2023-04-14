import csv
import os

# iterate through all csv files in the root folder
for filename in os.listdir():
    if filename.endswith(".csv"):
        # read the first 16 values from the csv and square them
        with open(filename) as csv_file:
            csv_reader = csv.reader(csv_file)
            csv_data = []
            for i in range(16):
                row = next(csv_reader)
                csv_data.extend([float(x)**2 for x in row if x.strip()])

        # read the last 16 values from the corresponding output file and square them
        output_filename = os.path.splitext(filename)[0] + ".out"
        with open(output_filename) as output_file:
            output_data = output_file.read().strip().split("\n")[-16:]
            output_data = [float(x)**2 for x in output_data]

        # multiply each element of the two arrays together
        result = sum([csv_data[i] * output_data[i] for i in range(16)])

        # clean and write the result to the output file
        with open(output_filename, "w") as cleaned_file:
            cleaned_file.write("")
        with open(output_filename, "a") as output_file:
            output_file.write(str(result))