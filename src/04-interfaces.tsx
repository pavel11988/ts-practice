// object of infinitive keys with values;
interface IEmpolyees {
    [key:string]:number;
}

const employees: IEmpolyees= {
    'firts': 1,
    'second': 2,
    'third': 3
}


interface IUser {
    name:string;
    age?: number;
}

const user: IUser = {
    name: 'Pablo',
}

console.log("04-interfaces:", employees, user);

export {}