import React from "react";
import "./LeftMenu.css";
import MyCourses from "../../Images/Mycourses.svg";
import Bookmark from "../../Images/Bookmark.svg";
import TrendingCourses from "../../Images/Trending.svg";
import Articles from "../../Images/Article.svg";
import CompletedCourses from "../../Images/Completecourse.svg";

const LeftMenu = () => {
  return (
    <div className="Left__Menu">
      <ul>
        <li>
          <img src={MyCourses} alt="" />
          My Courses
        </li>
        <li>
          <img src={Bookmark} alt="" />
          Bookmarks
        </li>
        <li>
          <img src={TrendingCourses} alt="" />
          Trending Courses
        </li>
        <li>
          <img src={Articles} alt="" />
          Help Articles <button id="Article_button">6</button>
        </li>
        <li>
          <img src={CompletedCourses} alt="" />
          Completed Courses
        </li>
      </ul>
    </div>
  );
};

export default LeftMenu;
