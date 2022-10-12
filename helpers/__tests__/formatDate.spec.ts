import { expect, test } from '@jest/globals';

import formatDate from '../formatDate';

test('formatDate() works', () => {
    expect(formatDate(new Date('2022-09-11'))).toBe('Sunday, September 11, 2022');
    expect(formatDate(new Date('2020-08-11'))).toBe('Tuesday, August 11, 2020');
});