import MyLists from "./MyLists";
import Items from "./Items";
import ModalAddList from "./modals/ModalAddList";
import ModalAddItem from "./modals/ModalAddItem";
import { Item, List } from "../model";
import { useState } from "react";
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

  const selectList = (list: List) => {
    if (selectedList) selectedList.isSelected = false;
    setSelectedList(list);
    list.isSelected = true;
  };

  const addItemToList = (item: string) => {
    if (selectedList) {
      const updatedList = {
        ...selectedList,
        items: [...selectedList.items, { id: Date.now(), name: item }],
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
  console.log("Main rendered");
  return (
    <section className="container">
      <div className="row">
        <div className="col-6">
          <div className="main-header">
            <h3>My Lists</h3>
            <i
              className="fa-solid fa-plus"
              data-toggle="modal"
              data-target="#addListModal"
            ></i>
          </div>

          <MyLists
            listArray={listArray}
            setSelectedEditList={setSelectedEditList}
            deleteList={deleteList}
            onSelect={selectList}
          />
          <button
            className="big-plus"
            data-toggle="modal"
            data-target="#addListModal"
          >
            +
          </button>
        </div>
        <div className="col-6">
          <div className="main-header">
            <h3>Items</h3>
            <i
              className="fa-solid fa-plus"
              data-toggle="modal"
              data-target="#addItemModal"
            ></i>
          </div>
          {selectedList ? (
            <div>
              <Items
                selectedList={selectedList}
                setSelectedEditItem={setSelectedEditItem}
                deleteItem={deleteItem}
              />
              <button
                className="big-plus"
                data-toggle="modal"
                data-target="#addItemModal"
              >
                +
              </button>
            </div>
          ) : (
            <p>No list is selected</p>
          )}
        </div>
      </div>
      <ModalAddList listArray={listArray} setListArray={setListArray} />
      {selectedEditList && (
        <ModalChangeList
          listToEdit={selectedEditList}
          listArray={listArray}
          setListArray={setListArray}
          setSelectedEditList={setSelectedEditList}
        />
      )}
      {selectedEditItem && selectedList && (
        <ModalChangeItem
          itemToEdit={selectedEditItem}
          selectedList={selectedList}
          setSelectedList={setSelectedList}
          listArray={listArray}
          setListArray={setListArray}
          setSelectedEditItem={setSelectedEditItem}
        />
      )}
      {selectedList && <ModalAddItem addItemToList={addItemToList} />}
    </section>
  );
};
