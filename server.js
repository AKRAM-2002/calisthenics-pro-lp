import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { Webhook } from 'svix';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import User from './src/lib/userModel.js';


dotenv.config();
console.log(process.env.MONGODB_URL);

mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

const app = express();

app.use(cors({ origin: '*' }));


// Real code
app.post(
'/api/webhook',
bodyParser.raw({ type: 'application/json' }),
async function (req, res) {
    console.log('Webhook triggered');
    try {
    const payloadString = req.body.toString();
    const svixHeaders = req.headers;

    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    const evt = wh.verify(payloadString, svixHeaders);

    console.log('Webhook secret:', process.env.CLERK_WEBHOOK_SECRET);
    console.log('Webhook headers:', svixHeaders);
    const { id, ...attributes } = evt.data;
    // Handle the webhooks
    const eventType = evt.type;
    if (eventType === 'user.created') {
        console.log(`User ${id} was ${eventType}`);
    
        const firstName = attributes.first_name;
        const lastName = attributes.last_name;

        console.log('Saving user:', {
            clerkUserId: id,
            firstName: attributes.first_name,
            lastName: attributes.last_name || 'No last name',
        });
        
    
        const user = new User({
          clerkUserId: id,
          firstName: firstName,
          lastName: lastName,
        });
    
        await user.save();
        console.log('User saved to database');
      }
    res.status(200).json({
        success: true,
        message: 'Webhook received',
    });
    } catch (err) {
    res.status(400).json({
        success: false,
        message: err.message,
    });
    }
}
);

const port = process.env.PORT || 5000;

app.listen(port, () => {
console.log(`Listening on port http://localhost:${port}`);
});