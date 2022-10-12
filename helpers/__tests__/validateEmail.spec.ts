import { expect, test } from '@jest/globals';

import validateEmail from '../validateEmail';

test('validateEmail() works', () => {
    expect(validateEmail('test@')).toBe(false);
    expect(validateEmail('test@test')).toBe(false);
    expect(validateEmail('test@test.com')).toBe(true);
});