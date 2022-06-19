import React, { useState } from "react";
import { DropdownType } from "./Dropdown.types";
import Icon from "../Icon";
import "./Dropdown.css";

const Dropdown = ({
  children,
  DDlabel,
  DDclasses,
  DDcolor="gray",
  DDhovColor="black",
  Iname,
}: DropdownType) => {
  const [show, setShow] = useState(false);

  const showMenu = () => setShow(!show);

  return (
    <div className={`Dropdcl ${DDclasses}`}>
      <span
        className="Dropdcl_toogle"
        style={{
          color: show ? DDhovColor : DDcolor,
        }}
        onClick={showMenu}
      >
        <span>{DDlabel}</span>
        <Icon
          Iname={Iname}
          Iclasses={`Dropdcl_icon ${show ? "flip" : ""}`}
          Icolor={ show ? DDhovColor : DDcolor }
          Isize="sm"
        />
      </span>
      {show ? (
        <ul className="Dropdcl_menu">
          {children}
        </ul>
      ) : null}
    </div>
  );
};

export default Dropdown;
