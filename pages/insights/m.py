import csv
import json

csv_file = '2025.csv'    # your CSV file
json_file = '2025placement.json' # output JSON file

data = []

with open(csv_file, newline='') as f:
    reader = csv.DictReader(f)  # assumes first row has column names
    for row in reader:
        data.append(row)

with open(json_file, 'w') as f:
    json.dump(data, f, indent=4)
