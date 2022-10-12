import { NextApiResponse, NextApiRequest } from 'next';
import nextConnect from 'next-connect';

import model from '../../../db/models';

const handler = nextConnect()
    .post(async (req: NextApiRequest, res: NextApiResponse) => {
        const {
            firstName,
            lastName,
            email,
            phoneNumber,
            address,
            date
        } = req.body;
        
        // TODO: add backend validation
        await model.user_bookings.create({
            firstName,
            lastName,
            email,
            phoneNumber,
            address,
            date
        });

        res.status(200).json({
            message: 'Booking successful',
            statusCode: 1
        });
    });

export default handler;