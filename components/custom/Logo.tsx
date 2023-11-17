interface LogoProps {}

const Logo: React.FC<LogoProps> = ({}) => {
  return (
    <img src="/images/icons/icon.png" alt="logo" className="w-60 m-auto" />
  );
};

export default Logo;
