import { PageWrapperContext, Pages } from "@/app/wrappers/PageWrapper";
import GCashIcon from "@/components/custom/GCashIcon";
import MyButton from "@/components/templates/MyButton";
import MyInput from "@/components/templates/MyInput";
import { useInputField } from "@/hooks/useInputField";
import { useContext } from "react";

interface GcashFlowPage2Props {}

const GcashFlowPage2: React.FC<GcashFlowPage2Props> = ({}) => {
  const { setPage, howMuch } = useContext(PageWrapperContext);
  const phoneInput = useInputField((phone) => [
    [!phone, "Please enter your phone number"],
    [!/^\d+$/.test(phone!), "Please enter a valid phone number"],
    [phone!.length !== 10, "Please enter a valid phone number"],
  ]);
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
          <div
            className="w-full px-5 py-3 rounded-t"
            style={{ backgroundColor: "#F7F7F7" }}
          >
            <div className="flex gap-6 text-sm">
              <div className="flex flex-col gap-2">
                <p className="text-zinc-400 font-light">Merchant</p>
                <p className="text-zinc-400 font-light">Amount Due</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-zinc-500">RAPYDGOTRADE</p>
                <p className="text-light_primary">PHP {howMuch.toFixed(2)}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-7 w-full px-7 py-3">
            <p className="font-semibold">Login to pay with GCash</p>
            <div className="flex flex-col">
              <p className="text-xs text-zinc-500 font-light">Mobile number</p>
              <div className="flex">
                <div className="border-b border-zinc-300 pr-2">
                  <p className="">+63</p>
                </div>
                <MyInput
                  inputField={phoneInput}
                  className="bg-transparent border-t-0 border-r-0 border-l border-b rounded-none border-zinc-300 py-0 pl-2"
                  defaultValue="9123456789"
                />
              </div>
            </div>
            <MyButton
              label="NEXT"
              className="rounded-full bg-gcash_blue mb-3"
              onClick={() => setPage(Pages.GcashFlow3)}
            />
          </div>
        </div>

        {/* //! DONT HAVE AN ACCOUNT? */}
        <div className="flex gap-1 m-auto">
          <p className="text-sm text-zinc-500">Don&apos;t have an account?</p>
          <a
            className="text-sm text-light_primary underline font-semibold"
            href="https://m.gcash.com/gcashapp/gcash-promotion-web/1.0.1/index.html"
            target="_blank"
          >
            Register now
          </a>
        </div>
      </div>
    </div>
  );
};

export default GcashFlowPage2;
