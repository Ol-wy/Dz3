function number() {
    let num1 = Number(prompt("Введите первое число"));
    let num2 = prompt("Введите второе число");
    if (num1 < num2) {
        alert("Первое число меньше")
    } else if (num1 > num2) {
        alert("Второе число меньше")
    }
}

number()

//________________________________________

function twoMass() {
    let array1 = prompt("Введите первое слово");
    let array2 = prompt("Введите второе слово")
    if (array1.length === array2.length) {
        alert("Равны")
    } else if (array1.length < array2.length) {
        alert ("Второе длиннее")
    } else if (array1.length > array2.length){
        alert ("Первое длиннее")
    }
}

twoMass();

//_________________________________________

function contChar() {
    let mass = prompt("Введите слово")
    console.log("Слово " + mass + " имеет длину " + mass.length);
}

contChar()

//___________________________________________