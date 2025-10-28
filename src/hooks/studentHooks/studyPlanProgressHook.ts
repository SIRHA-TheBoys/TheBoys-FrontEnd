import { useState, useEffect } from "react";

export interface studyProps {
    studentId: string
}
export default function useStudyPlanProgressHook({ studentId }: studyProps) {

    const [progress, setProgress] = useState(0.0);

    useEffect(() => {
        fetch(`http://localhost:8080/statistic/studyPlan/${studentId}/`)
            .then(res => res.json())
            .then(response => {
                const progress = response
                setProgress(progress)
            })
    }, [])

    return { progress };

}