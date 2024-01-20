import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { MDBContext } from "../wrappers/MongoDBWrapper";
import Header from "@/components/custom/Header";
import Body from "@/components/custom/Content";
import Coding from "@/classes/Coding";
import EditIcon from "@/components/svg/icon/EditIcon";
import useModal from "@/hooks/useModal";
import MyModal from "@/components/templates/MyModal";
import MyButton from "@/components/templates/MyButton";
import { twMerge } from "tailwind-merge";
import myFetch from "@/myfunctions/myFetch";
import { Constants, getError } from "@/classes/Constants";
import notify from "@/myfunctions/notify";

interface CodingPageProps {}
const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const CodingPage: React.FC<CodingPageProps> = ({}) => {
  const [editCoding, setEditCoding] = useState<Coding | null>(null);
  const editModal = useModal();

  //! Update Coding
  const updateCoding = async (coding: Coding) => {
    if (!editCoding) return;
    myFetch(
      Constants.serverBaseURL,
      `coding/${editCoding._id}`,
      undefined,
      "PUT",
      JSON.stringify(editCoding)
    )
      .then((res) => {
        if (res.status === 200) {
          //   editModal.close();
          // notify("Successfully saved coding", { type: "success" });
        } else {
          const errorMessage = getError(res?.error);
          console.log(errorMessage);
          notify(errorMessage);
        }
      })
      .catch((err) => {
        console.log(err?.error);
        notify("Failed to edit coding");
      });
  };

  return (
    <div className="h-screen overflow-scroll pb-20">
      <Header title="CODING" />
      <Body>
        <CodingsMainPage editModal={editModal} setEditCoding={setEditCoding} />
      </Body>

      <MyModal useModal={editModal} title={editCoding?._id ?? ""}>
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-3">
            {digits.map((digit) => (
              <motion.div
                className={twMerge(
                  "flex flex-col items-center gap-1 border-2 rounded-md p-1",
                  editCoding?.not_allowed.includes(digit) &&
                    "border-emerald-500 text-emerald-500"
                )}
                whileTap={{ scale: 0.8 }}
                onClick={() => {
                  if (editCoding) {
                    if (editCoding.not_allowed.includes(digit)) {
                      editCoding.not_allowed = editCoding.not_allowed.filter(
                        (x) => x !== digit
                      );
                    } else {
                      editCoding.not_allowed.push(digit);
                    }
                    updateCoding(editCoding);
                  }
                }}
              >
                <p className="text-2xl px-6 whitespace-nowrap">{digit}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-end">
          <div className="flex w-min">
            <MyButton
              type="button"
              label="Done"
              className="rounded-full bg-red"
              pY={0.2}
              onClick={editModal.close}
            />
          </div>
        </div>
      </MyModal>
    </div>
  );
};

//! Coding Item
interface CodingItemProps {
  coding: Coding;
  editModal: ReturnType<typeof useModal>;
  setEditCoding: React.Dispatch<React.SetStateAction<Coding | null>>;
}

const CodingItem: React.FC<CodingItemProps> = ({
  coding,
  editModal,
  setEditCoding,
}) => {
  const codings_formatted = coding.not_allowed.join(",");
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <p className="text-lg">{coding._id}: </p>
        <p className="text-sm text-gray-400">{codings_formatted}</p>
      </div>
      <EditIcon
        onClick={() => {
          setEditCoding(coding);
          editModal.open();
        }}
      />
    </div>
  );
};

//! Codings Main Page
interface CodingsMainPageProps {
  editModal: ReturnType<typeof useModal>;
  setEditCoding: React.Dispatch<React.SetStateAction<Coding | null>>;
}

const CodingsMainPage: React.FC<CodingsMainPageProps> = ({
  editModal,
  setEditCoding,
}) => {
  const { codings } = useContext(MDBContext);
  return (
    <div className="m-auto max-w-lg w-full flex flex-col gap-6">
      {codings?.data.map((coding) => (
        <CodingItem
          key={coding._id}
          coding={coding}
          editModal={editModal}
          setEditCoding={setEditCoding}
        />
      ))}
    </div>
  );
};

export default CodingPage;
