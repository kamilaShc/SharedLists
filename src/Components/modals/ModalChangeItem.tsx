import { useEffect, useState } from "react";
import { Item, List } from "../../model";
import ModalConstructor from "../../helpers/ModalConstructor";

interface Props {
  itemToEdit: Item;
  selectedList: List;
  setSelectedList: React.Dispatch<React.SetStateAction<List | null>>;
  setListArray: React.Dispatch<React.SetStateAction<List[]>>;
  listArray: List[];
}

export default function ModalChangeItem({
  itemToEdit,
  selectedList,
  setListArray,
  setSelectedList,
  listArray,
}: Props) {
  const [itemName, setItemName] = useState<string>(itemToEdit.name);

  useEffect(() => {
    setItemName(itemToEdit.name);
  }, [itemToEdit]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedItems = selectedList.items.map((item) =>
      item.id === itemToEdit.id ? { ...item, name: itemName } : item
    );
    const updatedList = { ...selectedList, items: updatedItems };
    const updatedListArray = listArray.map((list) =>
      list.id === selectedList.id ? updatedList : list
    );

    setSelectedList(updatedList);
    setListArray(updatedListArray);

    $("#changeItemModal").modal("hide");
  };

  return (
    <ModalConstructor
      modalId="changeItemModal"
      formId="changeItemForm"
      formName="Change Item"
      namePlaceholder="Item name"
      handleSubmit={handleSubmit}
      name={itemName}
      setName={setItemName}
      maxLength={50}
    />
  );
}
