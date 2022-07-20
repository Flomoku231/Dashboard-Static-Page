import React from 'react'
import CourseList from './CourseList/CourseList'
import Head from './Head/Head'

const RightSection = () => {
  return (
    <section className="Right-Section">
        <Head/>
        <CourseList/>
    </section>
  )
}

export default RightSection