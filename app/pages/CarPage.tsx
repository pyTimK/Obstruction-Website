import PageNavigator from "@/components/PageNavigator";
import CarItem from "@/components/custom/CarItem";
import Body from "@/components/custom/Content";
import Header from "@/components/custom/Header";
import AddIcon from "@/components/svg/icon/AddIcon";
import useModal from "@/hooks/useModal";
import { useContext, useState } from "react";
import { MDBContext } from "../wrappers/MongoDBWrapper";
import AddCarModal from "@/components/custom/AddCarModal";
import Car from "@/classes/Car";

interface CarPageProps {}

const CarPage: React.FC<CarPageProps> = ({}) => {
  const { cars } = useContext(MDBContext);
  const [editCar, setEditCar] = useState<Car | undefined>(undefined);
  const addCarModal = useModal();

  return (
    <div className="h-screen overflow-scroll pb-32">
      <Header title="CAR LIST" />
      <Body>
        <div className="m-auto max-w-lg w-full flex flex-col gap-12">
          {cars?.data.map((car) => (
            <CarItem
              key={car._id}
              car={car}
              onClick={() => {
                setEditCar(car);
                addCarModal.open();
              }}
            />
          ))}
        </div>

        {/*//! Prev | Next */}
        {cars && <PageNavigator paginatedData={cars} />}

        {/*//! ADD CAR FAB  */}
        <div className="fixed bottom-20 right-6">
          <AddIcon
            onClick={() => {
              setEditCar(undefined);
              addCarModal.open();
            }}
          />
        </div>

        {/*//! MY MODAL  */}
        <AddCarModal addCarModal={addCarModal} editCar={editCar} />
      </Body>
    </div>
  );
};

export default CarPage;
