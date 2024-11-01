import { useEffect, useState } from "react"
import toast from "react-hot-toast";

const useGetConversation = () => {
    const [loadingState, setLoadingState] = useState(false);
    const [conversation, setConversation] = useState([])

    useEffect(() => {
        const getConversation = async () => {
            setLoadingState(true)
            try {
                const res = await fetch('http://localhost:8080/api/users/')
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error)
                }
                setConversation(data)
            } catch (error) {
                toast.error(error.message)
            } finally {
                setLoadingState(false)
            }
        }
        // getConversation();
    }, [])
    return { loadingState, conversation }
}

export default useGetConversation;

