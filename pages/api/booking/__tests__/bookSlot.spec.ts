import { describe, expect, test } from '@jest/globals';
import { NextApiRequest } from 'next';

import { validateRequest } from '../bookSlot';

describe('API: booking/bookSlot', () => {
    test('validateRequest()', () => {
        const req = {
            body: {
                firstName: 'a',
                lastName: 'a',
                email: 'test@test.com',
                phoneNumber: '9999999999',
                address: 'a',
                date: 'a',
            }
        } as NextApiRequest;
        const req2 = {
            body: {
                firstName: 'a',
                lastName: 'a',
                email: 'test@test',
                phoneNumber: '9999999999',
                address: 'a',
                date: 'a',
            }
        } as NextApiRequest;

        expect(validateRequest(req)).toBe(true);
        expect(validateRequest(req2)).toBe(false);
    })
})