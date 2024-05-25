import { useEffect, useState } from "react";
import { List } from "../model";
import SingleList from "./SingleList";

interface Props {
  listArray: List[];
  setListArray: React.Dispatch<React.SetStateAction<List[]>>;
  selectedList: List | null;
  setSelectedList: React.Dispatch<React.SetStateAction<List | null>>;
  setSelectedEditList: React.Dispatch<React.SetStateAction<List | null>>;
  deleteList: (listToDelete: List) => void;
}

export default function MyLists({
  listArray,
  setListArray,
  selectedList,
  setSelectedList,
  setSelectedEditList,
  deleteList,
}: Props) {
  const handleListSelection = (list: List) => {
    if (selectedList) selectedList.isSelected = false;
    setSelectedList(list);
    list.isSelected = true;
  };

  const handleEdit = (listToEdit: List) => {
    setSelectedEditList(listToEdit);
    $("#changeListModal").modal("show");
  };

  return (
    <div className="my-lists">
      <ul className="list-group">
        {listArray.map((list) => (
          <SingleList
            list={list}
            key={list.id}
            handleListSelection={handleListSelection}
            deleteList={deleteList}
            handleEdit={handleEdit}
          />
        ))}
      </ul>
    </div>
  );
}
