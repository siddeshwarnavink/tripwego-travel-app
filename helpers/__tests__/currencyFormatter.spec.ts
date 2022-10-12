import { expect, test } from '@jest/globals';

import currencyFormatter from '../currencyFormatter';

test('currencyFormatter() works', () => {
    expect(currencyFormatter(2500)).toBe('₹2,500');
    expect(currencyFormatter(252000)).toBe('₹2,52,000');
});