import HeaderSettings from "@/components/custom/HeaderSettings";
import { Pages } from "../wrappers/PageWrapper";
import Title from "@/components/custom/Title";
import { Constants } from "@/classes/Constants";

interface AboutPageProps {}

const AboutPage: React.FC<AboutPageProps> = ({}) => {
  return (
    <div className="flex flex-col px-5 pt-1 text-center items-center">
      {/* //! HEADER */}
      <HeaderSettings title="About" page={Pages.Profile} />
      <img
        src="/images/icons/icon.png"
        alt="watch icon"
        className="h-40 mx-auto mt-20 mb-6"
      />
      <img src="/images/icons/icon.png" alt="logo" className="h-20 mb-6" />
      <Title />
      <p className="mt-10">{Constants.Description}</p>
    </div>
  );
};

export default AboutPage;
