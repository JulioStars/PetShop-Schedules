import {apiConfig} from "../../services/api-config.js";

const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

export async function loadSchedule() {
    try {
        const response = await fetch(`${apiConfig.baseURl}/schedules`);
        const data = await response.json();

        data.forEach(function(schedule) {
            const tutorValue = schedule.tutor;
            const petValue = schedule.pet;
            const descriptionValue = schedule.description;
            const timeValue = schedule.time;
        
            const client = document.createElement("li");
            client.classList.add("client");
            client.setAttribute("data-id", schedule.id);
        
            const strong = document.createElement("strong");
            strong.innerHTML = timeValue;
            client.append(strong);
        
            const namePet = document.createElement("nameAnimal");
            namePet.innerHTML = petValue;
            client.append(namePet);
        
            const nameTutor = document.createElement("namePerson");
            nameTutor.innerHTML = ` / ${tutorValue}`;
            namePet.append(nameTutor);
        
            const description = document.createElement("span");
            description.innerHTML = descriptionValue;
            client.append(description);
        
            const link = document.createElement("a");
            link.innerHTML = "Remover agendamento";
            link.classList.add("delete-schedule");
            client.append(link)
        
            const hour = Number(timeValue.slice(0, 2));
        
            if(hour >= 9 && hour < 13) {
                periodMorning.append(client)
            } else if (hour >= 12 && hour < 19) {
                periodAfternoon.append(client)
            } else (
                periodNight.append(client)
            )
        })

    } catch (error) {
        console.log(error)
        alert("Erro ao buscar os dados")
    }
}

loadSchedule();