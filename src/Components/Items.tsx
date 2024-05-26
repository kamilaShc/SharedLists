import { Item, List } from "../model";
import SingleItem from "./SingleItem";

interface Props {
  selectedList: List;
  setSelectedEditItem: React.Dispatch<React.SetStateAction<Item | null>>;
  deleteItem: (item: Item) => void;
}

export default function Items({
  selectedList,
  setSelectedEditItem,
  deleteItem,
}: Props) {
  return (
    <div className="items">
      {selectedList ? (
        <ul className="list-group">
          {selectedList &&
            selectedList.items.map((item) => (
              <SingleItem
                key={item.id}
                setSelectedEditItem={setSelectedEditItem}
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
