import {scheduleDelete} from "../../services/schedule-delete.js";

const clients = document.querySelectorAll(".clients")

clients.forEach((client) => {
    client.addEventListener("click", async (event) => {
        if(event.target.classList.contains("delete-schedule")) {
            const item = event.target.closest("li")
            const {id} = item.dataset

            if(id) {
                const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento ?")

                if(isConfirm) {
                    await scheduleDelete({id})
                    window.location.reload()
                }
            }
        }
    })
})