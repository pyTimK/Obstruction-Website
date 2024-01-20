import Body from "@/components/custom/Content";
import Header from "@/components/custom/Header";
import { useContext } from "react";
import { MDBContext } from "../wrappers/MongoDBWrapper";
import ViolationItem from "@/components/custom/ViolationItem";
import PageNavigator from "@/components/PageNavigator";

interface ViolationPageProps {}

const ViolationPage: React.FC<ViolationPageProps> = ({}) => {
  const { violations } = useContext(MDBContext);
  return (
    <div className="h-screen overflow-scroll pb-20">
      <Header title="VIOLATIONS" />
      <Body>
        <div className="m-auto max-w-lg w-full flex flex-col gap-12">
          {violations?.data.map((violation) => (
            <ViolationItem key={violation._id} violation={violation} />
          ))}
        </div>

        {/*//! Prev | Next */}
        {violations && <PageNavigator paginatedData={violations} />}
      </Body>
    </div>
  );
};

export default ViolationPage;
