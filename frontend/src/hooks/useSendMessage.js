import { useState } from "react"
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useSendMessage = () => {
    const [loadingState, setLoadingState] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();
    const sendMessage = async (message) => {
        setLoadingState(true)
        const token = localStorage.getItem("token")
        try {
            const res = await fetch(`http://localhost:8080/api/messages/send/${selectedConversation._id}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ message })
            })
            const data = await res.json();

            if (data.error) {
                throw new Error(data.error)
            }

            setMessages([...messages, data.message])

        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoadingState(false);
        }
    }
    return { loadingState, sendMessage }
}

export default useSendMessage