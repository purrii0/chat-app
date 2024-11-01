import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/authContext";

const useSignup = () => {
    const [loadingstate, setLoadingState] = useState(false);
    const { setAuthUser } = useAuthContext();

    const signUp = async ({ fullname, username, email, password, confirmPassword, gender }) => {
        const success = handleInputErr({ fullname, username, email, password, confirmPassword, gender })
        if (!success) return;

        setLoadingState(true)
        try {
            const res = await fetch("http://localhost:8080/api/auth/signup", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ fullname, username, email, password, confirmPassword, gender })
            })
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error)
            }
            localStorage.setItem("user", JSON.stringify(data.user))
            localStorage.setItem("token", data.token)
            setAuthUser(data)
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoadingState(false)
        }
    }
    return { loadingstate, signUp }
}

function handleInputErr(data) {
    if (!data.username || !data.fullname || !data.email || !data.password || !data.confirmPassword || !data.gender) {
        toast.error("Please fill in all the fields")
        return false;
    }
    if (data.password !== data.confirmPassword) {
        toast.error("Password didn't match");
        return false;
    }
    if (data.password.length < 8) {
        toast.error("Password is too short just like your..");
        return false;
    }
    return true;
}

export default useSignup