let fac = 1, i = 1;
while(i < 11){
    fac *= i;
    i++;
    if (i>11)
        break
}
console.log("El factorial del 10! = "+fac);