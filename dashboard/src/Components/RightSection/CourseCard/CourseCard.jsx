import React from "react";
import './CourseCard.css';
import PythonCourse from '../../Images/Python.jpeg';
import PHPFacilitator from '../../Images/PHP.jpeg';
import Logo192 from '../../Images/logo192.png';

const CourseCard = (props) => {
  return (
    <div className="CourseCard__Container">
      <div className="header">
        <img id="Course-logo" src={props.courseIcon} alt="" />
        <div className="header-text">
          <h3 id="Course-level">{props.level}</h3>
          <h2>{props.courseTitle}</h2>
        </div>
      </div>
      <div className="Facilitator-info">
        <p>by</p> <img id="Facilitator_account" src={props.trainerProfilePicture} alt="" /> 
        <h3>{props.trainerName}</h3>
      </div>
        <hr id="Card_line" />
      <div className="Progress">
        <h2>68%</h2> <progress id="Progress-display" value="20" max={100}></progress> <h3>19/26</h3> 
        <img id="Trainee-account" src={props.traineeProfilePicture} alt="" />
      </div>
    </div>
  );
};

export default CourseCard;
