//@author Utkarsh Chaudhary
//Creation of set

let newSet=new Set();
console.log(newSet.size);

let arr=[1,2,3,4,5,6]
console.log(arr);
let arrSet=new Set(arr)
console.log(arrSet);

// Add
arrSet.add(9);
arrSet.add(8)
console.log(arrSet);

//Using Has
console.log(arrSet.has(8));

//clear

arrSet.clear()
console.log(arrSet);

//Set Defference

function setDefference(setA,setB){
    return new Set([...setA].filter(el=>!setB.has(el)))
}
let res=setDefference(newSet,arrSet)
console.log(res);
