import React from 'react'

import { students } from '../page'; 


const StudentDetailsPage = ({params}) => {


     const student = students.find(std => std.id === parseInt(params.singleStudent));



  console.log(params.singleStudent)


  return (
    <div>
      <h1>{student?.name}</h1>
      <p>Age: {student?.age}</p>
      <p>Grade: {student?.grade}</p>
    </div>
  )
}

export default StudentDetailsPage