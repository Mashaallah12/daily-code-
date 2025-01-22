import React, { useState } from 'react'
import './user.css'
const UserForm = () => {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userDate, setUserDate] = useState('');
    function userNameonChangeHandler(event) {
        setUserName(event.target.value)
        // console.log(event.target.value)
    }
    function userPasswordonChangeHandler(event){
        setUserPassword(event.target.value)
        // console.log(event.target.value)
    }
    function DatechangeHandler(event) {
        setUserDate(event.target.value)
        // console.log(event.target.value)
        // console.log(userDate)
        // console.log(setUserDate)
    }
    function onSubmitHandler(event) {
        event.preventDefault();

        const productData = {
            name:userName,
            password:userPassword,
            date:userDate
            
            // new3:userPassword,
        }
        console.log(productData);
        setUserDate('');
        setUserName('');
        setUserPassword('');
    }
    


  return (
    <div>
      <form onSubmit={onSubmitHandler}>
            <div className="main">
                <label>UserName</label>
                <input type="text" placeholder='' value={userName} onChange={userNameonChangeHandler}/>
                <br />
                <br />
                <label>PassWord</label>
                <input type="password" value={userPassword} onChange={userPasswordonChangeHandler}/>
                <br />
                <br />
                <label>Date</label>
                <input type="date" value={userDate} min={"01-01-2025"} max={"01-01-2030"} onChange={DatechangeHandler}/>
                <br />
                <br />
                <button>Submit</button>
            </div>
      </form>
    </div>
  )
}

export default UserForm
