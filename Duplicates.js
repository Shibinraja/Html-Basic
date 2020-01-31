// Arr = [1,2,2,1,3,3,1,2]

// obj = {};

// for(i = 0; i < Arr.length; i++) {
//     flag = 0;

//     for (j = 0; j < Arr.length; j++) {
//             if( Arr[i] == Arr[j]){
//                 flag++;
//                 obj[Arr[i]] = flag;
//             }
//         }
//     }
//     console.group(obj)

Arr = [1,2,2,1,3,3,1,2];

var count = {};

for(i=0; i<Arr.length; i++){
    count[Arr[i]] = 1 + (count[Arr[i]]||0);
}
console.log(count)

// Arr = [1,2,2,1,3,3,1,2];

// var count = {};
// Arr.reduce((acc,current)=>{
//     count[Arr[current]] = 1 + (count[Arr[current]]||0);
// },{})
// console.log(count)