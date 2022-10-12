import { NextApiResponse, NextApiRequest } from 'next';
import nextConnect from 'next-connect';

import model from '../../../db/models';

const handler = nextConnect()
    .get(async (req: NextApiRequest, res: NextApiResponse) => {
        const query = {
            include: [{
                model: model.categories,
                as: 'categories'
            }],
            where: {
                id: req.query.id
            }
        };
    
        const place = await model.places.findOne(query);
        res.status(200).json({ place });
    });

export default handler;