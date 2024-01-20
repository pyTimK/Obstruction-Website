import { Dispatch, SetStateAction, createContext, useState } from "react";
import HomePage from "../pages/HomePage";
import CarPage from "../pages/CarPage";
import ViolationPage from "../pages/ViolationPage";
import Footer from "@/components/custom/Footer";
import CodingPage from "../pages/CodingPage";

//? ----------------------
//? PAGES
//? BOTTOM SHEETS
//? ----------------------

export const enum Pages {
  Home,
  Car,
  Violation,
  Coding,
}

export const PageWrapperContext = createContext({
  page: Pages.Home,
  setPage: {} as Dispatch<SetStateAction<Pages>>,
});

interface PageWrapperProps {}

const PageWrapper: React.FC<PageWrapperProps> = ({}) => {
  //! Gcash HOW MUCH
  //! Page
  const [page, setPage] = useState<Pages>(Pages.Home);

  return (
    <PageWrapperContext.Provider
      value={{
        page,
        setPage,
      }}
    >
      <div className="bg-bg w-full h-full">
        {page === Pages.Home && <HomePage />}
        {page === Pages.Car && <CarPage />}
        {page === Pages.Violation && <ViolationPage />}
        {page === Pages.Coding && <CodingPage />}
      </div>
      <Footer />
    </PageWrapperContext.Provider>
  );
};

export default PageWrapper;
