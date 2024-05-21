// let s = 's2tri1n4adklse,sksdfjksadfjdskjfl;dfaoek;aldka;lfdjaskldfdfj;lasdfsalkd2g';
// console.log(s,'<<>>', s.split('').reverse().join(''))

// let count = 0;
// s.split('').forEach((item)=>{
//     if(!isNaN(Number(item))){
//         count++
//     }
// })
// console.log(count)

// let sum = 0;
// s.split('').forEach((item)=>{
//     if(!isNaN(Number(item))){
//         sum+=Number(item)
//     }
// })
// console.log(sum)

// let s = 's2tri1n4adklse,sksdfjksadfjdskjfl;dfaoek;aldka;lfdjaskldfdfj;lasdfsalkd2g';

// const result = {}

// s.split('').forEach((item)=>{
//     if(result[item]){
//         result[item] = result[item]+1;
//     }else{
//         result[item] = 1
//     }
// })
// console.log('Result', result)

// let s1 = 'JavaScript'
// let s2 = 'Javascript!'

// console.log("Output", findDiff(s1,s2))

// function findDiff(s1, s2) {
// let maxLenght = Math.max(s1.length,s2.length)
// const output = []
// for(let x=0;x<=maxLenght; x++){
//     if(s1[x]!=s2[x]){
//         output.push({
//             first: s1[x],
//             second: s2[x],
//             index : x
//         })
//     }
// }
// return output}



// const s1 = 'calm'
// const s2 = 'clam!'

// function anagrams(s1, s2){
//     output = false;
//     for (let index = 0; index < s1.length; index++) {
//         if(s1.includes(s2[index])){
//             output = true
//         }else{
//             output =  false
//         }
//     }
//     if(s1.length === s2.length){
//         output = true
//     }else{
//         output = false
//     }

//     return output;
// }

// console.log("ot", anagrams(s1,s2))




// function countCV(str){
//     const vowels = 'aeiou';
//     const obj = {
//         C : 0,
//         V : 0
//     }
//     for(let x = 0; x<str.length; x++){
//         if(vowels.includes(str[x])){
//             obj['V'] += 1 
//         }else{
//             obj['C'] += 1
//         }
//     }
//     return obj;
// }


// console.log("out", countCV('aeiou'))


// function getArr(arr){
//     console.log(arr.sort())
//     console.log(arr.sort((a,b)=>a-b))
//     console.log(arr.sort((a,b)=>b-a))
// }

// getArr([1,2,4,6,7,10,2,20,30,3,35,2,2])


// function getArr(arr){
//     return Math.max(...arr)
// }

// console.log("out", getArr([1,2,4,6,7,10,2,20,30,3,35,2,2]))


// function rec(x){
//     if(x == 1){
//         return 1
//     }else{
//         return x * rec(x-1)
//     }
// }

// console.log(rec(4))


const arr = [1, "d", 3]
console.log(arr)


TransformStreamDefaultController // 2nd commit

third = response // 3rd commit
third = response // 4th commit
third = response // 4th commit
third = response // 4th commit