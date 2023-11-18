import CallCustomerService from "@/components/custom/CallCustomerService";
import Header from "@/components/custom/Header";
import Timer from "@/components/custom/Timer";
import PhoneIcon from "@/components/svg/icon/PhoneIcon";
import UnlockIcon from "@/components/svg/icon/UnlockIcon";
import MyButton from "@/components/templates/MyButton";
import { lektonFont } from "@/styles/fonts";
import { PageWrapperContext, Pages } from "../wrappers/PageWrapper";
import { useContext, useEffect, useState } from "react";
import { FHContext } from "../wrappers/FHWrapper";

interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = ({}) => {
  const { setPage } = useContext(PageWrapperContext);
  return (
    <div>
      <Header />
      <div className="flex flex-col pt-32  min-h-screen text-center">
        {/* //! WELCOME */}
        <div className="mb-10">
          <p className={`${lektonFont} mb-2 text-5xl`}>Welcome!</p>
          <p className={`${lektonFont} text-sm text-zinc-400`}>
            You can lock your bike by clicking the <br /> Lock button below
          </p>
        </div>

        {/* //! TIMER */}
        <MainTimer />

        {/* //! LOCK BUTTON */}
        <div className="mt-20 px-10 w-52 mx-auto">
          <MyButton
            label="Lock"
            className="rounded-full  drop-shadow-lg shadow-lg"
            onClick={() => {
              setPage(Pages.Payment);
            }}
          />
        </div>

        {/* //! CUSTOMER SERVICE */}
        <CallCustomerService />
      </div>
    </div>
  );
};

export default MainPage;

interface MainTimerProps {}

const MainTimer: React.FC<MainTimerProps> = ({}) => {
  const { device } = useContext(FHContext);
  const [secLeft, setSecLeft] = useState(0);

  //! Update Timer
  useEffect(() => {
    if (!device || !device.isUsing) return;
    const interval = setInterval(() => {
      setSecLeft(device.end_timestamp - Math.floor(Date.now() / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [device]);

  return (
    <div className="flex flex-col gap-5 items-center justify-center  text-white bg-darker_primary py-6 w-screen">
      <UnlockIcon />
      <Timer secLeft={secLeft} />
      <p className={`${lektonFont} text-sm text-zinc-400`}>
        Device automatically unlocks when <br /> the timer runs out
      </p>
    </div>
  );
};
