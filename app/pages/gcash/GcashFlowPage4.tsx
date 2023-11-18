import { PageWrapperContext, Pages } from "@/app/wrappers/PageWrapper";
import GCashIcon from "@/components/custom/GCashIcon";
import MyButton from "@/components/templates/MyButton";
import { interFont, lektonFont } from "@/styles/fonts";
import { useContext, useState } from "react";

function generateRandomThousands() {
  // generate random between 1000.00-10000.00, includes two decimal
  return Math.floor(Math.random() * 900000 + 100000) / 100;
}

interface GcashFlowPage4Props {}

const GcashFlowPage4: React.FC<GcashFlowPage4Props> = ({}) => {
  const { howMuch, setPage } = useContext(PageWrapperContext);
  const [balance, setBalance] = useState(generateRandomThousands());

  return (
    <div className="w-screen h-screen bg-gcash_bg">
      {/* //! BLUE BG */}
      <div className="pt-5 flexjustify-center items-start text-white h-40 bg-gcash_blue">
        {/* //! GCASH LOGO */}
        <div className="flex items-center justify-center gap-1 ">
          <GCashIcon size={25} />
          <p className="font text-xl">GCash</p>
        </div>
      </div>

      {/* //! CARD */}
      <div className="flex flex-col gap-3 -translate-y-24">
        <div
          className="flex flex-col min-w-80 w-11/12 max-w-xl m-auto rounded drop-shadow"
          style={{ backgroundColor: "#FEFEFE" }}
        >
          <div className="flex flex-col w-full px-7 py-3">
            <p className="font-semibold m-auto text-gcash_blue">RAPYDGOTRADE</p>

            {/* //! PAY WITH */}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold text-light_primary">
                PAY WITH
              </p>
              <div className="flex justify-between pl-2">
                <div className="flex flex-col">
                  <p className="text-sm">GCash</p>
                  <p className="text-xs font-light text-gcash_blue">Pay now</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex flex-col text-right">
                    <p className="text-sm">PHP {balance.toFixed(2)}</p>
                    <p className="text-xs font-light text-zinc-400">
                      Available Balance
                    </p>
                  </div>
                  <input
                    type="radio"
                    checked
                    readOnly
                    name="gcashflowpage4radio"
                    className="border-0 w-5 h-5 bg-red"
                  />
                </div>
              </div>
            </div>

            {/* //! YOU ARE ABOUT TO PAY */}
            <div className="flex flex-col gap-3 mt-14">
              <p className="text-xs font-semibold text-light_primary">
                YOU ARE ABOUT TO PAY
              </p>
              <div className="flex flex-col gap-2 justify-between pl-2">
                <div className="flex justify-between">
                  <p className="text-sm">Amount</p>
                  <p className="text-sm">PHP {howMuch.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                    <p className="text-sm">Discount</p>
                    <p className="text-sm text-gcash_blue">{`>`}</p>
                  </div>
                  <p className="text-sm">No available voucher</p>
                </div>
              </div>
            </div>

            {/* //! LINE */}
            <hr className="my-5 opacity-10" />

            {/* //! TOTAL */}
            <div className="pl-2 flex justify-between">
              <p className="font-semibold">Total</p>
              <div className="flex items-center gap-2 font-bold">
                <p className="text">PHP</p>
                <p className="text-2xl">{howMuch.toFixed(2)}</p>
              </div>
            </div>

            <p className="mt-12 mb-4 text-center text-xs text-zinc-500">
              Please review to ensure that the details are correct before you
              proceed
            </p>

            {/* //! BUTTON */}
            <MyButton
              label={`PAY PHP ${howMuch.toFixed(2)}`}
              className="rounded-full bg-gcash_blue mb-3"
              classNameText={`${interFont} text-sm font-bold`}
              onClick={() => setPage(Pages.GcashFlow5)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GcashFlowPage4;
