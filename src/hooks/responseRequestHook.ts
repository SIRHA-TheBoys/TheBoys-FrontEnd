import { useState, useEffect } from "react"
import { userHook } from "../hooks/userHook"
import { Request } from "../types/request"

export default function responseRequestHook() {
  const [request, setRequest] = useState<Request[] | null>(null);
  const { user } = userHook()

  useEffect(() => {
    fetch(`http://localhost:8080/requests/${user?.id}`)
      .then(res => res.json())
      .then(response => {
        const request = response
        setRequest(response)
      });
  }, [])

  return { request };
}