import { userHook } from "./userHook";
import { Request } from "../../types/request"
import { useState, useEffect } from "react"

export default function useRequestHook() {

    const { user } = userHook();
    const [requests, setRequest] = useState<Request[]>([]);

    useEffect(() => {
        if (!user?.id) return;
        fetch(`http://localhost:8080/requests/${user.id}`)
            .then(res => res.json())
            .then(response => {
                if (Array.isArray(response)) {
                    setRequest(response as Request[]);
                } else {
                    console.warn("Unexpected response for requests", response);
                    setRequest([]);
                }
            })
            .catch(error => console.error("Error fectching requests:", error))
    }, [user?.id])
    return { requests };
}