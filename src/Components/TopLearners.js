import React from 'react'
import { useSelector } from 'react-redux'

export const TopLearners = () => {
  const students = useSelector(state => state.favreducer)
  console.log(students,"top ")
  return (
    <div className='table-container' style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
      {
        (students.length) ? <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">DOB</th>
              <th scope="col">bNo</th>
              <th scope="col">progress</th>
            </tr>
          </thead>
          <tbody>
            {
              students.map((val, ind) => {
                console.log(students, "students")
                return (
                  <tr>
                    <th scope="row">{ind + 1}</th>
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                    <td>{val.phonenumber}</td>
                    <td>{val.dob}</td>
                    <td>{val.bNo}</td>
                    <td>{val.progress}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table> : <h1>No data found</h1>
      }
    </div>
  )
}
