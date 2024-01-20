import ISOString from "./ISOString";

export default interface Violation {
    _id: string;
    plate_number: string;
    model: string;
    color: string;
    violations: ViolationType[];
    date: ISOString;
}

export type ViolationType = "Obstruction" | "Missing" | "Coding";



