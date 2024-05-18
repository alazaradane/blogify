import { Link } from "react-router-dom";
import Logo from '../assets/images/logo.png';
import { useNavigate } from "react-router-dom";
//import ErrorToast from "../components/ErrorToast";
import { useContext, useState } from "react";
import axios from 'axios';
import backendUrl from "../../api";
import ErrorToast from "../components/ErrorToast";
import SuccessToast from "../components/SuccessToast";
import { AuthContext} from '/src/context/authContext';



const Login = () => {
  const [input, setInput] = useState({
    username: "",
    password: ""
  });
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const navigate = useNavigate();
  const {login} = useContext(AuthContext)

  axios.defaults.withCredentials = true;

  const handleInputChange = (e) => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [showToast, setShowToast] = useState(false);

  const handleCloseToast = () => {
    setShowToast(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(input);
      navigate('/');
      setShowToast(true); // Show the success toast
      setResult(res);
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data);
      } else {
        setError('An unexpected error occurred');
      }
      setShowToast(true); // Show the error toast
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        {error && <ErrorToast message={error} onClose={handleCloseToast} />}
        {result && <SuccessToast message={"User created successfully"} onClose={handleCloseToast} />}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto  w-[7rem]"
            src={Logo}
            alt="logo"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
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
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <Link to={'/register'} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Register</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
