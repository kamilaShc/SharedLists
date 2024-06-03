export interface List {
  id: string;
  name: string;
  items: Item[];
  isSelected: boolean;
}

export interface Item {
  id: string;
  name: string;
}
