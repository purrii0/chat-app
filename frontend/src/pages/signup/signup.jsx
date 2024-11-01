import { Link } from "react-router-dom";
import GenderRadio from "./genderbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullname: '',
    username:'',
    email:'',
    password:'',
    confirmPassword:'',
    gender:'' 
  })
  const {loadingstate, signUp} = useSignup();

  const handleRadioChange = (gender) =>{
    setInputs({...inputs, gender})
  }


  const handleSubmit = async(e) =>{
    e.preventDefault();
    await signUp(inputs)
  }

  return (
    <div className="flex flex-col items-center justify-center mx-auto w-full max-w-md">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Register on <span className="text-blue-500">Chatty</span>
        </h1>
        <form onSubmit={handleSubmit} className="w-full">
          <div>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full input input-bordered h-10 mt-4"
              value={inputs.fullname}
              onChange={(e)=> setInputs({...inputs, fullname: e.target.value})}
            />
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10 mt-4"
              value={inputs.username}
              onChange={(e)=> setInputs({...inputs, username: e.target.value})}
            />
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full input input-bordered h-10 mt-4"
              value={inputs.email}
              onChange={(e)=> setInputs({...inputs, email: e.target.value})}

            />
            <input
              type="password"
              placeholder="Password goes here..."
              className="w-full input input-bordered h-10 mt-4"
              value={inputs.password}
              onChange={(e)=> setInputs({...inputs, password: e.target.value})}

            />
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full input input-bordered h-10 mt-4"
              value={inputs.confirmPassword}
              onChange={(e)=> setInputs({...inputs, confirmPassword: e.target.value})}

            />
            <GenderRadio className="mt-4" onradiochange={handleRadioChange} selectedGender={inputs.gender} />
            <Link
              to="/login"
              className="text-sm hover:underline hover:text-blue-600 mt-2 px-1.5 inline-block"
            >
              Already have an account?
            </Link>
           <button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loadingstate}>
							{loadingstate ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
