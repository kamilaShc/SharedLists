import "./scss/styles.scss";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";

import { useState } from "react";

import { List } from "./model";

export const App: React.FC = () => {
  const [listArray, setListArray] = useState<List[]>([
    {
      id: Date.now(),
      name: "Travel destinations",
      items: [
        { id: 25406534654604, name: "Rome" },
        { id: 654106540654650, name: "Barcelona" },
        { id: 654065460604, name: "England" },
      ],
      isSelected: false,
    },
    {
      id: Date.now() + 1,
      name: "Movies to watch",
      items: [
        { id: 3510650046546, name: "Paper house" },
        { id: 54065465406504, name: "Bridgertones" },
      ],
      isSelected: false,
    },
    {
      id: Date.now() + 2,
      name: "Shopping list",
      items: [],
      isSelected: false,
    },
  ]);

  return (
    <>
      <Header />
      <Main listArray={listArray} setListArray={setListArray} />
    </>
  );
};
