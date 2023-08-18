//use rgb for color selection
// color change function

function changeBg(){
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);

    //combine the 3 colors to form a bg color
    let color = 'rgb(' + red +',' + green + ',' + blue +')'
    console.log(color);
    document.getElementById('body').style.background = color;
    document.getElementById('color').textContent = color

}
