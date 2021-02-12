import { setBackgroundImg } from "./changeBackground";

const bgRefreshButton = document.querySelector(`.control-section-refresh-button`)

bgRefreshButton.addEventListener('click', () => {
      setBackgroundImg()
})