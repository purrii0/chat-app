import useGetConversation from "../../hooks/useGetConversation";
import Conversation from "./conversation";

const Conversations = () => {
  const {loadingState, conversation} = useGetConversation();
  console.log(conversation);
  
  return (
    <div className="py-2 flex flex-col overflow-auto">
      <Conversation />
    </div>
  );
};
export default Conversations;
