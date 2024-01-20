import HeaderBackground from "./HeaderBackground";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="flex justify-end relative w-full bg-header">
      <HeaderBackground />
      <div className="absolute top-1/2 -translate-y-1/2 px-5 left-0">
        <p className="text-gray text-xl">{title}</p>
      </div>
    </div>
  );
};

export default Header;
