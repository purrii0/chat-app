import Conversations from "./conversations";
import Logout from "./logout";
import Search from "./search";

const Sidebar = () => {
  return (
    <div className="border border-slate-500 p-4 flex flex-col ">
      <Search />
      <div className="divider px-3"></div>
      <Conversations />
      <Logout />
    </div>
  );
};
export default Sidebar;
