import dbConnect from '../../lib/mongoose';
import Email from '../../models/Email';
export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({ success: false, message: 'Invalid email' });
    }

    try {
      const newEmail = new Email({ email });
      await newEmail.save();
      res.status(201).json({ success: true, message: 'Email saved successfully!' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Failed to save email' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
