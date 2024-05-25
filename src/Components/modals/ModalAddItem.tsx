import { useState } from "react";
import ModalConstructor from "../../helpers/ModalConstructor";

interface Props {
  addItemToList: (item: string) => void;
}

export default function ModalAddItem({ addItemToList }: Props) {
  const [itemName, setItemName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addItemToList(itemName);
    setItemName("");
    $("#addItemModal").modal("hide");
  };

  return (
    <ModalConstructor
      modalId="addItemModal"
      formId="addItemForm"
      formName="Add Item"
      namePlaceholder="Item name"
      handleSubmit={handleSubmit}
      name={itemName}
      setName={setItemName}
      maxLength={50}
    />
  );
}
