import { useState } from "react";
import { Item, List } from "../model";
import SingleItem from "./SingleItem";
import ModalConfirmDelete from "./modals/ModalConfirmDelete";

interface Props {
  selectedList: List;
  listArray: List[];
  setSelectedList: React.Dispatch<React.SetStateAction<List | null>>;
  setListArray: React.Dispatch<React.SetStateAction<List[]>>;
  setSelectedEditItem: React.Dispatch<React.SetStateAction<Item | null>>;
}

export default function Items({
  selectedList,
  listArray,
  setListArray,
  setSelectedEditItem,
  setSelectedList,
}: Props) {
  const deleteItem = (itemToDelete: Item) => {
    const updatedItems = selectedList.items.filter(
      (item) => item.id !== itemToDelete.id
    );
    const updatedList = { ...selectedList, items: updatedItems };
    const updatedListArray = listArray.map((list) =>
      list.id === selectedList.id ? updatedList : list
    );
    setSelectedList(updatedList);
    setListArray(updatedListArray);
  };

  const handleEdit = (item: Item) => {
    setSelectedEditItem(item);
    $("#changeItemModal").modal("show");
  };

  return (
    <div className="items">
      {selectedList ? (
        <ul className="list-group">
          {selectedList &&
            selectedList.items.map((item) => (
              <SingleItem
                key={item.id}
                handleEdit={handleEdit}
                deleteItem={deleteItem}
                item={item}
              />
            ))}
        </ul>
      ) : (
        <p>No list is selected</p>
      )}
      {selectedList.items.length === 0 && <p>The list has no items yet</p>}
    </div>
  );
}
