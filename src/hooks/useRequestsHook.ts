import { useState, useEffect } from "react";
import { userHook } from "./userHook";
import { Request } from "../types/request";

interface UseRequestsResult {
    requests: Request[];
    loading: boolean;
    error: string | null;
}

export default function useRequestsHook(): UseRequestsResult {
    const { user } = userHook();
    const isAdmin = user?.role === "ADMINISTRATOR";

    const [requests, setRequests] = useState<Request[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!user?.id && !isAdmin) {
            setLoading(false);
            return;
        }

        setLoading(true);
        setError(null);
        const url = isAdmin
            ? `http://localhost:8080/requests/allRequests`
            : `http://localhost:8080/requests/${user?.id}`;

        fetch(url)
            .then(res => {
                if (!res.ok) throw new Error("There are no current requests, please try again later.");
                return res.json();
            })
            .then(response => {
                if (Array.isArray(response)) {
                    setRequests(response as Request[]);
                } else {
                    console.warn("Unexpected response for requests", response);
                    setRequests([]);
                }
            })
            .catch(err => {
                console.error("Error fetching requests:", err);
                setError(err.message);
                setRequests([]);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [user?.id, isAdmin]);

    return { requests, loading, error };
}
