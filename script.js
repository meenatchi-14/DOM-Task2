const result=document.querySelector("#heading")
var v;
const button=document.querySelector("#btn");

    // button.addEventListener("click", (e)=> { 
    //  setTimeout(() => { 
    //            console.log("Happy Independence Day");
    //          }, 2000);
    //     console.log("10");
    //     console.log("9");
       
    // });
    button.addEventListener("click", (e)=> { 
       
            const call=(values,cals=()=>{})=>{
                console.log(values);
                result.innerHTML = values;
                cals();
                };
                
            call(10,
                ()=>call(9,
                    ()=>call(8,
                        ()=>call(7,
                            ()=>call(6,
                                ()=>call(5,
                                    ()=>call(4,
                                       ()=>call(3,
                                           ()=>call(2,
                                               ()=>call(1,
                                                   
                                                       ()=>{
                                                            call("Happy Independence Day");
                                                            }
                                                            
                                    
                                                        )
                                                    )
                                                )
                                            )
                                        ) 
                                    )
                                )
                            )
                        )
                    );   
       });
    
      
       
    
        
    
    
       

       



