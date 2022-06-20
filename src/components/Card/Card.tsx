import React, { useState, useContext } from "react";
import { CardType } from "./Card.types";
import { default as Button } from "../Button/index";
import "../style.css";
import "./Card.css";
import {ThemeContext} from "../Theme/ThemeContext";


const Card: React.FC<CardType> = (props) => {
  const {
    description,
    txtBtn,
    iconName,
    hasShadow,
    cardType,
    iconColor,
    infoIcon,
    infoText,
    onClick
  } = props;

  const [showInfo, setShowInfo] = useState(false);
  const showInfoCard = () => setShowInfo(!showInfo);
	const themeC = useContext(ThemeContext);

  return (
    <>
      <div
        className={`card_lb ${hasShadow ? "shadow" : ""} ${
          cardType == "app" ? "apps" : "module"
        }`}
        style={{
          background: cardType=="mod"? "#fff": themeC.lightBg,
        }}
      >
        <div className="iconInfo-container">
          <span className={infoIcon} onClick={showInfoCard}></span>
        </div>
        {!showInfo ? (
          <>
            <div className="iconPrimary-container">
              <span
                className={iconName}
                style={{
                  color: iconColor==null? themeC.primaryColor : iconColor
                }}
              ></span>
            </div>
            <p className="description">{description}</p>
            <Button
              size="md"
              btnType="primary"
              label={txtBtn}
              onClick={onClick}
            />
          </>
        ) : (
          <div className="back">
            <p className="infoText">{infoText}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
