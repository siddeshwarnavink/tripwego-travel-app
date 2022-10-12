import { NextApiResponse, NextApiRequest } from 'next';
import nextConnect from 'next-connect';

import model from '../../../db/models';

const handler = nextConnect()
    .get(async (req: NextApiRequest, res: NextApiResponse) => {
        const categories = await model.categories.findAll();
        res.status(200).json({ categories });
    });

export default handler;