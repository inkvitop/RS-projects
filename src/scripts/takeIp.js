import { takeGeolocation } from "./takeGeolocation";
import { takePlaceByCoordinates } from "./takePlaceByName";

const ipLight = document.querySelector(`.server-status-IP-light`)

export function takeIpInfo(lang) {
      
            fetch('//ip-api.com/json?fields=status,message,country,city,lat,lon')
            .then(res => res.json())
            .then(json => {
            if(json.status !== 'success'){
                  ipLight.style.backgroundColor = `red`
            }else {
                  return json
            }
            })
            .then(json => {
            ipLight.style.backgroundColor = `green`
            let coordinateLat = json.lat;
            let coordinateLon = json.lon;
           
            takePlaceByCoordinates( lang, coordinateLat, coordinateLon)
            })
            .catch(() => {
                  takeGeolocation()
            })
      } 
            
      
      

