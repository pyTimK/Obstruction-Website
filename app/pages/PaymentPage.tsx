import { motion } from "framer-motion";
import HeaderSettings from "@/components/custom/HeaderSettings";
import { PageWrapperContext, Pages } from "../wrappers/PageWrapper";
import Timer from "@/components/custom/Timer";
import { useContext, useEffect, useState } from "react";
import Card from "@/components/custom/Card";
import { FHContext } from "../wrappers/FHWrapper";
import UnlockIcon from "@/components/svg/icon/UnlockIcon";
import { lektonFont } from "@/styles/fonts";
import MyButton from "@/components/templates/MyButton";
import FH from "@/classes/FH";
import notify from "@/myfunctions/notify";
import useModal from "@/hooks/useModal";
import MyModal from "@/components/templates/MyModal";

interface PaymentPageProps {}

const PaymentPage: React.FC<PaymentPageProps> = ({}) => {
  const { myUser, device } = useContext(FHContext);
  const { setPage, setHowMuch } = useContext(PageWrapperContext);
  const [startLoading, setStartLoading] = useState(false);
  const backmodal = useModal();

  //! LOCK DEVICE
  const lockDevice = () => {
    if (!device || !myUser) return;
    const newEndTimestamp = new Date().getTime() / 1000 + device.seconds_payed;
    setStartLoading(true);
    FH.Device.update(device, {
      isUsing: true,
      isPaying: false,
      seconds_payed: 0,
      end_timestamp: newEndTimestamp,
      user_id: myUser.id,
    })
      .then(() => {
        setHowMuch(0);
        setPage(Pages.Main);
      })
      .catch((err) => {
        console.log(err);
        notify(err);
      })
      .finally(() => {
        setStartLoading(false);
      });
  };

  //! CANCEL PAYMENT
  const cancelPayment = () => {
    if (!device) return;
    backmodal.close();
    setStartLoading(true);
    FH.Device.update(device, {
      isUsing: false,
      isPaying: false,
      seconds_payed: 0,
      end_timestamp: Math.floor(new Date().getTime() / 1000),
      user_id: "",
    })
      .then(() => {
        setHowMuch(0);
        setPage(Pages.Main);
      })
      .catch((err) => {
        console.log(err);
        notify(err);
      })
      .finally(() => {
        setStartLoading(false);
      });
  };

  return (
    <div className="flex flex-col px-5 pt-1 text-center items-center">
      {/* //! HEADER */}
      <HeaderSettings title="Payment" onClick={backmodal.open} />
      <div>
        {/* //! TIMER */}
        <div className="bg-darker_primary text-white">
          <PaymentTimer />
        </div>
        <div className="h-10" />

        {/* //! COIN SLOT */}
        <Card
          info="You may drop 5-peso coins on the coin slot"
          img="coin_slot.png"
        />
        <p className="text-zinc-500 my-5">or</p>

        {/* //! GCASH */}
        <motion.div
          whileTap={{ scale: 0.85 }}
          onClick={() => setPage(Pages.Gcash)}
          className="flex gap-5 border border-light_primary items-center justify-center bg-white drop-shadow-lg shadow-lg pl-2 pr-5 py-1 rounded-full mx-auto w-fit"
        >
          <img
            className="translate-x-3"
            src="/images/gcash_icon.png"
            alt="coin slot"
            width={40}
          />
          <p>Pay using GCash</p>
        </motion.div>

        {/* //! START BUTTON */}
        <div className="px-10">
          <MyButton
            label="Start"
            onClick={lockDevice}
            className="mt-10 bg-red rounded-full drop-shadow-lg shadow-lg"
            disabled={
              !device ||
              !device.isPaying ||
              device.seconds_payed <= 0 ||
              startLoading
            }
            // color="light_primary"
          />
        </div>
      </div>
      <MyModal useModal={backmodal} title="Unlock">
        <div className="flex flex-col items-center gap-5">
          <p className="text-smooth_black text-center">
            Are you sure you want to cancel the service?
          </p>
          <div className="flex gap-5">
            <MyButton
              type="button"
              label="No"
              outlined
              className="rounded-full"
              pY={0.2}
              onClick={backmodal.close}
            />
            <MyButton
              type="button"
              label="Yes"
              className="rounded-full bg-red"
              pY={0.2}
              onClick={cancelPayment}
            />
          </div>
        </div>
      </MyModal>
    </div>
  );
};

export default PaymentPage;

interface PaymentTimerProps {}

const PaymentTimer: React.FC<PaymentTimerProps> = ({}) => {
  const { device } = useContext(FHContext);
  const [secLeft, setSecLeft] = useState(0);

  //! Update Timer
  useEffect(() => {
    if (!device || !device.isPaying) return;
    setSecLeft(device.seconds_payed);
  }, [device]);

  return (
    <div className="flex flex-col gap-5 items-center justify-center  text-white bg-darker_primary py-6 w-screen">
      <Timer secLeft={secLeft} />
      <p className={`${lektonFont} text-sm text-zinc-400`}>
        Add time using any of the options below
      </p>
    </div>
  );
};
