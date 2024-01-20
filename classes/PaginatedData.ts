import { Dispatch, SetStateAction } from "react";

export default interface PaginatedData<T> {
    data: T[];
    page: number;
    nextPage: () => void;
    previousPage: () => void;
    setPage: Dispatch<SetStateAction<number>>;
    is_last_page: boolean;
}