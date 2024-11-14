

function Button(){
    // let count =0;
    // const clickhandel = (name)=>{
       
    //     if(count<3){
    //         count++
    //         console.log(`${name} you licked me ${count} times`)
    //     }
    //     else{
    //         console.log(`${name} please stop licking me`)
    //     }
    // }
    const clickhandel = (e) => e.target.textcontent="OUCH!!";
return(
    <button onClick={(e) => clickhandel(e)}>Click me</button>
)
}



export default Button