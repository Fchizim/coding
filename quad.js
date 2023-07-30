    
function calculate(){
    let a = document.getElementById('inputa').value
    let b = document.getElementById('inputb').value
    let c = document.getElementById('inputc').value
    a = Number(a)
    b = Number(b)
    c = Number(c)
    // const x1 = (-b - Math.sqrt((b*b) -4 * a * c))/(2 * a)
    // const x2 = (-b + Math.sqrt((b*b) -4 * a * c))/(2 * a)
    //     document.getElementById('answer').innerHTML = (x1, x2)

    if (a == 0) {
        document.getElementById("answer").innerHTML= `cannot equal zero!`
    } else if (isNaN(a)) {
        document.getElementById("answer").innerHTML= `must be a number!`
    } else if (isNaN(b)) {
        document.getElementById("answer").innerHTML= `must be a number!`
    } else if (isNaN(c)) {
        document.getElementById("answer").innerHTML= `must be a number!`
    } else {
        res = (b*b) - 4 * a * c;
        if(res < 0){
            alert('error');
        }else{
            const x1 = ((-b - Math.sqrt(res))/(2 * a));
            const x2 = ((-b + Math.sqrt(res))/(2 * a));
            document.getElementById('answer').innerHTML = (`X = ${x1} and X = ${x2}`);
            
        }
        
        
    }

}

    
    
    
