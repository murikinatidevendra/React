import axios from "axios"
import { useState } from "react"
import style from "./homecrud.module.css"
const CreateUsers=()=>{
    let[name,setName]=useState("")
    let[salary,setSalary]=useState("")
    let[company,setCompany]=useState("")

    let nameData=(e)=>{
        setName(e.target.value)
    }
    let salaryData=(e)=>{
        setSalary(e.target.value)
    }
    let companyData=(e)=>{
        setCompany(e.target.value)
    }
    let formHandle=(e)=>{
        e.preventDefault()
       let payload={name,salary,company}
       axios.post("http://localhost:3000/data",payload)
       .then(()=>{
        console.log("DATA HAS BEEN ADDED")
       })
       .catch(()=>{
        console.log("PLEASE ADD DATA")
       })
    }
    return(
        <div id={style.mainForm}>
         <form >
            <label >Name:</label>
            <input type="text" value={name} onChange={nameData}/>
            <label >Salary:</label>
            <input type="number" value={salary} onChange={salaryData}/>
            <label >Company</label>
            <input type="text" value={company} onChange={companyData}/>
            <button onClick={formHandle}>Submit</button>
         </form>
        </div>
        
    )
}

export default CreateUsers