import PaginatedData from "@/classes/PaginatedData";
import ChevronLeft from "./svg/icon/ChevronLeft";
import ChevronRight from "./svg/icon/ChevronRight";

interface PageNavigatorProps<T> {
  paginatedData: PaginatedData<T>;
}

const PageNavigator: React.FC<PageNavigatorProps<any>> = ({
  paginatedData,
}) => {
  return (
    <div>
      {paginatedData && (
        <div className="flex justify-around mt-10">
          <ChevronLeft onClick={() => paginatedData.previousPage()} />
          <p>{paginatedData.page}</p>
          <ChevronRight
            onClick={() => paginatedData.nextPage()}
            hidden={paginatedData.is_last_page}
          />
        </div>
      )}
    </div>
  );
};

export default PageNavigator;
