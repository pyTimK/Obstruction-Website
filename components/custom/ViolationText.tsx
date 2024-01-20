import { ViolationType } from "@/classes/Violation";
import { twMerge } from "tailwind-merge";

interface ViolationTextProps {
  type: ViolationType;
  className?: string;
}

const ViolationText: React.FC<ViolationTextProps> = ({ type, className }) => {
  return (
    <p
      className={twMerge(
        "text-2xs",
        type === "Obstruction" && "text-blue",
        type === "Missing" && "text-red",
        type === "Coding" && "text-green-600",
        className
      )}
    >
      {type}
    </p>
  );
};

export default ViolationText;
