const student = [
    {id: 12, name: `saidul`},
    {id: 20, name:`shohag`},
    {id: 31, name:`raju`},
    {id: 41, name:`mahbub`}
];

const names = student.map( x => x.name);
console.log(names);

const ids = student.map( x => x.id);
console.log(ids);

const bigger = student.filter(x => x.id > 30);
console.log(bigger);

// loop diye amra jei kaj kortam ta amra map diye easy bavhe korlam