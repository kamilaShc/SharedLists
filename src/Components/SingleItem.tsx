import { useState } from "react";
import { Item } from "../model";
import ModalConfirmDelete from "./modals/ModalConfirmDelete";

interface Props {
  item: Item;
  deleteItem: (item: Item) => void;
  setSelectedEditItem: React.Dispatch<React.SetStateAction<Item | null>>;
}

export default function SingleItem({
  item,
  setSelectedEditItem,
  deleteItem,
}: Props) {
  const [showConfirmation, setShowConfirmation] = useState<boolean>(true);

  const handleEdit = (item: Item) => {
    setSelectedEditItem(item);
    $("#changeItemModal").modal("show");
  };

  const handleDeleteClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmDelete = () => {
    setShowConfirmation(false);
    deleteItem(item);
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
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
      {showConfirmation && (
        <ModalConfirmDelete
          onDelete={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </div>
  );
}
