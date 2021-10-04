window.addEventListener('DOMContentLoaded', () => {

    const board = document.querySelector('#board'),
          NUMBER_OF_CIRCLES = 99;

    const colors = ['#270db8', '#074ac5', '#1a99c0', '#4dd2fa', '#3f8f8f', '#09fafa', '#753370', '#ec11da', '#ec11b5', '#ec1165'];

    function setColor(elem) {
        const color = getRandomColor();
        elem.style.boxShadow = `0 0 2px ${color}, 0 0 15px ${color}`;
        elem.style.backgroundColor = color;
    }

    function removeColor(elem) {
        elem.style.backgroundColor = '#1d1d1d';
        elem.style.boxShadow = `0 0 2px #000`;
    }

    function getRandomColor() {
        const index = Math.floor(Math.random() * colors.length);
        console.log();
        return colors[index];
    }
    
    
    for (let i = 0; i < NUMBER_OF_CIRCLES; i++) {
        
        const circle = document.createElement('div');
        circle.classList.add('circle');
    
        board.append(circle);
    
        circle.addEventListener('mouseover', () =>
            setColor(circle)); 
    
        circle.addEventListener('mouseleave', () =>
            removeColor(circle)); 
    }
});

