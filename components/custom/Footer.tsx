import { PageWrapperContext, Pages } from "@/app/wrappers/PageWrapper";
import { useContext } from "react";
import FooterHomeFilled from "./footer-icons/FooterHomeFilled";
import FooterHomeOutlined from "./footer-icons/FooterHomeOutlined";
import FooterCarFilled from "./footer-icons/FooterCarFilled";
import FooterCarOutlined from "./footer-icons/FooterCarOutlined";
import FooterWarningFilled from "./footer-icons/FooterWarningFilled";
import FooterWarningOutlined from "./footer-icons/FooterWarningOutlined";
import FooterSettingsFilled from "./footer-icons/FooterSettingsFilled";
import FooterSettingsOutlined from "./footer-icons/FooterSettingsOutlined";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  const { page, setPage } = useContext(PageWrapperContext);
  return (
    <div className="absolute flex justify-around items-center bottom-0 left-0 w-full h-16 bg-black">
      <div onClick={() => setPage(Pages.Home)}>
        {page === Pages.Home ? <FooterHomeFilled /> : <FooterHomeOutlined />}
      </div>
      <div onClick={() => setPage(Pages.Car)}>
        {page === Pages.Car ? <FooterCarFilled /> : <FooterCarOutlined />}
      </div>
      <div onClick={() => setPage(Pages.Violation)}>
        {page === Pages.Violation ? (
          <FooterWarningFilled />
        ) : (
          <FooterWarningOutlined />
        )}
      </div>
      <div onClick={() => setPage(Pages.Coding)}>
        {page === Pages.Coding ? (
          <FooterSettingsFilled />
        ) : (
          <FooterSettingsOutlined />
        )}
      </div>
    </div>
  );
};

export default Footer;
