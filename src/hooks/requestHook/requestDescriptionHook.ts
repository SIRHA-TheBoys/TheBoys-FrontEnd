import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function useRequestDescriptionHook() {
  const { id } = useParams();
  const [request, setRequest] = useState<any>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // If the caller passed the request via navigation state, use it immediately
    if (location.state) {
      setRequest(location.state as any);
      return;
    }

    async function fetchRequest() {
      if (!id) return;
      try {
        const res = await fetch(`http://localhost:8080/requests/${id}`);
        if (!res.ok) {
          console.error("Failed to fetch request", res.status);
          return;
        }
  const data = await res.json();
  console.debug("requestDescriptionHook fetched data:", data);
        if (Array.isArray(data)) {
          const found = data.find((r: any) => String(r.id) === String(id) || String(r.userId) === String(id));
          setRequest(found ?? data[0] ?? null);
        } else {
          setRequest(data ?? null);
        }
      } catch (err) {
        console.error(err);
      }
    }

    fetchRequest();
  }, [id, location.state]);

  return { request, navigate };
}
