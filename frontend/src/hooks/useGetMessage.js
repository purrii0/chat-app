import { useEffect, useState } from "react"
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useGetMessage = () => {
    const [loadingState, setLoadingState] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();

    useEffect(() => {
        const getMessage = async () => {
            setLoadingState(true)
            try {
                const token = localStorage.getItem("token");
                const res = await fetch(`http://localhost:8080/api/messages/${selectedConversation._id}`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                })
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error)
                }
                setMessages(data)
            } catch (error) {
                toast.error(error.message)
            } finally {
                setLoadingState(false)
            }
        }
        if (selectedConversation?._id) {
            getMessage()
        }
    }, [selectedConversation?._id, setMessages])
    return { loadingState, messages }
}

export default useGetMessage