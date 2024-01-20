import { motion } from "framer-motion";
import { MouseEventHandler } from "react";

interface HeaderBackgroundProps {
  onClick?: MouseEventHandler<SVGSVGElement>;
  size?: number;
  height?: number;
}

const HeaderBackground: React.FC<HeaderBackgroundProps> = ({
  onClick,
  size = 430,
  height = 77,
}) => (
  <motion.svg
    onClick={onClick}
    className="cursor-pointer"
    width={size}
    height={height}
    viewBox="0 0 430 77"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_77_2"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width={size}
    >
      <rect width={size} height={height} fill="#060606" />
    </mask>
    <g mask="url(#mask0_77_2)">
      <rect width={size} height={height} fill="#27292C" />
      <path
        d="M520.5 106C520.5 192.01 456.8 261.5 378.5 261.5C300.2 261.5 236.5 192.01 236.5 106C236.5 19.9899 300.2 -49.5 378.5 -49.5C456.8 -49.5 520.5 19.9899 520.5 106Z"
        fill="#011E2A"
        stroke="#515454"
        strokeWidth="3"
      />
      <path
        d="M436.5 38C436.5 68.6898 412.286 93.5 382.5 93.5C352.714 93.5 328.5 68.6898 328.5 38C328.5 7.31024 352.714 -17.5 382.5 -17.5C412.286 -17.5 436.5 7.31024 436.5 38Z"
        fill="#27292C"
        stroke="#515454"
        strokeWidth="3"
      />
      <path
        d="M428.5 156C428.5 225.399 375.585 281.5 310.5 281.5C245.415 281.5 192.5 225.399 192.5 156C192.5 86.6009 245.415 30.5 310.5 30.5C375.585 30.5 428.5 86.6009 428.5 156Z"
        stroke="black"
        strokeWidth="3"
      />
      <path
        d="M441.5 -27C441.5 -3.31395 424.96 15.5 405 15.5C385.04 15.5 368.5 -3.31395 368.5 -27C368.5 -50.6861 385.04 -69.5 405 -69.5C424.96 -69.5 441.5 -50.6861 441.5 -27Z"
        stroke="black"
        strokeWidth="3"
      />
      <rect
        x="418.549"
        y="-15.951"
        width={size}
        transform="rotate(30 418.549 -15.951)"
        fill="#020608"
        stroke="#515454"
        strokeWidth="3"
      />
    </g>
  </motion.svg>
);

export default HeaderBackground;
