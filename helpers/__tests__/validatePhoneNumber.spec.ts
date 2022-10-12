import { expect, test } from '@jest/globals';

import validatePhoneNumber from '../validatePhoneNumber';

test('validatePhoneNumber() works', () => {
    expect(validatePhoneNumber('999')).toBe(false);
    expect(validatePhoneNumber('999000000')).toBe(false);
    expect(validatePhoneNumber('9990000000')).toBe(true);
});