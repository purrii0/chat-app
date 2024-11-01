import { useState } from "react"
import { useAuthContext } from "../context/authContext"
import toast from "react-hot-toast";

const useLogout = () => {
    const [loadingstate, setLoadingState] = useState(false)
    const { setAuthUser } = useAuthContext();
    const logOut = async () => {
        setLoadingState(true);
        try {
            const res = await fetch("http://localhost:8080/api/auth/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" }
            })
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error)
            }
            localStorage.removeItem("user")
            setAuthUser(null)
        } catch (error) {
            toast.error(error)
        } finally {
            setLoadingState(false)
        }
    }
    return { loadingstate, logOut }
}

export default useLogout