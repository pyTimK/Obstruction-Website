import { PageWrapperContext, Pages } from "@/app/wrappers/PageWrapper";
import GCashIcon from "@/components/custom/GCashIcon";
import MyButton from "@/components/templates/MyButton";
import MyInput from "@/components/templates/MyInput";
import { useInputField } from "@/hooks/useInputField";
import { useContext, useEffect, useState } from "react";

interface GcashFlowPage3Props {}

const PinClassName = {
  line: "w-0 mx-2 h-4 border-l border-r border-zinc-700 translate-x-3`",
  hollow: "w-4 h-4 border-2 rounded-full border-zinc-700`",
  filled: "w-4 h-4 border-2 rounded-full bg-zinc-700 border-zinc-700`",
};

function getPinClassName(index: number, pinLength: number) {
  if (index === pinLength) return PinClassName.line;
  if (index > pinLength) return PinClassName.hollow;
  return PinClassName.filled;
}

const GcashFlowPage3: React.FC<GcashFlowPage3Props> = ({}) => {
  const { setPage } = useContext(PageWrapperContext);
  const pinInput = useInputField((pin) => [
    [!pin, "Please enter your MPIN"],
    [!/^\d+$/.test(pin!), "Please enter a valid MPIN"],
    [pin!.length !== 4, "Please enter a valid MPIN"],
  ]);

  //! Auto Focus on pinInput on load
  useEffect(() => {
    pinInput.ref.current?.focus();
  }, [pinInput.ref]);

  const [pinLength, setPinLength] = useState(0);

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
            <p className="font-semibold">Login to pay with GCash</p>
            <p className="text-sm text-zinc-500 font-light">
              Enter your 4-digit MPIN.
            </p>

            <div className="relative m-auto">
              <div className="flex gap-4 items-center m-auto my-10">
                <div className={`${getPinClassName(0, pinLength)}`} />
                <div className={`${getPinClassName(1, pinLength)}`} />
                <div className={`${getPinClassName(2, pinLength)}`} />
                <div className={`${getPinClassName(3, pinLength)}`} />
              </div>
              <MyInput
                inputField={pinInput}
                type="number"
                maxLength={4}
                className="absolute w-36 opacity-0 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
                onChange={(e) => {
                  const value = pinInput.getValue();
                  setPinLength(value?.length ?? 0);
                  if (value && value.length > 4) {
                    pinInput.setValue(value.slice(0, 4));
                  }
                }}
              />
            </div>

            <MyButton
              label="NEXT"
              className="rounded-full bg-gcash_blue mb-3"
              onClick={() => setPage(Pages.GcashFlow4)}
              disabled={pinLength < 4}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GcashFlowPage3;
