import { useEffect, useState } from "react";
import { List } from "../../model";
import ModalConstructor from "../../helpers/ModalConstructor";

interface Props {
  listToEdit: List;
  setListArray: React.Dispatch<React.SetStateAction<List[]>>;
  listArray: List[];
}

export default function ModalChangeList({
  listToEdit,
  setListArray,
  listArray,
}: Props) {
  const [listName, setListName] = useState<string>(listToEdit.name);

  useEffect(() => {
    setListName(listToEdit.name);
  }, [listToEdit]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updatedListArray = listArray.map((list) =>
      list.id === listToEdit.id ? { ...listToEdit, name: listName } : list
    );
    setListArray(updatedListArray);

    $("#changeListModal").modal("hide");
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
    />
  );
}
