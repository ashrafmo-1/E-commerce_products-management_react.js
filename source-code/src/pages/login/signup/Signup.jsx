import React from 'react'
import "../signup/signup.css"
import { Link } from "react-router-dom";
import NavgationBar from "../../../components/NavgationBar";

export default function Signup() {
  return (
<>
      <NavgationBar />
    <div style={{height: 'calc(100vh - 56px)'}} className={'flex-center'}>
    <form class="form">
    <p class="title">Register </p>
    <p class="message">Signup now and get full access to our app. </p>
        <div class="flex">
        <label>
            <input required="" placeholder="" type="text" class="input"/>
            <span>Firstname</span>
        </label>
        <label>
            <input required="" placeholder="" type="text" class="input"/>
            <span>Lastname</span>
        </label>
    </div>
    <label>
        <input required="" placeholder="" type="email" class="input"/>
        <span>Email</span>
    </label>
    <label>
        <input required="" placeholder="" type="password" class="input"/>
        <span>Password</span>
    </label>
    <label>
        <input required="" placeholder="" type="password" class="input"/>
        <span>Confirm password</span>
    </label>
    <button class="submit">Submit</button>
    <p class="signin">Already have an acount ? <Link to="/login"> Sign in</Link> </p>
    </form>
    </div>
</>
  )
}
