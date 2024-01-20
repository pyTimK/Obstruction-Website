import PaginatedData from "@/classes/PaginatedData";
import { socket } from "@/classes/SocketIO";
import { useEffect, useState } from "react";

function useMongoDBWatcherPage<T>(name: string, page_size: number) {
    const [page, setPage] = useState(1);
    const [data, setData] = useState<T[]>([]);
    const [is_last_page, setIsLastPage] = useState(false);

    socket.on(`${name}_read_page`, ({ data, is_last_page }: { data: string[], is_last_page: boolean }) => {
        const parsed_data = data.map((item) => JSON.parse(item) as T);
        setData(parsed_data);
        setIsLastPage(is_last_page);
    });

    socket.on(`${name}_edited`, (_) => {
        socket.emit(`${name}_read_page`, page, page_size);
    });


    useEffect(() => {
        socket.emit(`${name}_read_page`, page, page_size);
    }, [page, page_size]);

    //Next Page
    const nextPage = () => {
        setPage(page + 1);
    }

    //Previous Page
    const previousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    return { data, page, nextPage, previousPage, setPage, is_last_page } as PaginatedData<T>;
}

export default useMongoDBWatcherPage;