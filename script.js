// let string = "";
// let buttons  = document.querySelectorAll('.button');


// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click' , (e)=>{
//         if(e.targer.innerHTML == '='){
//             string = eval(string);
//             document.querySelector('input').value = string;
//         }

        

    
//        else}
//         console.log(e.target)
//         string = string +new.target.innerHTML;
//         document.querySelector('input').value = string;
//     }


//     })
// })



// let string = "";
// let buttons = document.querySelectorAll('.button');

// Array.from(buttons).forEach((btn) => {
//     btn.addEventListener('click', (e) => {
        
//         let val = e.target.innerHTML; 
//         if(val == '='){
//             try { 
//                 string = eval(string);
//                 document.querySelector('.input').value = string;
//             } catch {
//                 document.querySelector('.input').value = "Error";
//             }
//         }
        
        
//         else if(val == 'C'){
//             string = "";
//             document.querySelector('.input').value = string;
//         }

        

        
//         else if(val == 'Sin'){
            
//             string = Math.sin(parseFloat(string) * Math.PI / 180).toString(); 
            
//             document.querySelector('.input').value = string;
//         }
//         else if(val == 'Cos'){
//             string = Math.cos(parseFloat(string) * Math.PI / 180).toString();
//             document.querySelector('.input').value = string;
//         }
//         else if(val == 'Tan'){
//             string = Math.tan(parseFloat(string) * Math.PI / 180).toString();
//             document.querySelector('.input').value = string;
//         }

        
//         else if(val == '√'){
//             string = Math.sqrt(parseFloat(string)).toString();
//             document.querySelector('.input').value = string;
//         }

//         else if(val == 'Log'){
//             string = Math.log10(parseFloat(string)).toString(); 
//             document.querySelector('.input').value = string;
//         }
        
         
//         else if(val == 'π'){
//             string = string + "3.1415926535"; // Pi ki value jod do
//             document.querySelector('.input').value = string;
//         }

        
//     else if(e.target.innerHTML == 'x!'){
//     let number = parseFloat(string);
//     let fact = 1;
//     for (let i = 1; i <= number; i++) {
//         fact = fact * i;
//     }
//     string = fact.toString();
//     document.querySelector('.input').value = string;
// }



let string = "";
let buttons = document.querySelectorAll('.button');
let memory = 0;      
let lastAnswer = 0;  

Array.from(buttons).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        
        let val = e.target.innerHTML; 

        try {
            
            if (val == '=') {
                
                if(string === "") return; 
                
                
                string = eval(string);
                
                
                lastAnswer = string;
                
                
                document.querySelector('.input').value = string; 

                // check karna hai yaha se
                
                
                string = string.toString();
            }

            
            else if (val == 'C') {
                string = "";
                document.querySelector('.input').value = string;
            }

            
            
            else if (val == 'Sin') {
                
                string = Math.sin(parseFloat(string) * Math.PI / 180).toString();
                document.querySelector('.input').value = string;
            }
            else if (val == 'Cos') {
                string = Math.cos(parseFloat(string) * Math.PI / 180).toString();
                document.querySelector('.input').value = string;
            }
            else if (val == 'Tan') {
                string = Math.tan(parseFloat(string) * Math.PI / 180).toString();
                document.querySelector('.input').value = string;
            }

            

            else if (val == '√') {
                
                string = Math.sqrt(parseFloat(string)).toString();
                document.querySelector('.input').value = string;
            }
            else if (val == 'Log') {
                
                string = Math.log10(parseFloat(string)).toString();
                document.querySelector('.input').value = string;
            }
            else if (val == 'In') {
                
                string = Math.log(parseFloat(string)).toString();
                document.querySelector('.input').value = string;
            }
            else if (val == 'x!') {
                
                let num = parseInt(string);
                let fact = 1;
                for (let i = 1; i <= num; i++) {
                    fact = fact * i;
                }
                string = fact.toString();
                document.querySelector('.input').value = string;
            }
            else if (val == 'EXP') {
                
                string = string + "**"; 
                document.querySelector('.input').value = string;
            }
            
            
            
            else if (val == 'π') {
                string = string + Math.PI.toString(); // 3.14159...
                document.querySelector('.input').value = string;
            }
            else if (val == 'e') {
                string = string + Math.E.toString(); // 2.718...
                document.querySelector('.input').value = string;
            }
            else if (val == 'Rad') {
                
                let deg = parseFloat(string);
                let rad = deg * (Math.PI / 180);
                string = rad.toString();
                document.querySelector('.input').value = string;
            }
            else if (val == 'Ans') {
                
                string = string + lastAnswer.toString();
                document.querySelector('.input').value = string;
            }

            
            
            else if (val == 'M+') {
                memory = memory + parseFloat(string);
                
                string = ""; 
                document.querySelector('.input').value = "Saved to Memory";
            }
            else if (val == 'M-') {
                memory = memory - parseFloat(string);
                string = "";
                document.querySelector('.input').value = "Removed from Memory";
            }

            
            
            else {
                console.log(e.target);
                string = string + val;
                document.querySelector('.input').value = string;
            }

        } catch (error) {
            
            document.querySelector('.input').value = "Error";
            setTimeout(() => { string = ""; document.querySelector('.input').value = ""; }, 1500);
        }
    })
})