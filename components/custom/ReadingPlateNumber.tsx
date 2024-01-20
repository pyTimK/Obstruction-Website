import { motion } from "framer-motion";
import Reading from "@/classes/Readings";
import ViolationText from "./ViolationText";
import { convertIsoToTimeString } from "@/myfunctions/dateFormatter";
import formatPlateNumber from "@/myfunctions/formatPlateNumber";

interface ReadingPlateNumberProps {
  reading: Reading;
}

const ReadingPlateNumber: React.FC<ReadingPlateNumberProps> = ({ reading }) => {
  return (
    <motion.div
      key={reading._id}
      whileTap={{ scale: 0.9 }}
      className="flex flex-col items-center gap-1 border-2 rounded-md p-1 cursor-pointer"
    >
      <div className="w-full flex justify-between">
        {/* <p>{car.}</p> */}
        <div className="flex-grow flex gap-2 w-10 flex-wrap">
          {reading.violations.map((violation, i) => (
            <ViolationText key={i} type={violation} className="text-3xs" />
          ))}
        </div>
        <p className="text-3xs">{convertIsoToTimeString(reading.date)}</p>
      </div>
      <p className="text-2xl px-6 whitespace-nowrap">
        {formatPlateNumber(reading.plate_number)}
      </p>
    </motion.div>
  );
};

export default ReadingPlateNumber;
