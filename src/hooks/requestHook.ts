import { userHook } from "./userHook";
import { Request } from "../types/request"
import { useState, useEffect } from "react"

export default function useRequestHook() {
    
    const { user } = userHook();
    const [requests, setRequest] = useState<Request[]>([]);

    useEffect(() => {
        if(!user?.id) return;
        fetch(`http://localhost:8080/requests/${user.id}`)
            .then(res => res.json())
            .then(response => {
                const requests = response
                setRequest(requests)
            })
            .catch(error => console.error("Error fectching schedule:", error))
    }, [user?.id])
    return { requests };
}