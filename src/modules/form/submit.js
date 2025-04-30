import {closeModal} from "../../ui/modal.js";
import {scheduleNew} from "../../services/schedule-new.js";

const inputTutor = document.getElementById("tutor")
const inputPet = document.getElementById("pet")
const inputPhone = document.getElementById("phone")
const inputDescription = document.getElementById("description")
const form = document.querySelector("form");

function inputsTextError(tutor, pet, phone, description) {
    if(tutor.value <= 0 || pet.value <= 0 || description.value <= 0 || phone.length < 15) {
        alert("Por favor, preencha os campos corretamente")
    } else {
        scheduleNew()
        
        closeModal()
        window.location.reload()
        alert("Agendamento realizado com sucesso")
    }
}

form.addEventListener("submit", async (event) => {
    event.preventDefault()
    const phone = inputPhone.value

    inputsTextError(inputTutor, inputPet, phone, inputDescription)
});