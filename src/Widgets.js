import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linked News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Real Estate surge in the West", "Real Estate - 500 reader")}
      {newsArticle("Working with React-Redux", "Programming - 1500 reader")}
      {newsArticle(
        "50 way to stay healthy in the New Year",
        "Health News - 5200 reader"
      )}
      {newsArticle(
        "The complete family plan for healthy living",
        "Health News - 2300 reader"
      )}
      {newsArticle(
        "How to avoid burnout this year",
        "Health News - 2400 reader"
      )}
      {newsArticle(
        "Stay in line with new year resolution",
        "Life Style - 2700 reader"
      )}
    </div>
  );
};

export default Widgets;
