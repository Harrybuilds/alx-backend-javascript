export const concatArrays = (array1, array2, string) => [..array1, ...array2, ...string]



console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));
