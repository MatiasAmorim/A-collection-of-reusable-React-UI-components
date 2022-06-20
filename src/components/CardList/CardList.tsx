import React, {useContext} from "react";
import { CardListType } from "./CardList.types";
import { default as Icon } from "../Icon/index";
import "./CardList.css";
import {ThemeContext} from "../Theme/ThemeContext";

const CardList = ({
  CLlabel,
  Iname= "icon-taggle",
  onClick,
  CLclasses,
  CLcolor,
  Icolor="#879aa9"
}: CardListType) => {

  const themeC = useContext(ThemeContext);
  return (
    <>
      <div
        className={`card_list ${CLclasses}`}
        onClick={onClick}
        style={{
          background: (themeC.lightBg != null)? themeC.lightBg : "#fff"
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
