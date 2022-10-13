import { describe, expect, test } from '@jest/globals';

import { getDayOrderOfWeek } from '../getAvailableSlots';

describe('API: places/getAvailableSlots', () => {
    test('getDayOrderOfWeek()', () => {
        expect(getDayOrderOfWeek(1)).not.toBe(getDayOrderOfWeek(1, true));
    });
});