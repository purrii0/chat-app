import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
    const [loadingState, setLoadingState] = useState(false);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const getConversations = async () => {
            setLoadingState(true);
            try {
                const token = localStorage.getItem("token");

                const res = await fetch("http://localhost:8080/api/users", {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                })

                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error);
                }
                setConversations(data);

            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoadingState(false);
            }
        };

        getConversations();
    }, []);

    return { loadingState, conversations };
};

export default useGetConversations;
