import { useEffect, useRef } from "react";
import useGetMessage from "../../hooks/useGetMessage";
import MessageSkeleton from "../../skeleton/messageSkeleton";
import Message from "./message";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { loadingState, messages } = useGetMessage();
  const lastMessageRef = useRef();
  useListenMessages();

  useEffect(() => {
    if (lastMessageRef.current) {
      const handler = setTimeout(() => {
        lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
      }, 100);

      return () => clearTimeout(handler);
    }
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loadingState &&
        messages.length > 0 &&
        messages.map((message, idx) => (
          <div
            key={message._id}
            ref={idx === messages.length - 1 ? lastMessageRef : null}
          >
            <Message message={message} />
          </div>
        ))}

      {loadingState &&
        [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loadingState && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
