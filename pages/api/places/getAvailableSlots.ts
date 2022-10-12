import { NextApiResponse, NextApiRequest } from 'next';
import nextConnect from 'next-connect';

import model from '../../../db/models';

function getDayOrderOfWeek(dayOrder: number, isNextWeek = false) {
    var curr = new Date; // get current date
    var first = curr.getDate() - curr.getDay();
    var last = first + 6;
    const myDate = isNextWeek ? new Date(curr.setDate(last + 1)) : new Date();

    let day = myDate.getDate() - (myDate.getDay() - dayOrder);
    let month = myDate.getMonth();
    let year = myDate.getFullYear();

    return `${year}-${month}-${day}`;
}

const handler = nextConnect()
    .get(async (req: NextApiRequest, res: NextApiResponse) => {
        const bookingSlots = await model.booking_slots.findAll({
            where: {
                placeId: req.query.id
            }
        });

        const availableDates = [];
        for (let i = 0; i < bookingSlots.length; i++) {
            const bookingSlot = bookingSlots[i];
            const slotDateString = getDayOrderOfWeek(bookingSlot.dayOfWeek);
            const slotDate = new Date(slotDateString);

            const numberOfPastBookings = await model.user_bookings.count({
                where: {
                    date: slotDateString,
                    placeId: req.query.id
                }
            });

            if (slotDate.getDate() > new Date().getDate()) {
                if (bookingSlot.bookingCount !== numberOfPastBookings && bookingSlot.bookingCount > numberOfPastBookings) {
                    availableDates.push(getDayOrderOfWeek(bookingSlot.dayOfWeek));
                    availableDates.push(getDayOrderOfWeek(bookingSlot.dayOfWeek, true));
                }
            }
        }

        res.status(200).json(availableDates);
    });

export default handler;