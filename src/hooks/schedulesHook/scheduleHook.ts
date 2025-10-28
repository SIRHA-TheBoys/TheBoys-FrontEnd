import { useState, useEffect } from "react";
import { Group } from "../../types/group"
import { userHook } from "../usersHook/userHook";

export default function useScheduleHook() {

    const [groups, setGroups] = useState<Group[]>([]);
    const { user } = userHook();
    useEffect(() => {
        if (!user?.id) return;
        fetch(`http://localhost:8080/groups/student/${user?.id}/schedule`)
            .then(res => res.json())
            .then(response => {
                const groups = response
                setGroups(groups)
            })
            .catch(error => console.error("Error fetching schedule:", error))
    }, [user?.id])

    return { groups };

}