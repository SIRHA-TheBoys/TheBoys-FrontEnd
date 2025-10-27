import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function useRequestDescriptionHook() {
  const { id } = useParams();
  const [request, setRequest] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchRequest() {
      const res = await fetch(`http://localhost:8080/requests/${id}`);
      const data = await res.json();
      setRequest(data);
    }
    if (id) fetchRequest();
  }, [id]);

  return { request, navigate };
}
