import pandas as pd
from datetime import datetime
import sys
import re

# Get from options
def get_input_file_name():
	options = sys.argv
	if len(options) != 2:
		print("Usage: python3 file.py <file_path>")
		exit(1)
	try:
		inp_file = options[1]
	except:
		print("Usage: python3 file.py <file_path>")
		exit(1)
	return inp_file




if __name__ == "__main__":

	'''
	CONFIG VARIABLES
	Edit as required
	'''
	OPTIONS = ["Internship", "Placement"]
	INSIGHT_TYPE = OPTIONS[1]

	YEAR = 2024

	'''
	DRIVER CODE
	'''

	df = pd.read_csv(get_input_file_name(), encoding='utf-8')

	# Date
	now = datetime.now()
	date = now.strftime(f'%Y-%m-%d')

	# suffix
	suffix = str(YEAR)
	if INSIGHT_TYPE == OPTIONS[0]:
		suffix += " intern"
	elif INSIGHT_TYPE == OPTIONS[1]:
		suffix += " placement"

    
	# loop thru data
	for index, row in df.iterrows():
		fileName = suffix + " " + \
			row["Name"].strip() + " " + row["Company"].strip()
		fileName = re.sub('[^0-9a-zA-Z ]+', '', fileName)
		fileName = fileName.replace(" ", "-").lower()

		print(index, fileName)
		# x = "his" if (row["Gender"]=="M") else "her"  
		# y = "his" if (row["Gender"]=="M") else "hers"   

		file = open("../posts/"+str(fileName) + ".mdx", 'w', encoding='utf-8')
		file.write("---\n")
		file.write("title: "+ '"' +row["Name"] + ": Placed at " +
				   row["Company"] + '"\n')
		file.write("description: " +"\""+row.iloc[3] + ": " +
				   row.iloc[4] + "\"" + "\n")
		file.write("date: " + "\"" + date + "\"" + "\n")
		file.write("tags: \"" + row.iloc[4] + "," + INSIGHT_TYPE + "\"\n")
		file.write("imageUrl: \"\"\n")
		file.write("---" + "\n" + "\n")
        
		if INSIGHT_TYPE == OPTIONS[0]:
			file.write(str(row["Name"]) + ", studying in IIT Kanpur as a " + " student in " + 
				str(row["ProgrammeandDepartment"]) + " will do\n" +   " summer internship in " + str(row["Profile"]) 
				+ " profile at " + row["Company"] + ". Here are some brief\n" + "insights."  +"\n\n")
		else:
			file.write(str(row.iloc[3]) + ", studying in IIT Kanpur" + " will be joining " + str(row.iloc[4]) + ". Here are some brief insights. "  + "\n\n") 

		file.write(
			"## Shortlisted Profiles & Companies:\n")
		file.write(str(
			row.iloc[5]) + "\n" + "\n")
		file.write(
			"## Selection Process of the Company you are selected in 1) Resume Shortlist, 2) GD, 3)Test" + "\n")
		file.write(
			str(row.iloc[6]) + "\n" + "\n")
		file.write("##  Insights on the interview process" + "\n")
		file.write(str(
			row.iloc[7]) + "\n\n")
		file.write(
			"## Sample Interview Questions? " + "\n")
		file.write(str(
			row.iloc[8]) + "\n" + "\n")
		file.write("## Preparation Resources" + "\n")
		file.write(str(
			row.iloc[9]) + "\n" + "\n")
		file.write("## Advice for students (do's and don'ts)\n")
		file.write(str(
			row.iloc[10]) + "\n\n")
		
# Check for parsing { } properly in mdx file