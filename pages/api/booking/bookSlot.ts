import { NextApiResponse, NextApiRequest } from 'next';
import nextConnect from 'next-connect';

import model from '../../../db/models';
import validateEmail from '../../../helpers/validateEmail';
import validatePhoneNumber from '../../../helpers/validatePhoneNumber';
import validateString from '../../../helpers/validateString';

export function validateRequest(req: NextApiRequest) {
    const {
        firstName,
        lastName,
        email,
        phoneNumber,
        address,
        date
    } = req.body;

    let isValid = false;

    if (
        validateString(firstName) &&
        validateString(lastName) &&
        validateEmail(email) &&
        validatePhoneNumber(phoneNumber) &&
        validateString(address) &&
        validateString(date)
    ) {
        isValid = true;
    }

    return isValid;
}

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
        try {
            if (!validateRequest(req)) {
                throw new Error('Validation failed.');
            }

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
        } catch (error) {
            res.status(500).json({
                message: error.message,
                statusCode: 0
            });
        }
    });

export default handler;