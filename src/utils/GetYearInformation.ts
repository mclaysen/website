export const GetYearInformation = (startDate: Date, endDate: Date | undefined, currentRole: Boolean) => {
    let endText = "";

    let startDateValue = new Date(startDate);
    if(currentRole || endDate === undefined)
    {
        endText = "present";
    }
    else
    {
        let endDateValue = new Date(endDate)
        endText = endDateValue.getMonth() + "/"+ endDateValue.getFullYear();
    }
    return startDateValue.getMonth()+"/"+startDateValue.getFullYear() + " - " + endText;
}