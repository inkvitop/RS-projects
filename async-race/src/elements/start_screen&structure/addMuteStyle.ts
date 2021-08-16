export function muteIdStartButtons(id:number, status:string):void {
  const idStartBtn = document.getElementById(`${id}-start-id`);
  const massStartBtn = document.getElementById('mass-start');

  if (status === 'mute') {
    idStartBtn?.classList.add('mute-button');
    massStartBtn?.classList.add('mute-button');
  } else if (status === 'unmute') {
    idStartBtn?.classList.remove('mute-button');
    massStartBtn?.classList.remove('mute-button');
  }
}
