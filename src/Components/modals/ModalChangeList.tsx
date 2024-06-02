import { useEffect, useState } from "react";
import { List } from "../../model";
import ModalConstructor from "../../helpers/ModalConstructor";
import { hideModal, showModal } from "../../helpers/ModalVisibility";

interface Props {
  listToEdit: List;
  setListArray: React.Dispatch<React.SetStateAction<List[]>>;
  listArray: List[];
  setSelectedEditList: React.Dispatch<React.SetStateAction<List | null>>;
}

export default function ModalChangeList({
  listToEdit,
  setListArray,
  listArray,
  setSelectedEditList,
}: Props) {
  const [listName, setListName] = useState<string>(listToEdit.name);

  useEffect(() => {
    showModal("changeListModal");
  }, []);

  useEffect(() => {
    setListName(listToEdit.name);
  }, [listToEdit]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updatedListArray = listArray.map((list) =>
      list.id === listToEdit.id ? { ...listToEdit, name: listName } : list
    );
    setListArray(updatedListArray);
    setSelectedEditList(null);
    hideModal("changeListModal");
  };

  const handleClose = () => {
    setSelectedEditList(null);
    hideModal("changeListModal");
  };

  return (
    <ModalConstructor
      modalId="changeListModal"
      formId="changeListForm"
      formName="Change List"
      namePlaceholder="List name"
      handleSubmit={handleSubmit}
      name={listName}
      setName={setListName}
      maxLength={50}
      onClose={handleClose}
    />
  );
}
