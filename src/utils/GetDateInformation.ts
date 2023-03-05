import { DateTime } from 'luxon';


export function GetDateInformation(dateOfOccurance: Date) : string;
export function GetDateInformation(startDate: Date, endDate?: Date, currentRole?: Boolean) : string;
export function GetDateInformation(startDate: Date, endDate?: Date, currentRole?: Boolean) : string {
    let dateFormat = 'MM/yyyy';
    let endText = '';
    let separator = ' - '

    let startDateValue = DateTime.fromISO(startDate.toISOString()).toFormat(dateFormat);
    if(currentRole == true)
    {
        endText = "present";
    }
    else if(endDate)
    {
        let endDateValue = DateTime.fromISO(endDate.toISOString());
        endText = endDateValue.toFormat(dateFormat);
    }
    return startDateValue + (endText === '' ? '' : separator + endText);
}
