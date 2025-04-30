import {apiConfig} from "./api-config";

const inputTextTutor = document.getElementById("tutor")
const inputTextPet = document.getElementById("pet")
const inputPhone = document.getElementById("phone")
const inputDescription = document.getElementById("description")
const inputData = document.getElementById("schedule-data")
const inputTime = document.getElementById("schedule-time")

export async function scheduleNew() {
    await fetch(`${apiConfig.baseURl}/schedules`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: new Date().getTime().toString(),
            tutor: inputTextTutor.value,
            pet: inputTextPet.value,
            phone: inputPhone.value,
            description: inputDescription.value,
            data: inputData.value,
            time: inputTime.value,
        })
    })
}