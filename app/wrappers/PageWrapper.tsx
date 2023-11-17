import { Dispatch, SetStateAction, createContext, useState } from "react";
import MainPage from "../pages/MainPage";
import ProfilePage from "../pages/ProfilePage";
import PaymentPage from "../pages/PaymentPage";
import GcashPage from "../pages/GcashPage";
import AboutPage from "../pages/AboutPage";

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
}

export const PageWrapperContext = createContext({
  page: Pages.Main,
  setPage: {} as Dispatch<SetStateAction<Pages>>,
});

interface PageWrapperProps {}

const PageWrapper: React.FC<PageWrapperProps> = ({}) => {
  //! Page
  const [page, setPage] = useState<Pages>(Pages.Main);

  return (
    <PageWrapperContext.Provider
      value={{
        page,
        setPage,
      }}
    >
      <div className="bg-bg" style={{ width: "100%" }}>
        {page === Pages.Main && <MainPage />}
        {page === Pages.Payment && <PaymentPage />}
        {page === Pages.Gcash && <GcashPage />}
        {page === Pages.Profile && <ProfilePage />}
        {page === Pages.About && <AboutPage />}
      </div>
    </PageWrapperContext.Provider>
  );
};

export default PageWrapper;
