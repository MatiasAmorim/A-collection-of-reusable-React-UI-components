import React from "react";
import { CardListType } from "./CardList.types";
import { default as Icon } from "../Icon/index";
import "./CardList.css";

const CardList = ({
  CLlabel,
  Iname= "icon-taggle",
  onClick,
  CLbgColor,
  CLclasses,
  CLcolor,
  Icolor="#879aa9"
}: CardListType) => {

  return (
    <>
      <div
        className={`card_list ${CLclasses}`}
        onClick={onClick}
        style={{
          background: CLbgColor
        }}
      >
        <p style={{ color: CLcolor}}>
          {CLlabel}
        </p>
        <Icon 
        Icolor={Icolor} 
        Iname={Iname}
        Isize="sm"/>
      </div>
    </>
  );
};

export default CardList;
