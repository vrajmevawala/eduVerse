import { Router } from 'express';
import { sendContactMessage } from '../lib/emailService.js';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email and message are required' });
    }

    // Basic length caps to prevent abuse
    if (String(message).length > 5000) {
      return res.status(400).json({ message: 'Message too long' });
    }

    await sendContactMessage({ name, email, message });
    res.json({ success: true });
  } catch (err) {
    console.error('Contact route error:', err);
    res.status(500).json({ message: 'Failed to send message' });
  }
});

export default router;


