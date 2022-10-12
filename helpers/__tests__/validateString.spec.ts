import { expect, test } from '@jest/globals';

import validateString from '../validateString';

test('validateString() works', () => {
    expect(validateString('  ')).toBe(false);
    expect(validateString('valid')).toBe(true);
    expect(validateString('also valid')).toBe(true);
});