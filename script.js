let num = 266219;
    num = num.toString().split('').reduce((prod, current) => prod * parseInt(current), 1);
    console.log(num);

let num2 = num**3;  
    console.log(num2);
    console.log( String(num2).substring(0, 2) );
