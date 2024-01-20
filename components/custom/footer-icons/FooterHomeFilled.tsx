import { motion } from "framer-motion";
import { MouseEventHandler } from "react";

interface FooterHomeFilledProps {
  onClick?: MouseEventHandler<SVGSVGElement>;
  size?: number;
}

const FooterHomeFilled: React.FC<FooterHomeFilledProps> = ({
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
      d="M20.3098 6.07079C19.3379 5.00867 17.6521 5.04846 16.7316 6.15524L7.91669 16.7528V30.875C7.91669 32.1866 8.98001 33.25 10.2917 33.25H13.125C14.4366 33.25 15.5 32.1866 15.5 30.875V26.1074C15.5 24.7958 16.5633 23.7324 17.8749 23.7324H20.125C21.4366 23.7324 22.5 24.7958 22.5 26.1074V30.875C22.5 32.1866 23.5634 33.25 24.875 33.25H27.7084C29.02 33.25 30.0834 32.1866 30.0834 30.875V16.7528L20.3098 6.07079Z"
      fill="white"
    />
  </motion.svg>
);

export default FooterHomeFilled;
