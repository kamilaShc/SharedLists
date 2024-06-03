import { List } from "./model";
import { v4 as uuidv4 } from "uuid";

export const listData: List[] = [
  {
    id: uuidv4(),
    name: "Travel destinations",
    items: [
      { id: uuidv4(), name: "Rome" },
      { id: uuidv4(), name: "Barcelona" },
      { id: uuidv4(), name: "England" },
    ],
    isSelected: false,
  },
  {
    id: uuidv4(),
    name: "Movies to watch",
    items: [
      { id: uuidv4(), name: "Paper house" },
      { id: uuidv4(), name: "Bridgertones" },
    ],
    isSelected: false,
  },
  {
    id: uuidv4(),
    name: "Shopping list",
    items: [],
    isSelected: false,
  },
];
