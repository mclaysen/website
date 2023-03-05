import { GetDateInformation } from './GetDateInformation';

describe('Get Year Information Tests', () => {
  test('Given start and end date with a current role, should just return start date with present', () => {
    expect(GetDateInformation(new Date("2010-05-01T08:00:00Z"), new Date("2010-05-01T08:00:00Z"), true)).toBe("05/2010 - present");
  });

  test('Given start and end date with not a current role role, should just return start date with end date', () => {
    expect(GetDateInformation(new Date("2010-05-01T08:00:00Z"), new Date("2012-12-01T08:00:00Z"), false)).toBe("05/2010 - 12/2012");
  });

  test('Given a single date, should just return a month year', () => {
    expect(GetDateInformation(new Date("2010-05-01T08:00:00Z"))).toBe("05/2010");
  });
});