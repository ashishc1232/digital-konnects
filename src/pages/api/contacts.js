import dbConnect from '../../lib/mongoose';
import Contact from '../../models/Contact';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await dbConnect();
      const { name, email,phone,subject, message } = req.body;

      // Create a new contact form submission
      const newContact = await Contact.create({ name, email, phone, subject, message });

      return res.status(201).json({ success: true, data: newContact });
    } catch (error) {
      return res.status(400).json({ success: false, error });
    }
  } else {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
