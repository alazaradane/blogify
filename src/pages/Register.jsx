import { Link } from "react-router-dom"
import Logo from '../assets/images/logo.png'
import { useState } from "react"
import axios from 'axios'
import backendUrl from "../../api"
import ErrorToast from "../components/ErrorToast"
import SuccessToast from "../components/ErrorToast"

const Login  = () => {

  const [input, setInput] = useState({
    username:"",
    email:"",
    password:""
  })
  const [error, setError] = useState(null)

  const handleInputChange = (e)=>{
    setInput(prev=>({...prev, [e.target.name]:e.target.value}))
  }

  //console.log(input)
  const handleSubmit = async (e)=>{
    e.preventDefault()
    try {
      const res = await axios.post(`${backendUrl}/auth/register`, input)
      console.log(res)
    } catch (error) {
      const errorResponse = error.response.data
      setError(errorResponse)
    }
  }

  const [showToast, setShowToast] = useState(false);

  const handleCloseToast = () => {
    setShowToast(!showToast);
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        {error && <ErrorToast message={error} onClose={handleCloseToast}/>}
        {!error && <SuccessToast message={"User created successfully"} onClose={handleCloseToast}/>} 

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto w-[7rem]"
            src={Logo}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" >
            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleSubmit}
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            A member?{' '}
            <a href="#login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">  
              <Link to={'/login'}>Login</Link>
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login