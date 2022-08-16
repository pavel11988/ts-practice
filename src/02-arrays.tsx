const array1: number[]  = [1,2,3,4]; // auto inf
const array2: Array<number> = [5,6,7,8];
const array3: readonly number[] = [9,1,2,3];
const array4: ReadonlyArray<number> = [4,5,6,7];
const array5: [number, number] = [8,9]; // tuple


console.log("02-arrays:",array1, array2, array3, array4, array5);

export {}