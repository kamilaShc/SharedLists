import { useEffect, useState } from "react";
import { List } from "../model";
import ModalConfirmDelete from "./modals/ModalConfirmDelete";

interface Props {
  list: List;
  handleListSelection: (list: List) => void;
  deleteList: (listToDelete: List) => void;
  handleEdit: (listToEdit: List) => void;
}

export default function SingleList({
  list,
  handleListSelection,
  deleteList,
  handleEdit,
}: Props) {
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);

  // useEffect(() => {}, [showConfirmation]);

  const handleDeleteClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmDelete = () => {
    setShowConfirmation(false);
    deleteList(list);
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
  };

  const selected = list.isSelected ? "active" : "";
  return (
    <div>
      <a
        href="#"
        className={`list-group-item list-group-item-action ${selected}`}
        onClick={() => handleListSelection(list)}
      >
        <div className="d-flex w-100 justify-content-between align-items-center">
          <p>{list.name}</p>
          <div className="icons">
            <i
              className="fa-solid fa-pen"
              onClick={(event) => {
                event.stopPropagation();
                handleEdit(list);
              }}
            ></i>
            <i
              className="fa-solid fa-trash"
              data-toggle="modal"
              data-target="#confirmDeleteModal"
              onClick={(event) => {
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
