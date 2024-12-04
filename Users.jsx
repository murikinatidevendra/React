import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Style from "./homecrud.module.css"
const Users=()=>{
    let[content,setContent]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/data")
        .then((response)=>{
            setContent(response.data)
        })
    })
    return(
        <div id={Style.Box}>
          {content.map((x)=>{
            return(
                <div id={Style.Profile}>
                <table>
                    <tr>
                        <td><h3>Employee {x.id}</h3></td>
                    </tr>
                    <tr>
                        <td>Name:<h3>{x.name}</h3></td>
                    </tr>
                    <tr>
                        <td>Salary:<h3>{x.salary}</h3></td>
                    </tr>
                    <tr>
                        <td>Company:<h3>{x.company}</h3></td>
                    </tr>
                    <tr>
                    <td><button id={Style.btn}><Link to="/edit" >EDIT</Link></button></td>
                    </tr>
                </table>
                </div>
            )
          })}
        </div>
    )
}

export default Users