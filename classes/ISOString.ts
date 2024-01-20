type ISOString = string;

export default ISOString;

export const ISOStringToDate = (iso_string: ISOString): Date => {
    return new Date(iso_string);
}

export const DateToISOString = (date: Date): ISOString => {
    return date.toISOString();
}