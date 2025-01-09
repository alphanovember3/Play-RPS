
function getdata(data){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            
        console.log(data);
        resolve("success");
        },4000);
    })

}


async function ayush(){

    await getdata(1);
    getdata(2);

}


ayush();