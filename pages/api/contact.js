import Contact from "../../models/Contact";
import dbConnect from "../../lib/mongodb";

export default async function handler(req, res) {
    await dbConnect();
    const { method } = req;
    const { name, email,message } = req.body;
    switch (method) {
        case "POST":
            try {
                const newContact = new Contact({
                    name,
                    email,
                    message,
                });      
                const savedContact = await newContact.save();
                return res.status(200).json({
                    message: 'Message is sent',
                    success: true,
                });
            }
            catch (error) {
                return res.status(400).json({
                    message: new Error(error).message,
                    success: false,
                });
            }
    }
};