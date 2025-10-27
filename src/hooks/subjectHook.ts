import { useState, useEffect} from "react";
import {Subject} from "../types/subject"

export default function subjectHook(){

    const [subjects, setSubject] = useState<Subject[]>([]);
    useEffect(() => {
        fetch(`http://localhost:8080/subjects/all`)
            .then(res => res.json())
            .then((data) => {
                console.log ("Materias:", data)
                setSubject(data)
            })
            .catch((error) => console.error("Error fetching subjects:", error));
          },[])
    return { subjects };
}