let dia = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

for(let i = 1; i <= dia.length; i++ ){
    if(i == 7){
        alert(`El día en posición ${i} es el 7 :D`);
        console.log(`El día en posición ${i} es el 7 :D`)
    }
    if(i%2 === 0){
        console.log(` El día en posición ${i}, es número par`)
    } else{
        console.log(` El día en posición ${i}, es número impar`)
    }
}