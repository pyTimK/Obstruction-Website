import { motion } from "framer-motion";
import { MouseEventHandler } from "react";

interface GCashIconProps {
  onClick?: MouseEventHandler<SVGSVGElement>;
  size?: number;
}

const GCashIcon: React.FC<GCashIconProps> = ({ onClick, size = 124 }) => (
  <motion.svg
    onClick={onClick}
    className="cursor-pointer"
    width={size}
    viewBox="0 0 124 105"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M112.527 23.7256C116.702 32.4083 119.042 42.1408 119.042 52.4191C119.042 62.6974 116.702 72.4299 112.527 81.1118"
      stroke="white"
      strokeWidth="9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M100.014 29.7289C99.4821 28.6234 98.5332 27.7743 97.3756 27.3685C96.2181 26.9626 94.9467 27.0333 93.8412 27.5648C92.7357 28.0963 91.8866 29.0453 91.4808 30.2028C91.0749 31.3604 91.1456 32.6317 91.6771 33.7372L100.014 29.7289ZM91.6771 71.1003C91.1455 72.2058 91.0747 73.4772 91.4805 74.6348C91.8863 75.7925 92.7353 76.7415 93.8408 77.2731C94.9463 77.8048 96.2177 77.8755 97.3754 77.4697C98.533 77.0639 99.482 76.2149 100.014 75.1094L91.6771 71.1003ZM79.1433 18.2581C79.6233 18.6343 80.1728 18.9119 80.7604 19.0749C81.348 19.2379 81.9621 19.283 82.5672 19.2078C83.1723 19.1326 83.7566 18.9384 84.2864 18.6365C84.8162 18.3346 85.2811 17.9309 85.6543 17.4487C86.0274 16.9664 86.3016 16.4152 86.4609 15.8266C86.6202 15.238 86.6616 14.6237 86.5826 14.019C86.5036 13.4144 86.3058 12.8313 86.0007 12.3034C85.6955 11.7755 85.2889 11.3131 84.8043 10.9429L79.1433 18.2581ZM84.8043 93.8954C85.7658 93.1417 86.3901 92.0383 86.5408 90.826C86.6915 89.6137 86.3564 88.391 85.6088 87.4248C84.8611 86.4587 83.7616 85.8276 82.5502 85.6693C81.3389 85.5111 80.1141 85.8385 79.1433 86.5802L84.8043 93.8954ZM52.75 95.5858C28.9097 95.5858 9.58334 76.2595 9.58334 52.4192H0.333344C0.333344 81.3678 23.8014 104.836 52.75 104.836V95.5858ZM9.58334 52.4192C9.58334 28.5788 28.9097 9.25249 52.75 9.25249V0.00249414C23.8014 0.00249414 0.333344 23.4705 0.333344 52.4192H9.58334ZM91.6771 33.7372C94.3927 39.3836 95.9167 45.7175 95.9167 52.4192H105.167C105.167 44.3007 103.317 36.6001 100.014 29.7289L91.6771 33.7372ZM95.9167 52.4192C95.9167 59.1208 94.3927 65.4532 91.6771 71.1003L100.014 75.1094C103.317 68.2382 105.167 60.5376 105.167 52.4192H95.9167ZM52.75 9.25249C62.6961 9.25249 71.8451 12.611 79.1433 18.2581L84.8043 10.9429C75.6322 3.83547 64.3537 -0.0139916 52.75 0.00249414V9.25249ZM79.1433 86.5802C71.8451 92.2273 62.6961 95.5858 52.75 95.5858V104.836C64.3537 104.852 75.6322 101.003 84.8043 93.8954L79.1433 86.5802Z"
      fill="white"
    />
    <path
      d="M52.75 52.4192H80.5C80.5 67.7449 68.0757 80.1692 52.75 80.1692C37.4243 80.1692 25 67.7449 25 52.4192C25 37.0935 37.4243 24.6692 52.75 24.6692C60.4129 24.6692 67.3504 27.7756 72.3723 32.7969"
      stroke="white"
      strokeWidth="9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </motion.svg>
);

export default GCashIcon;