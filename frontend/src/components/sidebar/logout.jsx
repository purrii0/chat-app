import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
const Logout = () => {
  const {loadingState, logOut} = useLogout();
  return (

		<div className='mt-auto'>
			{!loadingState ? (
				<BiLogOut className='w-6 h-6 text-white cursor-pointer' onClick={logOut} />
			) : (
				<span className='loading loading-spinner'></span>
			)}
		</div>
  );
};

export default Logout;
