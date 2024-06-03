import "./scss/main.scss";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";

import { useState } from "react";

import { List } from "./model";
import { listData } from "./Data";

export const App: React.FC = () => {
  const [listArray, setListArray] = useState<List[]>(listData);

  return (
    <>
      <Header />
      <Main listArray={listArray} setListArray={setListArray} />
    </>
  );
};
