import ISOString from "./ISOString";
import { ViolationType } from "./Violation";

export default interface Reading {
    _id: string;
    plate_number: string;
    date: ISOString;
    violations: ViolationType[];
}

