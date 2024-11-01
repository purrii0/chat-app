import { useAuthContext } from "../../context/authContext";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  if (!authUser || !selectedConversation) return null;  

  const fromMe = message.senderId === authUser.id;  
  const chatClassName = fromMe ? "chat chat-end" : "chat chat-start";
  const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePicture;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "bg-gray-700";


  return (
    <div className={chatClassName}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="User Avatar" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor}`}>
          {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center"></div>
    </div>
  );
};

export default Message;
