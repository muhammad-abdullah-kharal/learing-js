const isuserlogged=true;



// if (2=="2"){
//     console.log("executed")
// }
// if (2==="2"){
//     console.log("executed")
// }

// const amount = 5000;
// if (amount>1000)console.log("you have more money "),(console.log("i think it would be not good"));


//                                            truthy values in js

// const user="ab@gmail.com";
// if(user){
//     console.log("user has value")
// }else{
//     console.log("user has no value")
// }





        //                                      for of loop

        // const number=[1,3,4,5,6,7,8];

        // for (const item of number) {
        //     console.log(item);

        // }

        // const str="hello world";

        // for (const char of str) {
        //     if(char===' '){
        //         continue;
        //     }
        //     console.log(char);  
        // }





        //     Map


        // const map =new Map();
        // map.set("Pk","Pakistan")
        // map.set("Pa","Phalistine")

        // for (const [key,values] of map) {
        //     console.log(key + "  :  " + values);
        // }

        const myobj={
            name:"rayan",
            age:22,
            hobby:"coding"
        }

        //               this not work because objects are not iterable
        // for (const [key,value] of object) {
        //                 console.log(key + "  :  " + values);

        // }


        // for (const key in myobj) {

        //     // console.log(key);
        //     console.log(` ${key} : ${myobj[key]}`);
            
        // }


        // const programmoinlang=["python","js","c++","java","ruby"];
        // for (const key in programmoinlang) {
        //     // console.log(key)
        //     console.log(programmoinlang[key]);
        // }


        const fruits=["apple","banana","grapes","mango"];
     
        // fruits.forEach(function(item){
        //     console.log(item);
        // });

    //                            arrow function in foreach loop

    // fruits.forEach(item=>{
    //     console.log(item)
    // })

    // const coding =[
    //     {
    //         langnae :'jvascript',
    //         difficulty:'hard'
    //     },
    //     {
    //         langnae :'python',
    //         difficulty:'easy'
    //     },
    //     {
    //         langnae :'c++',
    //         difficulty:'medium'
    //     }
    // ]

    // coding.forEach((item)=>{
    //     console.log(item.langnae);
    // })



    // as for eacxh not return any value so thats why we use filter

    const number = [1,2,3,4,5,6,7,8,9];

   const even= number.filter((item)=>item%2===0);

   console.log(even)
