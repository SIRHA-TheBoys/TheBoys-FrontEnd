import { useEffect, useState } from "react";
import { User } from "../types/user";

export default function useConsultStudentInfoHook(studentId: string) {
    const [student, setStudent] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!studentId) {
            setStudent(null);
            return;
        }
        setLoading(true);
        setError(null);
        fetch(`http://localhost:8080/student/${studentId}`)
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })
            .then((response) => setStudent(response as User))
            .catch((err) => {
                console.error("Error fetching student info:", err);
                setError(err.message);
                setStudent(null);
            })
            .finally(() => setLoading(false));
    }, [studentId]);

    return { student, loading, error };
}
