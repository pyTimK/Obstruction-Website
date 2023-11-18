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
import FH from "@/classes/FH";
import notify from "@/myfunctions/notify";
import LockIcon from "@/components/svg/icon/LockIcon";
import MyModal from "@/components/templates/MyModal";
import useModal from "@/hooks/useModal";
import { twMerge } from "tailwind-merge";

interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = ({}) => {
  const { myUser, device } = useContext(FHContext);

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
        {device?.isUsing && device?.user_id === myUser?.id && <UnlockButton />}
        {(device?.isUsing || device?.isPaying) &&
          device?.user_id !== myUser?.id && <BeingUsed />}
        {device && !device.isUsing && !device.isPaying && <LockButton />}

        {/* //! CUSTOMER SERVICE */}
        <CallCustomerService />
      </div>
    </div>
  );
};

export default MainPage;

//! MAIN TIMER
interface MainTimerProps {}

const MainTimer: React.FC<MainTimerProps> = ({}) => {
  const { myUser, device } = useContext(FHContext);
  const [secLeft, setSecLeft] = useState(0);

  //! Update Timer
  useEffect(() => {
    if (!device || !device.isUsing) return;
    const interval = setInterval(() => {
      const newSecLeft = Math.floor(
        device.end_timestamp - new Date().getTime() / 1000
      );
      if (newSecLeft <= 0) {
        clearInterval(interval);
        return;
      }
      setSecLeft(newSecLeft);
    }, 1000);
    return () => {
      clearInterval(interval);
      setSecLeft(0);
    };
  }, [device]);

  return (
    <div
      className={twMerge(
        "flex flex-col gap-5 items-center justify-center  text-white bg-darker_primary py-6 w-screen",
        device &&
          myUser &&
          device.isUsing &&
          device.user_id !== myUser.id &&
          "opacity-60"
      )}
    >
      {secLeft > 0 ? <LockIcon /> : <UnlockIcon />}
      <Timer secLeft={secLeft} />
      <p className={`${lektonFont} text-sm text-zinc-400`}>
        Device automatically unlocks when <br /> the timer runs out
      </p>
    </div>
  );
};

//! LOCK BUTTON
interface LockButtonProps {}

const LockButton: React.FC<LockButtonProps> = ({}) => {
  const { myUser, device } = useContext(FHContext);
  const { setPage, setHowMuch } = useContext(PageWrapperContext);
  const [lockLoading, setLockLoading] = useState(false);

  //! SET PAYMENT DEVICE
  const setPaymentDevice = () => {
    if (!device || !myUser) return;
    setLockLoading(true);
    FH.Device.update(device, {
      isUsing: false,
      isPaying: true,
      seconds_payed: 0,
      user_id: myUser.id,
    })
      .then(() => {
        setHowMuch(0);
        setPage(Pages.Payment);
      })
      .catch((err) => {
        console.log(err);
        notify(err);
      })
      .finally(() => {
        setLockLoading(false);
      });
  };

  return (
    <div className="mt-20 px-10 w-52 mx-auto">
      <MyButton
        label="LOCK"
        className="rounded-full  drop-shadow-lg shadow-lg"
        onClick={setPaymentDevice}
        disabled={lockLoading}
      />
    </div>
  );
};

//! UNLOCK BUTTON
interface UnlockButtonProps {}

const UnlockButton: React.FC<UnlockButtonProps> = ({}) => {
  const { myUser, device } = useContext(FHContext);
  const { setPage, setHowMuch } = useContext(PageWrapperContext);
  const [unlockLoading, setUnlockLoading] = useState(false);
  const unlockModal = useModal();

  //! UNLOCK DEVICE
  const unlockDevice = () => {
    if (!device || !myUser) return;
    unlockModal.close();
    const newEndTimestamp = Math.floor(new Date().getTime() / 1000);
    setUnlockLoading(true);
    FH.Device.update(device, {
      isUsing: false,
      isPaying: false,
      seconds_payed: 0,
      end_timestamp: newEndTimestamp,
      user_id: "",
    })
      .then(() => {
        setHowMuch(0);
      })
      .catch((err) => {
        console.log(err);
        notify(err);
      })
      .finally(() => {
        setUnlockLoading(false);
      });
  };

  return (
    <div className="mt-20 px-10 w-52 mx-auto">
      <MyButton
        label="UNLOCK"
        className="rounded-full  drop-shadow-lg shadow-lg"
        onClick={unlockModal.open}
        disabled={unlockLoading}
      />
      <MyModal useModal={unlockModal} title="Unlock">
        <div className="flex flex-col items-center gap-5">
          <p className="text-smooth_black text-center">
            Are you sure you want to finish the timer immediately and unlock the
            bicke rack?
          </p>
          <div className="flex gap-5">
            <MyButton
              type="button"
              label="Cancel"
              outlined
              className="rounded-full"
              pY={0.2}
              onClick={unlockModal.close}
            />
            <MyButton
              type="button"
              label="Unlock"
              className="rounded-full bg-red"
              pY={0.2}
              onClick={unlockDevice}
            />
          </div>
        </div>
      </MyModal>
    </div>
  );
};

//! BEING USED
interface BeingUsedProps {}

const BeingUsed: React.FC<BeingUsedProps> = ({}) => {
  return (
    <div className="mt-20 px-10 mx-auto">
      <p className="">Sorry, this device is being used by another user</p>
    </div>
  );
};
