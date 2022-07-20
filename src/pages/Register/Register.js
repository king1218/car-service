import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate= useNavigate();
  const navigateLogin=()=>{
    navigate('/register');
  }
  const handleRegiter=event=>{
    event.preventDefault();
    const FristName= event.target.FirstName.value;
    const LastName = event.target.LastName.value;
    const email= event.target.email.value;
    const password = event.target.password.value;
    console.log(FristName,LastName,email,password);
   }
    return (
        <div>
           <div class="mx-auto lg:mt-20 mt-10 block p-6 rounded-lg shadow-lg bg-white max-w-md">
  <form onSubmit={handleRegiter}>
    <div class="grid grid-cols-2 gap-4">
      <div class="form-group mb-6">
        <input type="text" name='FirstName' class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
          aria-describedby="emailHelp123" placeholder="First name"/>
      </div>
      <div class="form-group mb-6">
        <input type="text" name='LastName' class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
          aria-describedby="emailHelp124" placeholder="Last name"/>
      </div>
    </div>
    <div class="form-group mb-6">
      <input type="email" name='email' class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
        placeholder="Email address"/>
    </div>
    <div class="form-group mb-6">
      <input type="password" name='password' class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126"
        placeholder="Password"/>
    </div>
    <div class="form-group form-check text-center mb-6">
      <p>
        Already have account?<Link onClick={navigateLogin} to='/login'><span className='text-blue-700'>Login </span>  </Link>    </p>
    </div>
    <button type="submit" class="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">Sign up</button>
  </form>
</div>
        </div>
    );
};

export default Register;