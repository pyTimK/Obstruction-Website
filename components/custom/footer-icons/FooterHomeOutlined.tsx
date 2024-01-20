import { motion } from "framer-motion";
import { MouseEventHandler } from "react";

interface FooterHomeOutlinedProps {
  onClick?: MouseEventHandler<SVGSVGElement>;
  size?: number;
}

const FooterHomeOutlined: React.FC<FooterHomeOutlinedProps> = ({
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
      d="M17.5004 6.79472L17.5004 6.7947C18.0333 6.15399 19.0093 6.13089 19.572 6.74585L29.0834 17.1412V30.875C29.0834 31.6344 28.4677 32.25 27.7084 32.25H24.875C24.1156 32.25 23.5 31.6344 23.5 30.875V26.1074C23.5 24.2435 21.9889 22.7324 20.125 22.7324H17.8749C16.011 22.7324 14.5 24.2435 14.5 26.1074V30.875C14.5 31.6344 13.8843 32.25 13.125 32.25H10.2917C9.53231 32.25 8.91669 31.6344 8.91669 30.875V17.1143L17.5004 6.79472Z"
      stroke="#B1B1B1"
      strokeWidth="2"
    />
  </motion.svg>
);

export default FooterHomeOutlined;
