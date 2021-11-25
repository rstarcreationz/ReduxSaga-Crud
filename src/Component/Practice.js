
import React, { useEffect } from "react";

const Practice = ( ) => {

    

function getSumPair(array){
    for(let number of array){
        for(let j=1; j<array.length; j++)
        if(number + array[j] === 0){
            return [number, array[j]];
        }
    }
}

function getNewPairs(array){
    let left = 0;
    let right = array.length - 1;

    while(left < right){
       let sum = array[left]+array[right];
        if(sum === 0){
            return [array[left], array[right]];
        }else if(sum > 0){
            right--;
        }else{
            left++;
        }
    }
}

function isAnagram(string1, string2){
    if(string1.length != string2.length){
        return false;
    }
    var counter = {}
    for (let letter of string1){
        counter[letter] = (counter[letter] || 0) + 1
        // console.log(counter)
    }

    for(let item of string2){
        if(!counter[item]){
            return false;
        }
        counter[item] -=1
    }
    return true

}

function countUnique(array){
    if(array.length > 0){
        let i=0;
        for(let j=1; j<array.length; j++){
            if(array[i]!==array[j]){
                i++;
                array[i] = array[j];
            }
        }
        return i+1
    }else{
        throw new Error("erray is empty")
    }
}
const unique = countUnique([1,1,2,2,3,4,4,5,6,7,8,8])


const anagram = isAnagram("hello", "llheo");
// console.log("anagram===>>>", unique)

const result =  getNewPairs([-5,-4,-3,-2, 0,2,4,6,8])
// console.log("result====>>>>>>>",result)

function arrayFun(arrays){
    const data =  arrays.reduceRight((a, b)=>{
        return a + b
    });
    // console.log(arrays)
    // console.log(data)
}

const res = arrayFun(["a","b","c","d"]);

function is_array (hello){
    var array = hello.slice(1, 3)
    // console.log(array)
}
is_array([1, 2, 4, 0])


function N_array(array, n){
    if(array === null){
        return 0;
    }
    if(n === null){
        return array[n];
    }
    if(n > 0){
        return array.slice(0, n)
    }
}
const check =  N_array([7,9,0,-2], 3)
// console.log(check)

////
function last_array(array, n){
    if(array === null){
        return 0;
    }
    if(n === null){
        return array[n];
    }
    if(n === null)
        return array[array.length - 1];
        return array.slice(Math.max(array.length - n, 0));  
    
}
const checklast_array =  last_array([7,9,0,-2], 6)
// console.log(checklast_array)

function myColor(hii){
    return hii.join();
    // return hii.join("+");
}

const join = myColor(["Red", "Green", "White", "Black"]);
// console.log(join)

function evenNum(ddd){
    let str = ddd
    const result = [str[0]];
  
    for(let x=1; x>ddd.length; ddd++){
        if((str[x-1]%2 === 0) && (str[x]%2 === 0)){
            return result.push('-', str[x])
        }
    }
    console.log(result)
}

const resdata = evenNum("025468");
console.log(resdata)


// var arr1=[-3,8,7,6,5,-4,3,2,1];
// var arr2=[];
// var min=arr1[0];
// var pos;
// var max=arr1[0];
// for (i=0; i<arr1.length; i++)
// {
//         if (max<arr1[i]) max=arr1[i];
//         console.log("max",max)
// }

// for (var i=0;i<arr1.length;i++)
// {
//         for (var j=0;j<arr1.length;j++)
//         {
//                 if (arr1[j]!="x")
//                 {
//                         if (min>arr1[j]) 
//                         {
//                                 min=arr1[j];
//                                 pos=j;
//                                 console.log("min", min)
//                                 console.log("pos", pos)
//                         }
//                 }
//         }
//         arr2[i]=min;
//         arr1[pos]="x";
//         min=max;
//         console.log("arr2", arr2)
//         console.log("arr1", arr1)
//         console.log("min2222", min)
// }
// console.log(arr2);

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr1[i];
                  console.log("mf", mf)
                console.log("item", item)
                }
        }
        m=0;
}
console.log(item+" ( " +mf +" times ) ") ;

var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

for(var i in a){
    console.log("row" , i)
    for(var j in a[i]){
        console.log(" " , a[i][j])
    }
}

var sumarray = [1,2,3,4,5,6];
let s= 0;
let p = 1;
for (let i =0; i < sumarray.length; i += 1){
    s += sumarray[i];
    p *= sumarray[i];
}
console.log( s + "---" + p)

    return (
        <>
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-6">
                        <h5 className="text-center">Practice page</h5>
                </div>
            </div>
        </div>
        </>
    )
}

export default Practice;