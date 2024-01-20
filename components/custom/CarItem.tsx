import { motion } from "framer-motion";
import Car from "@/classes/Car";
import formatPlateNumber from "@/myfunctions/formatPlateNumber";

interface CarItemProps {
  car: Car;
  onClick?: () => void;
}

const CarItem: React.FC<CarItemProps> = ({ car, onClick }) => {
  return (
    <motion.div
      key={car._id}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="relative bg-white shadow-md pt-4 pb-3 px-3 cursor-pointer"
    >
      <div className="flex flex-col gap-3">
        <p className="text-xl">{car.model}</p>
        <div className="flex justify-between">
          <p className="text-xs">{car.color}</p>
          <CarPlateNumber plate_number={car._id} />
        </div>
      </div>

      {/*//! UPPER RIGHT */}
      {car.missing && (
        <div className="absolute top-2 right-2 text-right flex flex-col justify-end gap-1">
          <p className="text-2xs text-red">MISSING</p>
        </div>
      )}
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

export default CarItem;
