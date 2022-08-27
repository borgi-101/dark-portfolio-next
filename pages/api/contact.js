import { mailer } from "../../utils/mailer";

export default async function (req, res) {
  try {
    switch (req.method) {
      case "POST":
        const { name, subject, email, message } = req.body;
        await mailer({name, email, subject, message}, res);
        break

      default: 
        res.status(405).send("method not allowed")
    }
    
  } catch (error) {
    res.status(500).send("Internal server error") 
  }
}