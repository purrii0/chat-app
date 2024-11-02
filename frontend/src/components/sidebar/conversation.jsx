import { useEffect, useRef } from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/socketContext";

const Conversation = ({ conversation, idx, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;

  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  console.log(onlineUsers)

  const conversationRef = useRef(null);

  useEffect(() => {
    if (isSelected && conversationRef.current) {
      conversationRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [isSelected]);

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-gray-500 rounded p-2 py-1 cursor-pointer 
        ${isSelected ? "bg-sky-500" : ""}`}
        onClick={() => setSelectedConversation(conversation)}
        ref={isSelected ? conversationRef : null}
      >
        <div className={`avatar ${isOnline ? "online" : "offline"}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePicture} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.fullname}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      {!idx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;
