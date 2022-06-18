import React from "react";
import { CardListType } from "./CardList.types";
import { default as Icon } from "../Icon/index";
import "./CardList.css";

const CardList: React.FC<CardListType> = (props) => {
  const {
    label,
    iconName,
    onClick,
    bgCardListColor,
    otherClass,
    labelColor
  } = props;

  return (
    <>
      <div
        className={`card_list ${otherClass}`}
        onClick={onClick}
        style={{
          background: bgCardListColor
        }}
      >
        <p style={{ color: labelColor}}>
          {label}
        </p>
        <Icon 
        color="#879aa9" 
        name={iconName}
        size="sm"/>
      </div>
    </>
  );
};

export default CardList;
