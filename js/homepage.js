

document.addEventListener("DOMContentLoaded", function() {
    let bars = document.querySelectorAll(".progress-bar");
    bars.forEach(bar => {
      let percent = bar.getAttribute("data-percent");
      bar.style.width = `${percent}%`;
    });
  });
  














let funnyButton = document.querySelector('#funnyButton');
let isMoving = false;  
let isAlternateImageShown = false;  
let defaultImage = funnyButton.src;

funnyButton.addEventListener('mousemove', function(event) {
    if(isMoving) return;


    if(isAlternateImageShown === false && this.src.includes('Angry')) {
        this.src = defaultImage;
    }

    let buttonRect = this.getBoundingClientRect();
    let distanceX = Math.abs(buttonRect.left + buttonRect.width / 2 - event.clientX);
    let distanceY = Math.abs(buttonRect.top + buttonRect.height / 2 - event.clientY);

    let closeEnough = 50;

    if (distanceX < closeEnough && distanceY < closeEnough) {
        isMoving = true; 
        let maxX = 550;
        let maxY = 250;
        let randomX = (Math.random() - 0.5) * maxX;
        let randomY = (Math.random() - 0.5) * maxY;
        this.style.transform = `translate(${randomX}px, ${randomY}px)`;
        



        setTimeout(() => {
            isMoving = false;
        }, 690); 
    }
});


funnyButton.addEventListener('click', function() {
    let originalSrc = this.src;
    let alternateSrc = this.getAttribute('data-alternate-image');
    isAlternateImageShown = true;

    this.src = alternateSrc;
    setTimeout(() => {
        this.src = originalSrc;
        isAlternateImageShown = false;
    }, 690);
});
























  function toggleDetails(element) {
    const details = element.nextElementSibling;
    details.classList.toggle('hidden');
}