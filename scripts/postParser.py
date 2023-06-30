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

	YEAR = 2022

	'''
	DRIVER CODE
	'''

	df = pd.read_csv(get_input_file_name())

	# Date
	now = datetime.now()
	date = now.strftime("%Y-%m-%d")

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

		print(fileName)  

		x = "his" if (row["Gender"]=="M") else "her"  
		y = "his" if (row["Gender"]=="M") else "hers"   

		
		file = open("draft/"+str(fileName) + ".mdx", 'w+')
		file.write("---\n")
		file.write("title: "+ "'" +row["Name"] + ": Summer Intern at " +
				   row["Company"] + "'\n")
		file.write("description: " +"'"+row["Name"] + ": " +
				   row["Company"] + "(" + row["Profile"] + ")" + "'" + "\n")
		file.write("date: " + "'" + date + "'" + "\n")
		file.write("tags: " + row["Profile"] + "," +
				   row["Company"] + "," + INSIGHT_TYPE + "\n")
		file.write("imageUrl: ''\n")
		file.write("---" + "\n" + "\n")
        
		if INSIGHT_TYPE == OPTIONS[0]:
			file.write(str(row["Name"]) + ", studying in IIT Kanpur as a " + str(row["Programme"]) + " student in " + 
				str(row["Department"]) + " will do\n" + x +  " summer internship in " + str(row["Profile"]) 
				+ " profile at " + row["Company"] + ". Here are some brief\n" + "insights of " + y +".\n\n")
		else:
			file.write(str(row["Name"]) + ", studying in IIT Kanpur as a " + str(row["Programme"]) + " student in " +
					str(row["Department"]) + " will be joining " + str(row["Company"]) + " as " + str(row["Profile"]) + ". Here are some brief insights of " + y + ".\n\n") 

		file.write(
			"## Shortlisted Profiles & Companies:\n")
		file.write(str(
			row["Companies & Profiles that you were shortlisted for"]) + "\n" + "\n")
		file.write(
			"## Insights on the Selection Process" + "\n")
		file.write(
			str(row["Insights on the Selection Process"]) + "\n" + "\n")
		file.write("##  Preparation Resources" + "\n")
		file.write(str(
			row[" Preparation Resources "]) + "\n\n")
		file.write(
			"## Advice for students (dos and don’ts)? " + "\n")
		file.write(str(
			row["Advice for students (dos and don’ts)?"]) + "\n" + "\n")

# Check for parsing { } properly in mdx file