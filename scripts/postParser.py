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
	INSIGHT_TYPE = OPTIONS[0]

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
			row["Name"].strip() + ": Summer Intern at" + row["Company"].strip()
		fileName = re.sub('[^0-9a-zA-Z ]+', '', fileName)
		fileName = fileName.replace(" ", "-").lower()

		print(fileName)        

		
		file = open("drafts/"+str(fileName) + ".mdx", 'w+')
		file.write("---\n")
		file.write("title: "+ "'" +row["Name"] + ": " +
				   row["Company"] + "(" + row["Profile"] + ")" + "'" + "\n")
		file.write("description: " +"'"+row["Name"] + ": " +
				   row["Company"] + "(" + row["Profile"] + ")" + "'" + "\n")
		file.write("date: " + "'" + date + "'" + "\n")
		file.write("tags: " + row["Profile"] + "," +
				   row["Company"] + "," + INSIGHT_TYPE + "\n")
		file.write("imageUrl: ''\n")
		file.write("---" + "\n" + "\n")
        
		file.write(row["Name"] + ", studying in IIT Kanpur as a " + row["Programme"] + " student in " + row["Department"] + " will do\n" +  "his/her summer internship in " + row["Profile"] + " profile at " + row["Company"] + ". Here are some breif\n" + "insights of his/hers.\n\n")
		file.write(
			"## Shortlisted Profiles & Companies:\n")
		file.write(str(
			row["Companies & Profiles that you were shortlisted for"]) + "\n" + "\n")
		file.write(
			"## Insights on the Selection Process" + "\n")
		file.write(
			str(row["Insights on the Selection Process"]) + "\n" + "\n")
		file.write("## Resources that can be used for Internship Preparation" + "\n")
		file.write(str(
			row[" Preparation Resources "]) + "\n\n")
		file.write(
			"## Advice for students sitting in internship drive (do's and dont's) " + "\n")
		file.write(str(
			row["Adivce for students (dos and don’ts)?"]) + "\n" + "\n")
