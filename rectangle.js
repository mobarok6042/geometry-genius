function getRectangle(){
    const widthInput = document.getElementById('width-input');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);

    const lengthInput = document.getElementById('length-input');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText);

    const rectangle = width*length ;

    const field = document.getElementById('rect');
    field.innerText = rectangle;
}