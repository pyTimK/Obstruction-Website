import ISOString from "./ISOString";

export default interface Car {
    _id: string;
    model: string;
    color: string;
    email: string;
    phone: string;
    missing: boolean;
    is_detected: boolean;
    date: ISOString;
    snapshots: ISOString[];
}


export const constructEmptyCar = (): Car => {
    return {
        _id: "",
        model: "",
        color: "",
        email: "",
        phone: "",
        missing: false,
        is_detected: false,
        date: (new Date()).toISOString(),
        snapshots: [],
    };
}
