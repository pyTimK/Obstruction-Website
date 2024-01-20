import { motion } from "framer-motion";
import { MouseEventHandler } from "react";

interface FooterWarningOutlinedProps {
  onClick?: MouseEventHandler<SVGSVGElement>;
  size?: number;
}

const FooterWarningOutlined: React.FC<FooterWarningOutlinedProps> = ({
  onClick,
  size = 38,
}) => (
  <motion.svg
    onClick={onClick}
    className="cursor-pointer"
    whileTap={{ scale: 0.8 }}
    width={size}
    viewBox="0 0 38 38"
    height={38}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32.3365 26.8082L32.3364 26.8082L32.3403 26.8147C33.2035 28.2507 33.1454 29.4267 32.5914 30.2272C32.0199 31.0529 30.8129 31.6416 29.0478 31.6416H7.95219C6.18712 31.6416 4.98007 31.0529 4.40863 30.2272C3.85456 29.4267 3.79647 28.2507 4.65968 26.8147L4.65973 26.8147L4.66359 26.8081L15.8247 7.57927C16.7189 6.0933 17.671 5.5 18.4971 5.5C19.3232 5.5 20.2753 6.0933 21.1694 7.57927L32.3365 26.8082ZM20 29H20.5V28.5V26V25.5H20H17H16.5V26V28.5V29H17H20ZM20 22.7149H20.5V22.2149V14V13.5H20H17H16.5V14V22.2149V22.7149H17H20Z"
      stroke="#B1B1B1"
    />
  </motion.svg>
);

export default FooterWarningOutlined;
