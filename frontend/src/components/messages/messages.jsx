import useGetMessage from "../../hooks/useGetMessage";
import MessageSkeleton from "../../skeleton/messageSkeleton";
import Message from "./message";

const Messages = () => {
  const { loadingState, messages } = useGetMessage();
  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loadingState && messages.length > 0 && messages.map((message)=> (
        <Message key={message._id} message={message}/>
      ))}
      {loadingState && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loadingState && messages.length === 0 && (<p className='text-center'>Send a message to start the conversation</p>)}
    </div>
  );
};

export default Messages;
