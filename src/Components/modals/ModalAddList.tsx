import { useState } from "react";
import ModalConstructor from "../../helpers/ModalConstructor";
import { hideModal } from "../../helpers/ModalVisibility";

interface Props {
  addList: (listName: string) => void;
}

export default function ModalAddList({ addList }: Props) {
  const [listName, setListName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addList(listName);
    setListName("");
    hideModal("addListModal");
  };

  const handleClose = () => {
    hideModal("addListModal");
  };

  return (
    <ModalConstructor
      modalId="addListModal"
      formId="addListForm"
      formName="Add List"
      namePlaceholder="List name"
      handleSubmit={handleSubmit}
      name={listName}
      setName={setListName}
      maxLength={50}
      onClose={handleClose}
    />
  );
}
