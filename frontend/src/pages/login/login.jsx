const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
        <h1 className=" text-3xl font-semibold text-center text-gray-300 ">
          Login to
          <span className="text-blue-500"> Chatty </span>
        </h1>
        <form action="">
          <div>
            <label className="label p-2 mt-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10 "
            />
          </div>
          <div>
            <label className="label p-2 mt-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10 "
            />
          </div>
          <a
            href="#"
            className=" text-sm hover:underline hover:text-blue-600 mt-2 inline-block "
          >
            Don't have a account?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2 h-10">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;