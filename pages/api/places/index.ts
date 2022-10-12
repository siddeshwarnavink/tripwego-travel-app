import { NextApiResponse, NextApiRequest } from 'next';
import nextConnect from 'next-connect';
import { Op } from 'sequelize';

import model from '../../../db/models';

const handler = nextConnect()
    .get(async (req: NextApiRequest, res: NextApiResponse) => {
        const budget = req.query.budget ? JSON.parse(`${req.query.budget}`) : [];
        const category = req.query.category ? req.query.category : -1;

        const query = {
            include: [{
                model: model.categories,
                as: 'categories'
            }],
            where: {}
        };
        if (budget.length == 2) {
            query.where['price'] = {
                [Op.between]: budget.map(budgetAmount => budgetAmount * 1000)
            };
        }
        if (category > 0) {
            query.where['category'] = {
                [Op.eq]: category
            };
        }

        const places = await model.places.findAll(query);
        res.status(200).json({ places });
    });

export default handler;