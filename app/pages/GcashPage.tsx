import HeaderSettings from "@/components/custom/HeaderSettings";
import { PageWrapperContext, Pages } from "../wrappers/PageWrapper";
import MyInput from "@/components/templates/MyInput";
import { useInputField } from "@/hooks/useInputField";
import MyButton from "@/components/templates/MyButton";
import { FormEventHandler, useContext, useEffect } from "react";

interface GcashPageProps {}

const GcashPage: React.FC<GcashPageProps> = ({}) => {
  const { setPage, setHowMuch } = useContext(PageWrapperContext);
  const cashInputField = useInputField((cash) => [
    [!cash, "Please enter how much"],
    [Number(cash!) <= 0, "Please enter a positive amount"],
  ]);

  //! Auto Focus on cashInputField on load
  useEffect(() => {
    cashInputField.ref.current?.focus();
  }, [cashInputField.ref]);

  //! Handle Pay
  const pay: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!cashInputField.verify()) return;
    setHowMuch(Number(Number(cashInputField.getValue()).toFixed(2)));
    setPage(Pages.GcashFlow1);
  };

  return (
    <div className="flex flex-col px-5 pt-1 text-center items-center">
      {/* //! HEADER */}
      <HeaderSettings title="GCash" page={Pages.Payment} />

      {/* //! GCASH LOGO */}
      <div className="mt-5 mb-16 flex flex-col items-center">
        <img src="/images/gcash_icon.png" alt="coin slot" width={100} />
        <p className="font-semibold text-xl">GCash</p>
      </div>

      <form onSubmit={pay}>
        {/* //! INPUT FIELD */}
        <div className="relative">
          <MyInput
            inputField={cashInputField}
            className="bg-transparent  text-center"
            placeholder="Enter amount"
            type="number"
          />
          <div className="absolute top-1/2 -translate-y-1/2 left-5 text-darker_primary">
            ₱
          </div>
        </div>

        {/* //! BUTTON */}
        <div className="mt-10 px-10 w-52 mx-auto">
          <MyButton
            label="Pay"
            type="submit"
            className="rounded-full  drop-shadow-lg shadow-lg"
          />
        </div>
      </form>
    </div>
  );
};

export default GcashPage;
