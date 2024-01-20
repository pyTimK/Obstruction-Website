import { motion } from "framer-motion";
import formatPlateNumber from "@/myfunctions/formatPlateNumber";
import Violation from "@/classes/Violation";
import ViolationText from "./ViolationText";
import { convertIsoToDateString } from "@/myfunctions/dateFormatter";

interface ViolationItemProps {
  violation: Violation;
}

const ViolationItem: React.FC<ViolationItemProps> = ({ violation }) => {
  return (
    <motion.div
      key={violation.plate_number}
      whileTap={{ scale: 0.9 }}
      className="relative bg-white shadow-md pt-4 pb-3 px-3 cursor-pointer"
    >
      <div className="flex flex-col gap-3">
        <p className="text-xl">{violation.model}</p>
        <div className="flex justify-between">
          <p className="text-xs">{violation.color}</p>
          <CarPlateNumber plate_number={violation.plate_number} />
        </div>
      </div>

      {/*//! UPPER RIGHT */}
      <div className="absolute top-2 right-2 text-right flex flex-col justify-end gap-1">
        <div className="flex gap-3 justify-end">
          {violation.violations.map((violation, i) => (
            <ViolationText key={i} type={violation} className="text-3xs" />
          ))}
        </div>
        <p className="text-3xs">{convertIsoToDateString(violation.date)}</p>
      </div>
    </motion.div>
  );
};

interface CarPlateNumberProps {
  plate_number: string;
}

const CarPlateNumber: React.FC<CarPlateNumberProps> = ({ plate_number }) => {
  return (
    <div className="flex flex-col items-center gap-1 border-2 rounded-md p-1">
      <p className="text-2xl px-6 whitespace-nowrap">
        {formatPlateNumber(plate_number)}
      </p>
    </div>
  );
};

export default ViolationItem;
