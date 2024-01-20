import Body from "@/components/custom/Content";
import Header from "@/components/custom/Header";
import ReadingPlateNumber from "@/components/custom/ReadingPlateNumber";
import VideoFeed from "@/components/templates/VideoFeed";
import { useContext } from "react";
import { MDBContext } from "../wrappers/MongoDBWrapper";
import PageNavigator from "@/components/PageNavigator";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = ({}) => {
  const { readings } = useContext(MDBContext);

  return (
    <div className="h-screen overflow-scroll pb-20">
      <Header title="Home" />
      <Body>
        {/*//! LIVE */}
        <div className="flex flex-col items-center gap-5">
          <div className="w-full">
            <p>LIVE</p>
          </div>
          <VideoFeed src="http://192.168.1.2:8083/stream/pattern/channel/0/hls/live/index.m3u8" />
        </div>

        {/*//! LIVE */}
        <div className="flex flex-col  gap-5 mt-10">
          <p>DETECTED</p>
          <div className="m-auto w-min flex flex-col gap-8">
            {readings?.data.map((reading) => (
              <ReadingPlateNumber key={reading._id} reading={reading} />
            ))}
          </div>
        </div>

        {/*//! Prev | Next */}
        {readings && <PageNavigator paginatedData={readings} />}
      </Body>
    </div>
  );
};

export default HomePage;
