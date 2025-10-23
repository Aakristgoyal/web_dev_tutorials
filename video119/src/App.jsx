import React from 'react'
import './App.css'
import { useForm } from "react-hook-form"

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    })
  }

  const onSubmit = async (data) => {
    await delay(2);
    let a = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    let res = await a.text();
    console.log(res);
    // if(data.name==="admin"){
    //   return Promise.reject({name:{message:"You cannot use this name"}});
    // }
    // if(data.name!=="Aakrist"){
    //   setError("myForm",{message:"Credentials are not valid"})
    // }
    // if(data.name==="Rohan"){
    //   setError("blockedUser",{message:"This user is blocked"});
    // }
    console.log(data);
  }

  return (
    <>
      {isSubmitting && <h2>Submitting form....</h2>}
      <div className="container">
        <form action="/" method='POST' id='loginForm' onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name", { required: true, minLength: { value: 3, message: "Name must be at least 3 characters" }, maxLength: { value: 8, message: "Name must be at most 8 characters" } })} type="text" placeholder='Enter Your Name' /><br />
          {errors.name && <span className='red'>{errors.name.message}</span>}<br />
          <input {...register("email", { required: true })} type="text" placeholder='Enter Your Email' /><br />
          <input {...register("password", { required: true, minLength: { value: 5, message: "password must be of atleast length 5" } })} type="text" placeholder='Enter password' /><br />
          {errors.password && <span className='red'>{errors.password.message}</span>}<br />
          <button disabled={isSubmitting} type="submit">Submit</button><br />
          {errors.myForm && <span className='red'>{errors.myForm.message}</span>}<br />
          {errors.blockedUser && <span className='red'>{errors.blockedUser.message}</span>}<br />
        </form>
      </div>
    </>
  )
}

export default App
