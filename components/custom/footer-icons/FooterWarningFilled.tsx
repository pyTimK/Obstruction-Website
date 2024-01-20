import { motion } from "framer-motion";
import { MouseEventHandler } from "react";

interface FooterWarningFilledProps {
  onClick?: MouseEventHandler<SVGSVGElement>;
  size?: number;
}

const FooterWarningFilled: React.FC<FooterWarningFilledProps> = ({
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
      d="M32.7688 26.5571L21.5999 7.32491C19.7364 4.22503 17.2577 4.22503 15.3943 7.32491L4.23115 26.5571C2.3677 29.657 4.23115 32.1416 7.95219 32.1416H29.0478C32.7688 32.1416 34.6323 29.657 32.7688 26.5571ZM20.5 29H16.5V25.5H20.5V29ZM20.5 22.5H16.5V13.5H20.5V22.5Z"
      fill="white"
    />
  </motion.svg>
);

export default FooterWarningFilled;
