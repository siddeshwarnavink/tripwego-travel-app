import { NextApiResponse, NextApiRequest } from 'next';
import nextConnect from 'next-connect';

import model from '../../../db/models';

function getDayOrderOfWeek(dayOrder: number, isNextWeek = false) {
    const myDate = isNextWeek ? new Date() : new Date();

    let day = myDate.getDate() - (myDate.getDay() - dayOrder);
    let month = myDate.getMonth();
    let year = myDate.getFullYear();

    return `${year}-${month}-${day}`;
}

function isInThePast(date) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return date < today;
}


const handler = nextConnect()
    .get(async (req: NextApiRequest, res: NextApiResponse) => {
        const bookingSlots = await model.booking_slots.findAll({
            where: {
                placeId: req.query.id
            }
        });

        // TODO: Add logic to check if slot is available
        const availableDates = [];
        bookingSlots.forEach(bookingSlot => {
            const slotDate = new Date(getDayOrderOfWeek(bookingSlot.dayOfWeek));

            if (slotDate.getDate() > new Date().getDate()) {
                availableDates.push(getDayOrderOfWeek(bookingSlot.dayOfWeek));
            }
        });

        res.status(200).json(availableDates);
    });

export default handler;