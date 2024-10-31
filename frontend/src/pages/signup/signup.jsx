import GenderRadio from "./genderbox";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto w-full max-w-md">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Register on <span className="text-blue-500">Chatty</span>
        </h1>
        <form action="" className="w-full mt-4">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full input input-bordered h-10"
            />
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
            />
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full input input-bordered h-10"
            />
            <input
              type="password"
              placeholder="Password goes here..."
              className="w-full input input-bordered h-10"
            />
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full input input-bordered h-10"
            />
            <GenderRadio />
            <a
              href="#"
              className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
            >
              Already have an account?
            </a>
            <button className="btn btn-block btn-sm mt-2 h-10 border-slate-700">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
