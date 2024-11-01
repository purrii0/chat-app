import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/authContext';

const useLogin = () => {
    const [loadingState, setLoadingState] = useState(false);
    const { setAuthUser } = useAuthContext();

    const logIn = async (username, password) => {
        const success = handleInputErrors(username, password);
        if (!success) return;

        setLoadingState(true);
        try {
            const res = await fetch("http://localhost:8080/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ username, password })
            });

            console.log(res);


            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }

            localStorage.setItem("user", JSON.stringify(data.user));
            localStorage.setItem("token", JSON.stringify(data.token));
            setAuthUser(data);

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoadingState(false);
        }
    };

    return { loadingState, logIn };
};

export default useLogin;

function handleInputErrors(username, password) {
    if (!username || !password) {
        toast.error("Please fill in all fields");
        return false;
    }
    return true;
}