function getArea (){
    const baseInput = document.getElementById('base-input');
    const baseText = baseInput.value;
    const base = parseFloat(baseText);

    const heightInput = document.getElementById('height-input');
    const heightText = heightInput.value ;
    const height = parseFloat(heightText);

    const area = 0.5*base*height;
    

    const resultArea = document.getElementById('result');
    resultArea.innerText = area ;

}