import {apiConfig} from "./api-config.js"

export async function scheduleDelete({id}) {
    try {
        await fetch(`${apiConfig.baseURl}/schedules/${id}`, {
            method: "DELETE",
        })

        alert("Agendamento foi cancelado")
    } catch (error) {
        console.log(error)
        alert("Não foi possível cancelar o agendamento!")
    }
}