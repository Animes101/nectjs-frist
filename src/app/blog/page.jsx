import Link from 'next/link';
import React from 'react'

 export const students = [
  { id: 1, name: "Rahim", age: 18, grade: "A" },
  { id: 2, name: "Karim", age: 19, grade: "B" },
  { id: 3, name: "Salma", age: 17, grade: "A+" },
  { id: 4, name: "Nusrat", age: 18, grade: "A" },
  { id: 5, name: "Hasan", age: 20, grade: "C" }
];


const BlogPage = () => {
  return (
    <div>
      <h1>Student List</h1>
      <ul className='flex justify-between items-center'>
        {students?.map(student => (
          <li key={student.id}>
            {student.name} - Age: {student.age}, Grade: {student.grade}
            <button className='bg-black text-white rounded-sm p-2'><Link href={`/blog/${student.id}/${student.age}/${student.grade}`}> View Details</Link></button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlogPage