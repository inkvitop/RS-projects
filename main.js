

const inputs = document.querySelectorAll('.options-block-input');
console.log(inputs)

function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
      // const check = document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
      // console.log(check)


}

inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))