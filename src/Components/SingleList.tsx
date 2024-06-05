import { List } from "../model";

interface Props {
  list: List;
  deleteList: (listToDelete: List) => void;
  setSelectedEditList: React.Dispatch<React.SetStateAction<List | null>>;
  onSelect: (list: List) => void;
  setSelectedDeleteList: React.Dispatch<React.SetStateAction<List | null>>;
}

export default function SingleList({
  list,
  setSelectedEditList,
  onSelect,
  setSelectedDeleteList,
}: Props) {
  const handleDeleteClick = () => {
    setSelectedDeleteList(list);
  };

  const handleEdit = (listToEdit: List) => {
    setSelectedEditList(listToEdit);
  };

  const selected = list.isSelected ? "active" : "";
  return (
    <div>
      <a
        href="#"
        className={`list-group-item list-group-item-action ${selected}`}
        onClick={() => onSelect(list)}
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
    </div>
  );
}
