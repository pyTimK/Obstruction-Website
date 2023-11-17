import HeaderSettings from "@/components/custom/HeaderSettings";
import { Pages } from "../wrappers/PageWrapper";

interface PaymentPageProps {}

const PaymentPage: React.FC<PaymentPageProps> = ({}) => {
  return (
    <div className="flex flex-col px-5 pt-1 text-center items-center">
      {/* //! HEADER */}
      <HeaderSettings title="About" page={Pages.Profile} />
      {/* //! CONTENT */}
    </div>
  );
};

export default PaymentPage;
