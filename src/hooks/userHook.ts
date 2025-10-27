import { useState, useEffect } from "react";
import { User } from "../types/user";

export function useUserHook() {

  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState("");
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) return;
    const userI = JSON.parse(storedUser);
    const roleU = userI.role.toLowerCase();
    console.log(userI)
    fetch(`http://localhost:8080/${roleU}/${userI.id}`)
      .then(res => res.json())
      .then(response => {
        const user = response
        setUser(user)
        setRole(roleU)
      });

  }, [])
  return { user, role };
}

export const userHook = useUserHook;