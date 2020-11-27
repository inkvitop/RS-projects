

// Подсвечивание активной секции
document.addEventListener('scroll', onScroll);

function onScroll(event) {
      const currentPosition = window.scrollY;
      console.log(currentPosition);
      const sections = document.querySelectorAll('main>section');
      console.log(sections);

      const links = document.querySelectorAll('.header__nav-buttons' && '.nav-buttons');

      sections.forEach((el) => {
            if(el.offsetTop <= currentPosition + 95 && (el.offsetHeight + el.offsetTop) > currentPosition + 95) {
                  links.forEach((a) => {
                        a.classList.remove('active');
                        if(el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                              a.classList.add('active');
                        }
                  })
            }
      })
      

}

// Переход по якорям 
const anchors = document.querySelectorAll('.header-section__nav a[href*="#"]')

for (let anchor of anchors) {
      anchor.addEventListener('click', function(event) {
            event.preventDefault();
            const blockId = anchor.getAttribute('href')
            document.querySelector('' + blockId).scrollIntoView({
                  behavior: 'smooth',
                  block: 'start' 
            })
      })
      
}