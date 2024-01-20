import { MouseEventHandler } from "react";
import ChevronRight from "./ChevronRight";

interface ChevronLeftProps {
  onClick?: MouseEventHandler<SVGSVGElement>;
  size?: number;
}

const ChevronLeft: React.FC<ChevronLeftProps> = ({ onClick, size = 11 }) => {
  return (
    <div className="flip-horizontal">
      <ChevronRight onClick={onClick} size={size} />
    </div>
  );
};

export default ChevronLeft;
