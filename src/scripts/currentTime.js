import { weatherJson } from "./weatherApi";


const time = document.querySelector(`.date-section-time`)

export function setTime() {
      setInterval(() => {
            time.textContent = new Date().toLocaleTimeString('ru', { timeZone: `${weatherJson.location.tz_id}`});
      }, 1000);
}