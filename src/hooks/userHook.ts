import { useState, useEffect} from "react";
import {User} from "../types/user"

export function userHook(){

    const [user, setUser] = useState<User | null >(null);
    useEffect(() => {
            const storedUser = localStorage.getItem("user");
            if (!storedUser) return;
            const userI = JSON.parse(storedUser);
            console.log(userI)
            fetch(`http://localhost:8080/users/${userI.id}`)
                .then(res => res.json())
                .then(response => {
                    const user  = response
                    console.log (response)
              setUser(user)
            });
          
          },[])
    return { user };
}