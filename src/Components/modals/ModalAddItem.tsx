import { useState } from "react";
import ModalConstructor from "../../helpers/ModalConstructor";
import { hideModal } from "../../helpers/ModalVisibility";

interface Props {
  addItemToList: (item: string) => void;
}

export default function ModalAddItem({ addItemToList }: Props) {
  const [itemName, setItemName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addItemToList(itemName);
    setItemName("");
    hideModal("addItemModal");
  };

  const handleClose = () => {
    hideModal("addItemModal");
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
      onClose={handleClose}
    />
  );
}
