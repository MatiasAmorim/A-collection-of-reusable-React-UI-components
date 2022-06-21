import React, { useState, useContext } from "react";
import { CardType } from "./Card.types";
import { default as Button } from "../Button/index";
import "../style.css";
import "./Card.css";
import {ThemeContext} from "../Theme/ThemeContext";
import styled from 'styled-components';


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

  const Div = styled.div`
  background: ${cardType=="mod"? "#fff": themeC.lightBg}
  `;

  const Span = styled.span`
  color: ${iconColor==null? themeC.primaryColor : iconColor}
  `;
  return (
    <>
      <Div
        className={`card_lb ${hasShadow ? "shadow" : ""} ${
          cardType == "app" ? "apps" : "module"
        }`}>
        <div className="iconInfo-container">
          <span className={`info__icon-btn ${infoIcon}`} onClick={showInfoCard}></span>
        </div>
        {!showInfo ? (
          <>
            <div className="iconPrimary-container">
              <Span
                className={iconName}
              ></Span>
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
      </Div>
    </>
  );
};

export default Card;
