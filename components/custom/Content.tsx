interface ContentProps {
  children: React.ReactNode;
}

const Body: React.FC<ContentProps> = ({ children }) => {
  return <div className="px-5 py-5">{children}</div>;
};

export default Body;
