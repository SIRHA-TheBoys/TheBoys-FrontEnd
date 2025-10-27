import { useState } from "react";
import { userHook } from "../usersHook/userHook"
import useScheduleHook from "../schedulesHook/scheduleHook"

export default function useRequestHook() {

  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState("");
  const { groups } = useScheduleHook()
  const [showAlert, setShowAlert] = useState(false);
  const [groupOriginId, setGroupOriginId] = useState("");
  const [groupDestinyId, setGroupDestinyId] = useState("");
  const { user } = userHook();


  async function handleOnSubmit() {

    const payload = {
      userId: user?.id,
      groupOriginId: groupOriginId,
      groupDestinyId: groupDestinyId,
      description: description,
      creationDate: new Date().toISOString(),
      responseDate: null,
      state: "PENDIENT"
    }

    const res = await fetch("http://localhost:8080/requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    })
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      setOpen(false);
      setGroupOriginId("")
      setGroupDestinyId("")
      setDescription("")
    }, 1000);

    const data = await res.json();
    console.log("Respuesta: ", data)

  }

  return { handleOnSubmit, open, description, groups, showAlert, groupOriginId, groupDestinyId, user, setOpen, setDescription, setShowAlert, setGroupOriginId, setGroupDestinyId }

}