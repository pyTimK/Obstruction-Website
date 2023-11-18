import { Dispatch, SetStateAction, createContext, useState } from "react";
import MainPage from "../pages/MainPage";
import ProfilePage from "../pages/ProfilePage";
import PaymentPage from "../pages/PaymentPage";
import GcashPage from "../pages/GcashPage";
import AboutPage from "../pages/AboutPage";
import GcashFlowPage1 from "../pages/gcash/GcashFlowPage1";
import GcashFlowPage2 from "../pages/gcash/GcashFlowPage2";
import GcashFlowPage3 from "../pages/gcash/GcashFlowPage3";
import GcashFlowPage4 from "../pages/gcash/GcashFlowPage4";
import GcashFlowPage5 from "../pages/gcash/GcashFlowPage5";
import GcashFlowPage6 from "../pages/gcash/GcashFlowPage6";

//? ----------------------
//? PAGES
//? BOTTOM SHEETS
//? ----------------------

export const enum Pages {
  Main,
  Payment,
  Gcash,
  Profile,
  About,
  GcashFlow1,
  GcashFlow2,
  GcashFlow3,
  GcashFlow4,
  GcashFlow5,
  GcashFlow6,
}

export const PageWrapperContext = createContext({
  page: Pages.Main,
  setPage: {} as Dispatch<SetStateAction<Pages>>,
  howMuch: 0,
  setHowMuch: {} as Dispatch<SetStateAction<number>>,
});

interface PageWrapperProps {}

const PageWrapper: React.FC<PageWrapperProps> = ({}) => {
  //! Gcash HOW MUCH
  const [howMuch, setHowMuch] = useState(0);
  //! Page
  const [page, setPage] = useState<Pages>(Pages.Main);

  return (
    <PageWrapperContext.Provider
      value={{
        page,
        setPage,
        howMuch,
        setHowMuch,
      }}
    >
      <div className="bg-bg w-full h-full">
        {page === Pages.Main && <MainPage />}
        {page === Pages.Payment && <PaymentPage />}
        {page === Pages.Gcash && <GcashPage />}
        {page === Pages.Profile && <ProfilePage />}
        {page === Pages.About && <AboutPage />}
        {page === Pages.GcashFlow1 && <GcashFlowPage1 />}
        {page === Pages.GcashFlow2 && <GcashFlowPage2 />}
        {page === Pages.GcashFlow3 && <GcashFlowPage3 />}
        {page === Pages.GcashFlow4 && <GcashFlowPage4 />}
        {page === Pages.GcashFlow5 && <GcashFlowPage5 />}
        {page === Pages.GcashFlow6 && <GcashFlowPage6 />}
      </div>
    </PageWrapperContext.Provider>
  );
};

export default PageWrapper;
