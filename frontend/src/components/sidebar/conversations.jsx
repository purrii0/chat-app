import useGetConversation from "../../hooks/useGetConversation";
import { getRandomEmoji } from "../../utils/emoji";
import Conversation from "./conversation";

const Conversations = () => {
  const {loadingState, conversations} = useGetConversation();
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, idx) => (
        <Conversation 
        key={conversation._id} 
        conversation={conversation} 
        emoji={getRandomEmoji()} 
        idx={idx === conversations.length - 1} 
        />
      ))}
     {loadingState ? <span className="loading loading-spinner mx-auto"></span> : null} 
    </div>
  );
};
export default Conversations;
