import { useEffect, useState } from "react";
import { List } from "../model";
import SingleList from "./SingleList";

interface Props {
  listArray: List[];
  setSelectedEditList: React.Dispatch<React.SetStateAction<List | null>>;
  deleteList: (listToDelete: List) => void;
  onSelect: (list: List) => void;
}

export default function MyLists({
  listArray,
  setSelectedEditList,
  deleteList,
  onSelect,
}: Props) {
  return (
    <div className="my-lists">
      <ul className="list-group">
        {listArray.map((list) => (
          <SingleList
            list={list}
            key={list.id}
            onSelect={onSelect}
            deleteList={deleteList}
            setSelectedEditList={setSelectedEditList}
          />
        ))}
      </ul>
    </div>
  );
}
