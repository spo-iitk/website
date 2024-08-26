import os
import csv
import pandas as pd

df = pd.read_csv("./placement.csv", encoding="utf-8")

headers = df.columns[:11]

df.fillna("N.A.", inplace=True)

for header in headers:
    df[header] = df[header].astype('str')

with open('./placement[1].csv', 'w', encoding='utf-8', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(headers)
    for index, row in df.iterrows():
        r = []
        for header in headers:
            r.append(' '.join(row[header].split()).replace(":", ""))
        writer.writerow(r)
