import { expect, test } from '@jest/globals';

import absoluteUrl from '../absoluteUrl';

test('absoluteUrl() works', () => {
    const result = absoluteUrl({
        'headers': {
            'host': 'localhost'
        }
    }, null);
    expect(result.host).toBe('localhost');
    expect(result.protocol).toBe('http:');
    expect(result.origin).toBe('http://localhost');
});