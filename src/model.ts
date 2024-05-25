export interface List {
  id: number;
  name: string;
  items: Item[];
  isSelected: boolean;
}

export interface Item {
  id: number;
  name: string;
}
