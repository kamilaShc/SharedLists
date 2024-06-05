import { Item } from "../model";

interface Props {
  item: Item;
  setSelectedEditItem: React.Dispatch<React.SetStateAction<Item | null>>;
  setSelectedDeleteItem: React.Dispatch<React.SetStateAction<Item | null>>;
}

export default function SingleItem({
  item,
  setSelectedEditItem,
  setSelectedDeleteItem,
}: Props) {
  const handleEdit = (item: Item) => {
    setSelectedEditItem(item);
  };

  const handleDeleteClick = () => {
    setSelectedDeleteItem(item);
  };

  return (
    <div>
      <a
        href="#"
        key={item.id}
        className="list-group-item list-group-item-action"
      >
        <div className="d-flex w-100 justify-content-between align-items-center">
          <p>{item.name}</p>
          <div className="icons">
            <i
              className="fa-solid fa-pen"
              onClick={(event) => {
                event.stopPropagation();
                handleEdit(item);
              }}
            ></i>
            <i
              className="fa-solid fa-trash"
              data-toggle="modal"
              data-target="#confirmDeleteModal"
              onClick={() => {
                // event.stopPropagation();
                handleDeleteClick();
              }}
            ></i>
          </div>
        </div>
      </a>
    </div>
  );
}
