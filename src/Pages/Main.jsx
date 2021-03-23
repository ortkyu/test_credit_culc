import React, { useState } from "react";
import "./main.css";
import { Modal } from "./Modal";

export const Main = () => {

  const [openModal, setOpen] = useState(false);
  const toggle = () => setOpen(!openModal);

  return (
    <div>
      {openModal ? (
        <Modal toggle={toggle}/>
      ) : (
        <div className="main">
          <button className="btnMain" onClick={toggle}>
            Налоговый вычет
          </button>
        </div>
      )}
    </div>
  );
};
