import { Device } from "@/classes/Device";
import FH from "@/classes/FH";
import { MyUser } from "@/classes/MyUser";
import QuasarPage from "@/components/templates/QuasarPage";
import { useLoading } from "@/hooks/useLoading";
import { useUser } from "@/hooks/useUser";
import { User } from "firebase/auth";
import { createContext } from "react";
import RegisterPage from "../pages_outer/RegisterPage";
import SignInPage from "../pages_outer/SignInPage";
import PageWrapper from "./PageWrapper";
import { useFHWatch } from "@/hooks/useFHWatch";

//? ----------------------
//? FIRESTORE DATA OBJECTS
//? ----------------------

export const FHContext = createContext({
  user: {} as User,
  myUser: {} as MyUser | null,
  device: {} as Device | null,
});

interface FHWrapperProps {}

const FHWrapper: React.FC<FHWrapperProps> = ({}) => {
  //! USER
  const [user, loadingUser] = useUser();

  //! QUASAR
  const [adminSettings, loadingAdminSettings] = useFHWatch(
    FH.AdminSettings,
    "settings"
  );

  //! MY USER
  const [myUser, loadingMyUser] = useFHWatch(FH.MyUser, user?.uid);

  //! DEVICE
  const [device, loadingDevice] = useFHWatch(FH.Device, "q3WCJbtnB1fOXb3CVjJn");

  //! LOADING
  const loading = useLoading(
    loadingAdminSettings,
    loadingUser,
    loadingMyUser,
    loadingDevice
  );
  // console.log("loading", loading);
  // console.log("loadingAdminSettings", loadingAdminSettings);
  // console.log("loadingUser", loadingUser);
  // console.log("loadingMyUser", loadingMyUser);
  // console.log("loadingDevice", loadingDevice);

  //! PAGES
  if (loading) return <div className="bg-red w-screen h-screen"></div>;
  if (adminSettings?.quasar) return <QuasarPage />;
  if (user === null) return <SignInPage />;
  if (myUser === null) return <RegisterPage user={user} />;
  return (
    <FHContext.Provider value={{ user, myUser, device }}>
      <PageWrapper />
    </FHContext.Provider>
  );
};

export default FHWrapper;
