import React from 'react'
import './CourseList.css';
import Bookmark2 from '../../Images/Bookmark2.svg';
import Search from '../../Images/Search.svg';
import ProfilePicture from '../../Images/PHP.jpeg';
import CourseCard from '../CourseCard/CourseCard';
import PHPcourse from '../../Images/Phpcourse.png';
import PHPtrainer from '../../Images/PHP.jpeg';
import Liberia from '../../Images/LiberiaFlag.png';
import Pythoncourse from '../../Images/Pythonn.png';
import Pythontrainer from '../../Images/Facilitator.jpg';
import Rwanda from '../../Images/Rwanda.jpg';
import Brazil from '../../Images/Brazil.jpg';
import Figmacourse from '../../Images/figma.png';
import Figmatrainer from '../../Images/Facilitator.jpg';


const CourseList = () => {
  return (
    <div className='Course__List'>
        <div className="Course__List-head">
           <div className="coursePackage">
             <h2>Your Course</h2>
            <button id='Course__package-button'>Premium</button>
            </div> 
           <div className="menuImage">
           <img src={Bookmark2} alt=""/>
            <img src={Search} alt=""/>
            </div> 
        </div>
            <div className="Header-courses">
                <img id='Header-coursesImage' src={ProfilePicture} alt=""/><p>26 Courses</p>
            </div>
    <div className="CourseCard">
        <CourseCard
            courseIcon={PHPcourse}
            level="Beginner"
            courseTitle="Fun with PHP"
            trainerProfilePicture={PHPtrainer}
            trainerName="Thomas Gayflor"
            traineeProfilePicture={Liberia}
        />
           <CourseCard
            courseIcon={Pythoncourse}
            level="Advanced"
            courseTitle="Python Developm..."
            trainerProfilePicture={Pythontrainer}
            trainerName="Tyrese Tarr"
            traineeProfilePicture={Rwanda}
        />
           <CourseCard
            courseIcon={Figmacourse}
            level="Beginner"
            courseTitle="Figma Workshop"
            trainerProfilePicture={Figmatrainer}
            trainerName="Emmanuel James"
            traineeProfilePicture={Brazil}
        />
        <CourseCard
            courseIcon={Figmacourse}
            level="Beginner"
            courseTitle="Figma Workshop"
            trainerProfilePicture={Figmatrainer}
            trainerName="Emmanuel James"
            traineeProfilePicture={Brazil}
        />
          <CourseCard
            courseIcon={Figmacourse}
            level="Beginner"
            courseTitle="Figma Workshop"
            trainerProfilePicture={Figmatrainer}
            trainerName="Emmanuel James"
            traineeProfilePicture={Brazil}
        />
    </div>
    </div>
  )
}

export default CourseList