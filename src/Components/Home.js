import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deletestudent } from '../redux/action'
import { useNavigate } from 'react-router-dom'
import { addfavstudent,deletefavstudent} from '../redux/action'


export const Home = () => {
  const dispatch = useDispatch()
  const students = useSelector(state => state.reducer);
  console.log(students, "add students")
  // const [favUpdated, setFavUpdated] = useState(false);
  const navigate = useNavigate()

  const updateStudent = (val) => {
    console.log(val)
    navigate("/add", { state: val })
  }

  const [favStates, setFavStates] = useState({});

  const addTofavourite = (val) => {
    const updatedFavStates = { ...favStates, [val.email]: !favStates[val.email] };
    setFavStates(updatedFavStates);
    if (!favStates[val.email]) {
      dispatch(addfavstudent(val));
    }
    else{
      dispatch(deletefavstudent())
    }

  };

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
              <th scope="col">Edit</th>
              <th scope="col">DELET</th>
              <th scope="col">Staredstudent</th>
            </tr>
          </thead>
          <tbody>
            {
              students.map((val, ind) => {
                // console.log(students, "stuents")
                return (
                  <tr>
                    <th scope="row">{ind + 1}</th>
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                    <td>{val.phonenumber}</td>
                    <td>{val.dob}</td>
                    <td>{val.bNo}</td>
                    <td>{val.progress}</td>
                    <td>
                      <i onClick={() => updateStudent(val)} className="fa-solid fa-pencil m-4 text-primary"></i>
                    </td>
                    <td>
                      <i onClick={(e) => dispatch(deletestudent(val.email))} className="fa-solid fa-trash m-4 text-danger"></i>
                    </td>
                    <td>
                      <button style={{ backgroundColor :"#fff", border: 'none', color: val.fav ? "gold" : null }} onClick={() => addTofavourite(val)}><i className="fa-solid fa-star"></i></button>
                    </td>
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
