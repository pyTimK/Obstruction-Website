import { motion } from "framer-motion";
import HeaderSettings from "@/components/custom/HeaderSettings";
import { PageWrapperContext, Pages } from "../wrappers/PageWrapper";
import Timer from "@/components/custom/Timer";
import { useContext, useEffect, useState } from "react";
import Card from "@/components/custom/Card";
import { FHContext } from "../wrappers/FHWrapper";
import UnlockIcon from "@/components/svg/icon/UnlockIcon";
import { lektonFont } from "@/styles/fonts";

interface PaymentPageProps {}

const PaymentPage: React.FC<PaymentPageProps> = ({}) => {
  const { setPage } = useContext(PageWrapperContext);
  const [secLeft, setSecLeft] = useState(0);
  return (
    <div className="flex flex-col px-5 pt-1 text-center items-center">
      {/* //! HEADER */}
      <HeaderSettings title="Payment" page={Pages.Main} />
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
      </div>
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
