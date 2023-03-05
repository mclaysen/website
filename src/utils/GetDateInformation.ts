import { DateTime } from 'luxon';


export function GetDateInformation(dateOfOccurance: Date) : string;
export function GetDateInformation(startDate: Date, endDate?: Date, currentRole?: Boolean) : string;
export function GetDateInformation(startDate: Date, endDate?: Date, currentRole?: Boolean) : string {
    let dateFormat = 'MM/yyyy';
    let endText = '';
    let separator = ' - '

    startDate = new Date(startDate);

    let startText = DateTime.fromISO((startDate as Date).toISOString()).toFormat(dateFormat);
    if(currentRole == true)
    {
        endText = "present";
    }
    else if(endDate)
    {
        endDate = new Date(endDate);
        let endDateValue = DateTime.fromISO(endDate.toISOString());
        endText = endDateValue.toFormat(dateFormat);
    }
    return startText + (endText === '' ? '' : separator + endText);
}