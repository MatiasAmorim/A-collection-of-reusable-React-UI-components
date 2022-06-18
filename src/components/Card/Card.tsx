import React, { useState } from "react";
import { CardType } from "./Card.types";
import { default as Button } from "../Button/index";
import "../style.css";
import "./Card.css";

const Card: React.FC<CardType> = (props) => {
  const {
    description,
    txtBtn,
    iconName,
    bg,
    hasShadow,
    type,
    iconColor,
    infoIcon,
    infoText,
  } = props;

  const [showInfo, setShowInfo] = useState(false);
  const showInfoCard = () => setShowInfo(!showInfo);
  return (
    <>
      <div
        className={`card_lb ${hasShadow ? "shadow" : ""} ${
          type == "app" ? "apps" : "module"
        }`}
        style={{
          background: bg,
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
                  background: iconColor,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              ></span>
            </div>
            <p className="description">{description}</p>
            <Button
              size="md"
              btnType="primary"
              label={txtBtn}
              onClick={() => {}}
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
