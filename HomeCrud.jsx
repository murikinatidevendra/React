import React from "react"
import { Link } from "react-router-dom"
import style from "./homecrud.module.css"

const HomeCrud=()=>{
    return(
        <section id={style.nav}>
            <Link to="/">CREATE-USERS</Link>
            <Link to="/users">USERS</Link>
        </section>
    )
}

export default HomeCrud