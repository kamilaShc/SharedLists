import { ReactNode } from "react";
interface Props {
  children: ReactNode;
  name: string;
  addModal: string;
  length: number;
}

export default function Column({ children, name, addModal, length }: Props) {
  const obj = name === "My Lists" ? "lists" : "items";
  return (
    <>
      <div className="main-header">
        <h3>{name}</h3>
        <i
          className="fa-solid fa-plus"
          data-toggle="modal"
          data-target={addModal}
        ></i>
      </div>
      {length > 0 ? (
        <div className="my-lists">
          <ul className="list-group">{children}</ul>
        </div>
      ) : (
        <p>{`There are no ${obj} yet. Create the first!`}</p>
      )}

      <button className="big-plus" data-toggle="modal" data-target={addModal}>
        +
      </button>
    </>
  );
}
