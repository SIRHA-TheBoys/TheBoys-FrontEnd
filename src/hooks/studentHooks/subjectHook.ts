import { useState, useEffect } from "react";
import { Subject } from "../../types/subject"

export default function useSubjectHook() {

    const [subjects, setSubjects] = useState<Subject[]>([]);
    useEffect(() => {
        fetch(`http://localhost:8080/subjects/all`)
            .then(res => res.json())
            .then((data) => {
                console.log("Materias:", data)
                setSubjects(data)
            })
            .catch((error) => console.error("Error fetching subjects:", error));
    }, [])
    return { subjects };
}

export const subjectHook = useSubjectHook;