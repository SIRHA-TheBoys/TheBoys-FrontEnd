import { useState, useEffect } from "react"


export interface groupProps {
    groupId: string
}

export default function groupAvailabilityHook({ groupId }: groupProps) {

    const [availability, setAvailability] = useState(0.0);

    useEffect(() => {
        fetch(`http://localhost:8080/statistic/groupAvailability/${groupId}`)
            .then(res => res.json())
            .then(response => {
                const availability = response
                setAvailability(availability)
            })
    }, [])

    return { availability }

}