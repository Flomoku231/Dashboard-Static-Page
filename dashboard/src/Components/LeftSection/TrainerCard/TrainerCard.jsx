import React from "react";
import LeftFooter from "../LeftFooter/LeftFooter";
import "./TrainerCard.css";
import PHPDeveloper from "../../Images/PHP.jpeg";
import PythonDeveloper from "../../Images/Python.jpeg";
import UIDesigner from "../../Images/PHP.jpeg";

const TrainerCard = () => {
  return (
    <div className="Trainer__card">
      <div className="Left__Footer-head">
        <h2>My Tutors</h2>
        <button id="Footer_button">13</button>
      </div>
      <div className="Trainer__card-button">
        <LeftFooter
          profile={PHPDeveloper}
          name="Emmanuel Flomoku"
          position="PHP Developer"
        />

        <LeftFooter
          profile={PythonDeveloper}
          name="Flomoku"
          position="Python Developer"
        />
        <LeftFooter
          profile={PythonDeveloper}
          name="Flomoku"
          position="Python Developer"
        />

        <LeftFooter
          profile={UIDesigner}
          name="Eric Doupah"
          position="UI Designer"
        />
        <LeftFooter
          profile={PHPDeveloper}
          name="Designer "
          position="React js Developer"
        />
      </div>
    </div>
  );
};

export default TrainerCard;
