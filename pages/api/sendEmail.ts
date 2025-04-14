import sgMail from "@sendgrid/mail"
import { NextApiRequest, NextApiResponse } from "next"

export default async function SendEmail(req: NextApiRequest, res: NextApiResponse) {
	sgMail.setApiKey(process.env.SENDGRID_API_KEY || "")
	const sender = process.env.SENDER_EMAIL || ""

	const { subject, company, name, email, phone, designation, description } = req.body
	const referer = req.headers.referer

	const content = {
		to: ["spo[AT]iitk.ac.in"],
		from: `SPO Website Automation<${sender}`,
		subject: subject,
		text: company + " " + name + " " + email + " " + phone + " " + designation + " " + description,
		html: `<div>
		<p>Company: ${company}</p>
		<p>Name: ${name}</p>
		<p>E-mail: ${email}</p>
		<p>Phone: ${phone}</p>
		<p>Designation: ${designation}</p>
		<br/>
		<p>Message: ${description}</p>
		<p>Sent from: ${referer || "Not specified or hidden"}</p>
		</div>`,
	}

	try {
		await sgMail.send(content)
		res.status(204).end()
	} catch (error) {
		console.log("ERROR", error)
		res.status(400).send({ message: error })
	}
}
