import Car from "@/classes/Car";
import PaginatedData from "@/classes/PaginatedData";
import Violation from "@/classes/Violation";
import { createContext } from "react";
import HomePage from "../pages/HomePage";
import Reading from "@/classes/Readings";
import useMongoDBWatcherPage from "@/hooks/useMongoDBWatcherPage";
import PageWrapper from "./PageWrapper";
import Coding from "@/classes/Coding";
//? ----------------------
//? MONGODB DATA OBJECTS
//? ----------------------

export const MDBContext = createContext({
  cars: null as PaginatedData<Car> | null,
  violations: null as PaginatedData<Violation> | null,
  readings: null as PaginatedData<Reading> | null,
  codings: null as PaginatedData<Coding> | null,
});

interface FHWrapperProps {}

const FHWrapper: React.FC<FHWrapperProps> = ({}) => {
  const cars = useMongoDBWatcherPage<Car>("car", 5);
  const violations = useMongoDBWatcherPage<Violation>("violation", 5);
  const readings = useMongoDBWatcherPage<Reading>("reading", 3);
  const codings = useMongoDBWatcherPage<Coding>("coding", 7);

  // console.log("cars", cars);
  // console.log("violations", violations);
  // console.log("readings", readings);

  return (
    <MDBContext.Provider value={{ cars, readings, violations, codings }}>
      <PageWrapper />
    </MDBContext.Provider>
  );

  // //! LOADING
  // const loading = useLoading(
  //   loadingAdminSettings,
  //   loadingUser,
  //   loadingMyUser,
  //   loadingDevice
  // );

  // // console.log("loading", loading);
  // // console.log("loadingAdminSettings", loadingAdminSettings);
  // // console.log("loadingUser", loadingUser);
  // // console.log("loadingMyUser", loadingMyUser);
  // // console.log("loadingDevice", loadingDevice);

  // //! PAGES
  // // if (loading) return <div className="bg-red w-screen h-screen"></div>;
  // // if (adminSettings === null) return <QuasarPage />;
  // if (adminSettings === null) adminSettings = constructEmptyAdminSettings();
  // // if (adminSettings?.quasar) return <QuasarPage />;
  // if (user === null) return <SignInPage />;
  // if (myUser === null) return <RegisterPage user={user} />;
  // return (
  //   <FHContext.Provider value={{ adminSettings, user, myUser, device }}>
  //     <PageWrapper />
  //   </FHContext.Provider>
  // );
};

export default FHWrapper;
