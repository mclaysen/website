import { GetYearInformation } from './GetYearInformation';

describe('x', () => {
  test('x', () => {
    expect(GetYearInformation(new Date("2010-05-01T08:00:00Z"), new Date("2010-05-01T08:00:00Z"), true)).toBe("4/2010 - present");
  });
});