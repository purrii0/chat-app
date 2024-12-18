import { useEffect } from "react";
import useConversation from "../../zustand/useConversation.js";
import MessageInput from "./messageinput.jsx";
import Messages from "./messages.jsx";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/authContext.jsx";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    return () => setSelectedConversation(null);
  }, []); 

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <div className="flex items-center">
              <div className="w-12 rounded-full">
                <img
                  src={selectedConversation.profilePicture}
                  alt="user avatar"
                />
              </div>
              <div className="flex flex-col px-2">
                <span className="text-gray-900 font-bold">
                  {selectedConversation.fullname}
                </span>
                <div className="chat-footer text-gray-900">{`@${selectedConversation.username}`}</div>
              </div>
            </div>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const {authUser} = useAuthContext();

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.fullname} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
