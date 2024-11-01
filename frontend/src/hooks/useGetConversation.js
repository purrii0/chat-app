import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
    const [loadingState, setLoadingState] = useState(false);
    const [conversations, setConversations] = useState([]);
    const [error, setError] = useState(null); // Optional error state

    useEffect(() => {
        const getConversations = async () => {
            setLoadingState(true);
            setError(null); // Reset error state on new request
            try {
                const token = localStorage.getItem("token");
                const res = await fetch("http://localhost:8080/api/users", {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (!res.ok) {
                    // Handle non-200 responses
                    const errorData = await res.json();
                    throw new Error(errorData.error || 'Failed to fetch conversations');
                }

                const data = await res.json();
                setConversations(data);
            } catch (error) {
                setError(error.message); // Set error state
                toast.error(error.message);
            } finally {
                setLoadingState(false);
            }
        };

        getConversations();
    }, []);

    return { loadingState, conversations, error }; // Return error state
};

export default useGetConversations;
