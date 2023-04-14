import os

# Set the path to the directory containing your CSV files
csv_dir = "."

# Set the path to the directory where you want to save the output files
output_dir = "./complexity"

# Get a list of all the CSV files in the directory
csv_files = [f for f in os.listdir(csv_dir) if f.endswith(".csv")]

# Determine how many CSV files are in the directory
num_csv_files = len(csv_files)

# Define the batch command to execute for each CSV file
# Enchufar aqui la version generica del batch sin especificar archivo
#  batch_command = "zfun2 -v {} {} "
batch_command = "batch_command_for_each_file {} {} "

# Execute the batch command for each CSV file
for csv_file in csv_files:
    # Construct the full path to the CSV file
    csv_path = os.path.join(csv_dir, csv_file)
    
    # Construct the full path to the output file
    output_file = os.path.join(output_dir, csv_file.replace(".csv", ".out"))
    
    # Execute the batch command with the CSV file path and output file path as parameters
    os.system(batch_command.format(csv_path, output_file))
