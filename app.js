document.addEventListener('mousemove', (el) => {
    /**Set a MATH function to r so it corrdiantes with the x grid of the page */
    const r = Math.round(el.pageX * 255 / window.innerWidth);
    const b = Math.round(el.pageY * 255 / window.innerHeight);
    const rgbColor = `rgb(${r}, 0 ,${b})`;
    document.body.style.backgroundColor = rgbColor;

    const bodyText = document.querySelector('body');
    bodyText.innerText = 'MOVE YOUR CURSOR';

});



document.addEventListener('mouseout', (el) => {
    const bodyText = document.querySelector('body');
    bodyText.innerText = 'COME BACK 🎷🐛';
});

