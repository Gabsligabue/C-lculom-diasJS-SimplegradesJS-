alert("Pronto para saber se passou no concurso?")

const students = [
    { 
        name: 'Pedro',
        n1: 7.5,
        n2: 6.5,
    },

    {
        name: 'Maria',
        n1: 10,
        n2: 9.5,
    },

    {
        name: 'José',
        n1: 4,
        n2: 8.5,
    },

    {
        name: 'Jesus',
        n1: 5,
        n2: 7,
    },

    {
        name: 'Judas',
        n1: 10,
        n2: 10,
    },
];


function average(student) {
    const firstExam = Number(student.n1);
    const secondExam = Number(student.n2);
    return ((firstExam + secondExam) / 2).toFixed(1);
}


for (let i = 0; i < students.length; i++) {

    const calc = average(students[i]);
    
    if (calc >= 7){
        alert(`Parabéns, ${students[i].name}! Sua média foi ${calc} e você passou!`);
    }else{
        alert(`Sinto muito, ${students[i].name}. Sua média foi ${calc} e você não passou.`);
    }
}