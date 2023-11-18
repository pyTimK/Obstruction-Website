import { FHContext } from "@/app/wrappers/FHWrapper";
import { PageWrapperContext, Pages } from "@/app/wrappers/PageWrapper";
import { Constants } from "@/classes/Constants";
import FH from "@/classes/FH";
import CheckIcon from "@/components/svg/icon/CheckIcon";
import MyButton from "@/components/templates/MyButton";
import { interFont } from "@/styles/fonts";
import { MouseEventHandler, useContext, useState } from "react";

interface GcashFlowPage6Props {}

const GcashFlowPage6: React.FC<GcashFlowPage6Props> = ({}) => {
  const { device } = useContext(FHContext);
  const { howMuch, setPage } = useContext(PageWrapperContext);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [referenceNo, setReferenceNo] = useState(generateRandom9Digits());

  const addHowMuchSeconds: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (!device) return;
    let newSeconds =
      device.seconds_payed + Math.floor(howMuch * Constants.pesoToMinutes * 60);

    if (newSeconds > Constants.maxSeconds) {
      newSeconds = Constants.maxSeconds;
    }

    FH.Device.update(device, {
      seconds_payed: newSeconds,
    });
    setPage(Pages.Payment);
  };

  return (
    <div className="w-screen h-screen py-3 bg-gcash_blue">
      {/* //! CARD */}
      <div className="flex flex-col gap-3">
        <div
          className="flex flex-col min-w-80 w-11/12 max-w-xl m-auto rounded drop-shadow"
          style={{ backgroundColor: "#FEFEFE" }}
        >
          <div className="flex flex-col w-full px-7 py-3">
            {/* //! TITLE */}
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <p className="text-xl font-bold text-darker_primary">
                  RAPYDGOTRADE
                </p>
                <p className="text-xs text-darker_primary">
                  Pid and linked via GCash
                </p>
              </div>
              <div className="w-7 h-7 flex justify-center items-center bg-gcash_blue rounded-full">
                <CheckIcon size={16} />
              </div>
            </div>

            {/* //! LINE */}
            <hr className="my-1 opacity-5" />

            {/* //! AMOUNT */}
            <div className="flex justify-between font-semibold text-sm">
              <p className=" text-darker_primary opacity-40">Amount</p>
              <p className="text-darker_primary">{howMuch.toFixed(2)}</p>
            </div>

            {/* //! LINE */}
            <hr className="my-1 opacity-30" />

            {/* //! TOTAL */}
            <div className="flex justify-between text-darker_primary font-bold">
              <p className="">Total</p>
              <p className="">₱ {howMuch.toFixed(2)}</p>
            </div>

            {/* //! LINE */}
            <hr className="my-1 opacity-5" />

            <p className="mt-12 mb-2 text-center text-xs text-zinc-500">
              Click to redirect you back to the merchant
            </p>

            {/* //! BUTTON */}
            <MyButton
              label="Proceed"
              className="rounded-full bg-gcash_blue mb-3"
              classNameText={`${interFont} text-sm font-bold`}
              onClick={addHowMuchSeconds}
            />

            {/* //! DATE */}
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center font-semibold">
                <p className="text-xs text-zinc-400">Date</p>
                <p className="text-xs text-zinc-400">
                  {currentDate.toLocaleString("en-US", dateFormatOptions)}
                </p>
              </div>
              <div className="flex justify-between items-center font-semibold">
                <p className="text-xs text-zinc-400">Reference No.</p>
                <p className="text-xs font-bold text-darker_primary">
                  {referenceNo}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Define options for formatting
let dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
};

function generateRandom9Digits() {
  return Math.floor(100000000 + Math.random() * 900000000);
}

export default GcashFlowPage6;
