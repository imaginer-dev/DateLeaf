import { describe, expect, it } from 'vitest';
import { dateToYYMMDD } from '../dateUtils';

describe('dateUtils', () => {
  it('should return a date string', () => {
    const result = dateToYYMMDD(new Date('2021-09-01').toString());
    expect(result).toBe('2021-09-01');
  });
});
