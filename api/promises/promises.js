const promiseone =new Promise(function(resolve,reject) 
    {
        setTimeout(function(){
            console.log("Asunc task completed")

            resolve();

        }, 1000)

    }
);
promiseone.then(function(){
    console.log("Promises cosumed");
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asyn two function")
        resolve()
    },1000)
}).then(function(){
    console.log("asyn two completed")
})


const promisethird=new Promise(function(resolve,reject){
    setTimeout(function(){

        resolve({
            name:"AB",
            age:"20"
        })

    },1000)
})
promisethird.then(function(user){
    console.log(user)
})



const promisefoth=new Promise(function(resolve,reject){
    setTimeout(function(){
   let eror =false;
   if(!eror){
    resolve({
        username:"ab",
        password:"rai"
    })
   }else{
    reject('something  went wrong')
   }

    },1000)
})
promisefoth.then(function(user){
    console.log(user)
    return(user.password)
}).then((userage)=>{
console.log(userage)
}).catch((eror)=>{
console.log(eror)
}).finally(()=>console.log("proises compete succefully or unsuccenfully"))


