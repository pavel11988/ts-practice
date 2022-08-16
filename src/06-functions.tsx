// Обязательно описываем параметры (аргументы) функции. ТС их не инферит.

const addFunctionFD = function (x: number, y:number): number {
    return x + y;
}

const addFunctionFE = (x: number , y: number):number => {
    return x + y;
}

// type func:
type AddFunc = (x: number, y:number ) => number;

const addFunc: AddFunc = (x, y) => {
    return x + y;
}

type LogFunction = (message: string) => void;

const Logger : LogFunction = (message) => {
    console.log("06-1, message:",message);
}

console.log("06-functions:",addFunctionFD(1,2), addFunctionFE(3,4), addFunc(5,6));
Logger("Hello, World!");

export {};

