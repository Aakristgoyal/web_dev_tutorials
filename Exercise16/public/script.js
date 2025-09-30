document.getElementById("btn").addEventListener('click',async()=>{
    try{
        const response=await fetch('/generate-data');
        const info=await response.json();
        document.getElementById("output").textContent=JSON.stringify(info,null,2);
    }
    catch(err){
        console.error(err);
    }
});