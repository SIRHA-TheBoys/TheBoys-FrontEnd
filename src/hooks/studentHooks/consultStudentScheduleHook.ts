import { useState, useEffect } from "react";
import { Group } from "../../types/group"

export interface StudentProps {
    studentId: string
}
export default function useConsultStudentScheduleHook({ studentId }: StudentProps) {

    const [groups, setGroups] = useState<Group[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!studentId) {
            setGroups([]);
            return;
        }

        setLoading(true);
        fetch(`http://localhost:8080/groups/student/${studentId}/schedule`)
            .then(res => res.json())
            .then(response => {
                const groups = response
                setGroups(groups)
            })
            .catch(error => console.error("Error fetching student schedule:", error))
            .finally(() => setLoading(false));
    }, [studentId])

    return { groups, loading };

}