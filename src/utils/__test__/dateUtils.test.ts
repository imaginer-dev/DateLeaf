import { describe, expect, it } from 'vitest';
import { dateToYYMMDD } from '../dateUtils';

describe('dateUtils', () => {
  it('should return a date string', () => {
    const date = new Date('2021-09-01');
    const result = dateToYYMMDD(date);
    expect(result).toBe('2021-09-01');
  });
});
