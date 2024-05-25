import { useState } from "react";
import { List } from "../../model";
import ModalConstructor from "../../helpers/ModalConstructor";

interface Props {
  setListArray: React.Dispatch<React.SetStateAction<List[]>>;
  listArray: List[];
}

export default function ModalAddList({ setListArray, listArray }: Props) {
  const [listName, setListName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setListArray([
      ...listArray,
      { id: Date.now(), name: listName, items: [], isSelected: false },
    ]);
    setListName("");
    $("#addListModal").modal("hide");
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
    />
  );
}
