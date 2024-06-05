import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { createPortal } from "react-dom";

import { Item, List } from "../model";

import Column from "./Column";
import SingleList from "./SingleList";
import SingleItem from "./SingleItem";
import ModalAddList from "./modals/ModalAddList";
import ModalAddItem from "./modals/ModalAddItem";
import ModalConfirmDelete from "./modals/ModalConfirmDelete";
import ModalChangeList from "./modals/ModalChangeList";
import ModalChangeItem from "./modals/ModalChangeItem";

interface Props {
  listArray: List[];
  setListArray: React.Dispatch<React.SetStateAction<List[]>>;
}

export const Main = ({ listArray, setListArray }: Props) => {
  const [selectedList, setSelectedList] = useState<List | null>(null);
  const [selectedEditList, setSelectedEditList] = useState<List | null>(null);
  const [selectedEditItem, setSelectedEditItem] = useState<Item | null>(null);
  const [selectedDeleteList, setSelectedDeleteList] = useState<List | null>(
    null
  );
  const [selectedDeleteItem, setSelectedDeleteItem] = useState<Item | null>(
    null
  );

  const selectList = (list: List) => {
    if (selectedList) selectedList.isSelected = false;
    setSelectedList(list);
    list.isSelected = true;
  };

  const addList = (listName: string) => {
    setListArray([
      ...listArray,
      { id: uuidv4(), name: listName, items: [], isSelected: false },
    ]);
  };

  const addItemToList = (item: string) => {
    if (selectedList) {
      const updatedList = {
        ...selectedList,
        items: [...selectedList.items, { id: uuidv4(), name: item }],
      };
      const updatedListArray = listArray.map((list) =>
        list.id === selectedList.id ? updatedList : list
      );
      setListArray(updatedListArray);
      setSelectedList(updatedList);
    }
  };

  const deleteList = (listToDelete: List) => {
    const updatedLists = listArray.filter(
      (list) => list.id !== listToDelete.id
    );
    setSelectedList(null);
    setListArray(updatedLists);
  };

  const deleteItem = (itemToDelete: Item) => {
    if (selectedList) {
      const updatedItems = selectedList.items.filter(
        (item) => item.id !== itemToDelete.id
      );
      const updatedList = { ...selectedList, items: updatedItems };
      const updatedListArray = listArray.map((list) =>
        list.id === selectedList.id ? updatedList : list
      );
      setSelectedList(updatedList);
      setListArray(updatedListArray);
    }
  };

  const handleConfirmDelete = () => {
    if (selectedDeleteList) {
      deleteList(selectedDeleteList);
      setSelectedDeleteList(null);
    } else if (selectedDeleteItem) {
      deleteItem(selectedDeleteItem);
      setSelectedDeleteItem(null);
    }
  };

  const handleCancelDelete = () => {
    if (selectedDeleteList) {
      setSelectedDeleteList(null);
    } else if (selectedDeleteItem) {
      setSelectedDeleteItem(null);
    }
  };

  return (
    <section className="container">
      <div className="row">
        <div className="col-6">
          <Column
            name={"My Lists"}
            addModal={"#addListModal"}
            length={listArray.length}
          >
            {listArray.map((list) => (
              <SingleList
                list={list}
                key={list.id}
                onSelect={selectList}
                deleteList={deleteList}
                setSelectedEditList={setSelectedEditList}
                setSelectedDeleteList={setSelectedDeleteList}
              />
            ))}
          </Column>
        </div>
        <div className="col-6">
          {selectedList ? (
            <div>
              <Column
                name={"Items"}
                addModal={"#addItemModal"}
                length={selectedList.items.length}
              >
                {selectedList &&
                  selectedList.items.map((item) => (
                    <SingleItem
                      key={item.id}
                      setSelectedEditItem={setSelectedEditItem}
                      item={item}
                      setSelectedDeleteItem={setSelectedDeleteItem}
                    />
                  ))}
              </Column>
            </div>
          ) : (
            <p>No list is selected</p>
          )}
        </div>
      </div>
      {createPortal(<ModalAddList addList={addList} />, document.body)}
      {selectedEditList &&
        createPortal(
          <ModalChangeList
            listToEdit={selectedEditList}
            listArray={listArray}
            setListArray={setListArray}
            setSelectedEditList={setSelectedEditList}
          />,
          document.body
        )}
      {selectedEditItem &&
        selectedList &&
        createPortal(
          <ModalChangeItem
            itemToEdit={selectedEditItem}
            selectedList={selectedList}
            setSelectedList={setSelectedList}
            listArray={listArray}
            setListArray={setListArray}
            setSelectedEditItem={setSelectedEditItem}
          />,
          document.body
        )}
      {selectedList &&
        createPortal(
          <ModalAddItem addItemToList={addItemToList} />,
          document.body
        )}

      {(selectedDeleteList || selectedDeleteItem) &&
        createPortal(
          <ModalConfirmDelete
            onDelete={handleConfirmDelete}
            onCancel={handleCancelDelete}
          />,
          document.body
        )}
    </section>
  );
};
