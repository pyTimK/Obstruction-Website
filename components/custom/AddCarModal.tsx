import useModal from "@/hooks/useModal";
import MyModal from "../templates/MyModal";
import { useInputField } from "@/hooks/useInputField";
import isValidPlateNumber from "@/myfunctions/isValidPlateNumber";
import MyButton from "../templates/MyButton";
import MyInput from "../templates/MyInput";
import { FormEventHandler, useEffect, useState } from "react";
import myFetch from "@/myfunctions/myFetch";
import { Constants, getError } from "@/classes/Constants";
import Car, { constructEmptyCar } from "@/classes/Car";
import notify from "@/myfunctions/notify";
import isValidEmail from "@/myfunctions/is_valid_email";

interface AddCarModalProps {
  addCarModal: ReturnType<typeof useModal>;
  editCar?: Car;
}

const AddCarModal: React.FC<AddCarModalProps> = ({ addCarModal, editCar }) => {
  const cancelModal = useModal();
  const deleteModal = useModal();

  const plateNumberInputField = useInputField((plate_number) => [
    [!plate_number, "Please enter a plate number"],
    [
      !isValidPlateNumber(plate_number!),
      "Please enter a valid plate number Ex: 'ABC1234'",
    ],
  ]);

  const modelInputField = useInputField((model) => [
    [!model, "Please enter a model"],
  ]);

  const colorInputField = useInputField((color) => [
    [!color, "Please enter a color"],
  ]);

  const emailInputField = useInputField((email) => [
    [!email, "Please enter a email"],
    [!isValidEmail(email!), "Invalid Email"],
  ]);

  const phoneInputField = useInputField((phone) => [
    [!phone, "Please enter a phone"],
    [phone?.substring(0, 2) !== "09", "Phone number must start with 09"],
    [phone!.length !== 11, "Phone number must be 11 digits"],
  ]);

  const [unregistered, setUnregistered] = useState<boolean>(
    editCar?.missing ?? false
  );
  const handleUnregisteredChange = () => {
    setUnregistered(!unregistered);
  };

  useEffect(() => {
    setUnregistered(editCar?.missing ?? false);
  }, [editCar]);

  //! Handle Form Submission
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    //? Verify input fields
    if (!plateNumberInputField.verify()) return;
    if (!modelInputField.verify()) return;
    if (!colorInputField.verify()) return;
    if (!emailInputField.verify()) return;
    if (!phoneInputField.verify()) return;

    const now = new Date().toISOString();

    const date = editCar ? editCar.date : now;

    //? Construct car object
    const car: Car = {
      _id: plateNumberInputField
        .getValue()!
        .toUpperCase()
        .replaceAll(" ", "")
        .replaceAll("-", ""),
      model: modelInputField.getValue()!,
      color: colorInputField.getValue()!,
      email: emailInputField.getValue()!,
      phone: phoneInputField.getValue()!,
      is_detected: false,
      date: date,
      snapshots: [],
      missing: unregistered,
    };

    //? Add to database
    if (editCar) {
      myFetch(
        Constants.serverBaseURL,
        `car/${editCar._id}`,
        undefined,
        "PUT",
        JSON.stringify(car)
      )
        .then((res) => {
          if (res.status === 200) {
            addCarModal.close();
            notify("Successfully saved car", { type: "success" });
          } else {
            const errorMessage = getError(res?.error);
            console.log(errorMessage);
            notify(errorMessage);
          }
        })
        .catch((err) => {
          console.log(err?.error);
          notify("Failed to save car");
        });
    } else {
      myFetch(
        Constants.serverBaseURL,
        "car",
        undefined,
        "POST",
        JSON.stringify(car)
      )
        .then((res) => {
          if (res.status === 200) {
            addCarModal.close();
            notify("Successfully added car", { type: "success" });
          } else {
            const errorMessage = getError(res?.error);
            console.log(errorMessage);
            notify(errorMessage);
          }
        })
        .catch((err) => {
          console.log(err?.error);
          notify("Failed to add car");
        });
    }
  };

  //? Delete Car
  const deleteCar = () => {
    myFetch(Constants.serverBaseURL, `car/${editCar?._id}`, undefined, "DELETE")
      .then((res) => {
        if (res.status === 200) {
          addCarModal.close();
          notify("Successfully deleted car", { type: "success" });
        } else {
          const errorMessage = getError(res?.error);
          console.log(errorMessage);
          notify(errorMessage);
        }
      })
      .catch((err) => {
        console.log(err?.error);
        notify("Failed to delete car");
      });
  };
  return (
    <MyModal useModal={addCarModal} title={`${editCar ? "Edit" : "Add"} Car`}>
      <div className="flex flex-col items-center gap-5">
        <form
          className="flex flex-col items-center gap-5"
          onSubmit={handleSubmit}
        >
          <InputRow
            title="Plate Number"
            useInputField={plateNumberInputField}
            defaultValue={editCar?._id}
          />
          <InputRow
            title="Model"
            useInputField={modelInputField}
            defaultValue={editCar?.model}
          />
          <InputRow
            title="Color"
            useInputField={colorInputField}
            defaultValue={editCar?.color}
          />
          <InputRow
            title="Email"
            useInputField={emailInputField}
            defaultValue={editCar?.email}
          />
          <InputRow
            title="Phone"
            useInputField={phoneInputField}
            defaultValue={editCar?.phone}
          />
          <div className="w-full flex gap-2 items-center">
            <input
              type="checkbox"
              checked={unregistered}
              onChange={handleUnregisteredChange}
            />
            <p>UNREGISTERED</p>
          </div>

          {/*//! Delete Button  */}
          {editCar && (
            <div className="mt-5 mb-5">
              <MyButton
                type="button"
                label="Delete"
                outlined
                className="rounded-full border-red opacity-70"
                classNameText="text-red"
                pY={0.2}
                onClick={deleteModal.open}
              />
            </div>
          )}

          <div className="flex gap-5">
            <MyButton
              type="button"
              label="Cancel"
              outlined
              className="rounded-full"
              pY={0.2}
              onClick={cancelModal.open}
            />
            <MyButton
              type="submit"
              label={editCar ? "Save" : "Add"}
              className="rounded-full bg-red"
              pY={0.2}
            />
          </div>
        </form>
      </div>
      <MyModal useModal={cancelModal} title="Cancel">
        <p className="text-xs">Are you sure you want to cancel?</p>
        <div className="flex gap-5 mt-5">
          <MyButton
            type="button"
            label="No"
            outlined
            className="rounded-full"
            pY={0.2}
            onClick={cancelModal.close}
          />
          <MyButton
            type="button"
            label="Yes"
            className="rounded-full bg-red"
            pY={0.2}
            onClick={() => {
              cancelModal.close();
              addCarModal.close();
            }}
          />
        </div>
      </MyModal>

      <MyModal useModal={deleteModal} title="Delete">
        <p className="text-xs">Are you sure you want to delete?</p>
        <div className="flex gap-5 mt-5">
          <MyButton
            type="button"
            label="No"
            outlined
            className="rounded-full"
            pY={0.2}
            onClick={deleteModal.close}
          />
          <MyButton
            type="button"
            label="Yes"
            className="rounded-full bg-red"
            pY={0.2}
            onClick={() => {
              deleteModal.close();
              deleteCar();
              addCarModal.close();
            }}
          />
        </div>
      </MyModal>
    </MyModal>
  );
};

//! INPUT ROW
interface InputRowProps {
  title: string;
  useInputField: ReturnType<typeof useInputField>;
  defaultValue?: string;
}

const InputRow: React.FC<InputRowProps> = ({
  title,
  useInputField,
  defaultValue,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <p>{title}</p>
      <MyInput
        inputField={useInputField}
        defaultValue={defaultValue}
        className="bg-transparent  text-center h-10 text-left"
      />
    </div>
  );
};

export default AddCarModal;
