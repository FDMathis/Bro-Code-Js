
let grades = [100, 50, 90, 60, 80,70]

grades = grades.sort(descendingSort);

grades.forEach(print);

function descendingSort (x, y){
    return y - x
}

function print (element){
    console.log(element)
}

function ascendingSort (x, y){
    return x - y;
}

grades = grades.sort(ascendingSort);
grades.forEach(print);