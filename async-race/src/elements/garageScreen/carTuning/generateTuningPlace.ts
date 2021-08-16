export const generateTuningPlace = (parent:Element):void => {
  const tuningWrapper = document.createElement('div');
  tuningWrapper.id = 'tuning-wrapper';
  tuningWrapper.classList.add('tuning-wrapper');
  tuningWrapper.classList.add('mute-update');
  parent.appendChild(tuningWrapper);

  //  color input
  const tuningColorInput = document.createElement('input');
  tuningColorInput.type = 'color';
  tuningColorInput.id = 'tuning-color-input';
  tuningColorInput.classList.add('tuning-wrapper-color');
  tuningColorInput.value = '#ffffff';
  tuningWrapper.appendChild(tuningColorInput);

  // name input
  const tuningNameInput = document.createElement('input');
  tuningNameInput.type = 'text';
  tuningNameInput.id = 'tuning-name-input';
  tuningNameInput.classList.add('tuning-wrapper-name');
  tuningWrapper.appendChild(tuningNameInput);

  // update btn
  const updateBtn = document.createElement('div');
  updateBtn.id = 'tuning-update-btn';
  updateBtn.classList.add('tuning-wrapper-update');
  updateBtn.textContent = 'UPDATE';
  tuningWrapper.appendChild(updateBtn);
};
