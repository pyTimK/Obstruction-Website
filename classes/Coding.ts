export default interface Coding {
    _id: string;
    not_allowed: string[];
}

export const constructEmptyCoding = (): Coding => {
    return {
        _id: "",
        not_allowed: [],
    };
}