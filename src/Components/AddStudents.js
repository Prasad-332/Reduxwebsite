import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { addstudent, updatestudent } from '../redux/action'
import { useDispatch, useSelector } from 'react-redux'

export const AddStudents = () => {

  const location = useLocation()
  const userDetails = location.state
  console.log(userDetails)
  const [isUpdate, setIsUpdate] = useState(false)
  const [error, setError] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  let [stuData, setStuData] = useState({
    email: "hello@happy",
    name: "prasad",
    phonenumber: "98789879898",
    dob: "23-02-2001",
    bNo: "4",
    progress: "null",
   
  })

  useEffect(() => {
    if (userDetails !== null) {
      setStuData(userDetails)
      setIsUpdate(true)
    }
  }, [])

  const students = useSelector(state => state.reducer);

  const update = (e) => {
    e.preventDefault()
    dispatch(updatestudent(stuData))
    navigate("/")
  }

  const changeVal = (e) => {
    const { name, value } = e.target
    setStuData({ ...stuData, [name]: value })
  }

  const add = (e) => {
    e.preventDefault()

    const doesEmailExist = students.find((obj) => obj.email === stuData.email)

    if (doesEmailExist === undefined) {
      const studentData = { ...stuData, isFav: false }
      dispatch(addstudent(studentData))
      navigate("/")
    } else {
      setError("Email already exists!!")
    }
  }

  const addOrUpdate = (e) => {
    if (isUpdate) {
      update(e)
    } else {
      add(e)
    }
  }

  return (
    <>
      {/* <h2>{error !== "" && error}</h2> */}
      <form style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: '100vh' }} onSubmit={(e) => addOrUpdate(e)}>
        <div className="mb-3" style={{ display: 'flex', flexDirection: 'column', height: '10vh', }}>
          <label htmlFor="exampleInputEmail1" className="form-label">Email address*</label>
          <input required type="email" className="form-control" id="exampleInputEmail1" value={stuData.email} name="email" aria-describedby="emailHelp" onChange={(e) => changeVal(e)} />
        </div>
        <div className="mb-3" >
          <label htmlFor="exampleInputPassword1" className="form-label">name*</label>
          <input required type="text" className="form-control" id="exampleInputPassword1" value={stuData.name} name="name" onChange={(e) => changeVal(e)} />
        </div>
        <div className="mb-3" >
          <label htmlFor="exampleInputPassword1" className="form-label">Phonenumber*</label>
          <input required type="number" className="form-control" id="exampleInputPassword1" value={stuData.phonenumber} name="phonenumber" onChange={(e) => changeVal(e)} />
        </div>
        <div className="mb-3" >
          <label htmlFor="exampleInputPassword1" className="form-label">DoB*</label>
          <input required type="date" className="form-control" id="exampleInputPassword1" value={stuData.dob} name="dob" onChange={(e) => changeVal(e)} />
        </div>
        <div className="mb-3" >
          <label htmlFor="exampleInputPassword1" className="form-label">bNo*</label>
          <input required type="number" className="form-control" id="exampleInputPassword1" value={stuData.bNo} name="bNo" onChange={(e) => changeVal(e)} />
        </div>
        <div className="mb-3" >
          <label htmlFor="exampleInputPassword1" className="form-label">progress*</label>
          <input required type="txt" className="form-control" id="exampleInputPassword1" value={stuData.progress} name="progress" onChange={(e) => changeVal(e)} />
        </div>

        <button type="submit" className="btn btn-primary">{isUpdate ? "Update" : "Submit"}</button>
      </form>
    </>
  )
}
