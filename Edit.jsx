
import React from 'react'
import style from "./homecrud.module.css"
import { useState } from 'react'
const Edit = () => {
    let [name, setName] = useState("")
    let [salary, setSalary] = useState("")
    let [company, setCompany] = useState("")

  return (
    <div id={style.mainForm}>
      <form>
        <label >Emp-Name:</label>
        <input type="text" value={name} /><br />
        <label >Emp-Salary:</label>
        <input type="number" value={salary} /><br />
        <label >Emp-Company:</label>
        <input type="text" value={company} /><br />
        <button >Submit</button>
    </form>
    </div>
  )
}

export default Edit
