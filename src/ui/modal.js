const content = document.querySelector("main")
const form = document.querySelector("form")
const btnNewSchedule = document.getElementById("btn")
const btnCloseModal = document.getElementById("btn-close")

export function closeModal() {
    form.classList.add("d-none")
    content.classList.remove("hide-main")
    btnNewSchedule.style.display = "block"
}

btnNewSchedule.addEventListener("click", () => {
    content.classList.add("hide-main")
    form.classList.remove("d-none")
    btnNewSchedule.style.display = "none"
})

btnCloseModal.addEventListener("click", () => {
    closeModal()
})