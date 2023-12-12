
document.getElementById('page1').hidden=!true;
document.getElementById('page2').hidden=true;
document.getElementById('page3').hidden=true;
document.getElementById('page4').hidden=true;
document.getElementById('page42').hidden=true;
document.getElementById('page43').hidden=true;
document.getElementById('page44').hidden=true;
document.getElementById('page5').hidden=true;

function changePage1(){
    document.getElementById('page1').hidden=true;
    document.getElementById('page2').hidden=true;
    document.getElementById('page3').hidden=true;
    document.getElementById('page4').hidden=!true;
    document.getElementById('page42').hidden=true;
    document.getElementById('page43').hidden=true;
    document.getElementById('page44').hidden=true;
    document.getElementById('page5').hidden=true;
}
function changePage2(){
    document.getElementById('page1').hidden=true;
    document.getElementById('page2').hidden=true;
    document.getElementById('page3').hidden=!true;
    document.getElementById('page4').hidden=true;
    document.getElementById('page42').hidden=true;
    document.getElementById('page43').hidden=true;
    document.getElementById('page44').hidden=true;
    document.getElementById('page5').hidden=true;
}
function changePage3(){
    document.getElementById('page1').hidden=true;
    document.getElementById('page2').hidden=true;
    document.getElementById('page3').hidden=true;
    document.getElementById('page4').hidden=true;
    document.getElementById('page42').hidden=true;
    document.getElementById('page43').hidden=true;
    document.getElementById('page44').hidden=true;
    document.getElementById('page5').hidden=!true;
}
function changePage41(){
        document.getElementById('page1').hidden=true;
        document.getElementById('page2').hidden=true;
        document.getElementById('page3').hidden=true;
        document.getElementById('page4').hidden=!true;
        document.getElementById('page42').hidden=true;
        document.getElementById('page43').hidden=true;
        document.getElementById('page44').hidden=true;
        document.getElementById('page5').hidden=true;
    }

    function changePage42(){
        document.getElementById('page1').hidden=true;
        document.getElementById('page2').hidden=true;
        document.getElementById('page3').hidden=true;
        document.getElementById('page4').hidden=true;
        document.getElementById('page42').hidden=!true;
        document.getElementById('page43').hidden=true;
        document.getElementById('page44').hidden=true;
        document.getElementById('page5').hidden=true;
    }
    function changePage43(){
        document.getElementById('page1').hidden=true;
        document.getElementById('page2').hidden=true;
        document.getElementById('page3').hidden=true;
        document.getElementById('page4').hidden=true;
        document.getElementById('page42').hidden=true;
        document.getElementById('page43').hidden=!true;
        document.getElementById('page44').hidden=true;
        document.getElementById('page5').hidden=true;
    }
    function changePage44(){
        document.getElementById('page1').hidden=true;
        document.getElementById('page2').hidden=true;
        document.getElementById('page3').hidden=true;
        document.getElementById('page4').hidden=true;
        document.getElementById('page42').hidden=true;
        document.getElementById('page43').hidden=true;
        document.getElementById('page44').hidden=!true;
        document.getElementById('page5').hidden=true;
    }
    function goToHome(){
        document.getElementById('page1').hidden=!true;
        document.getElementById('page2').hidden=true;
        document.getElementById('page3').hidden=true;
        document.getElementById('page4').hidden=true;
        document.getElementById('page42').hidden=true;
        document.getElementById('page43').hidden=true;
        document.getElementById('page44').hidden=true;
        document.getElementById('page5').hidden=true;
    }
    
    function changOpacity(){
        let avs=document.getElementsByClassName("avator");
        console.log(avs.length);
        console.log(avs[2]);

        for(let i=0; i<10; i++){
            console.log(i)
            if(i != 2){
                avs[i].style.opacity=0.5;
            }
        }
        
    }

const socket = io("https://boomserver.pick-up.services/", {
    transports: ["websocket"],
})
    socket.on("connect", () => {
        console.log('this is your ID: ', socket.id);
    });
    function prompt(){
     
        let input= document.getElementById("input_main").value;
        console.log(input);
      
        socket.emit("prompt", input)
        document.getElementById('page1').hidden=true;
        document.getElementById('page2').hidden=!true;
        document.getElementById('page3').hidden=true;
        document.getElementById('page4').hidden=true;
        document.getElementById('page42').hidden=true;
        document.getElementById('page43').hidden=true;
        document.getElementById('page44').hidden=true;
        document.getElementById('page5').hidden=true;
        
    }
    socket.on("promptresult", (data)=>{
        console.log("this is promt from server", data);
        changePage2();
    document.getElementById("1st-Person").textContent=data['1st-Person']['Story Lines']
    document.getElementById("Journalistic").textContent=data['Journalistic']['Story Lines']
    document.getElementById("Magical").textContent=data['Magical']['Story Lines']
    document.getElementById("Minimal").textContent=data['Minimal']['Story Lines']
    document.getElementById("Sci-Fi").textContent=data['Sci-Fi']['Story Lines']
    });
    function cat(category){
        socket.emit("cat", category)
         document.getElementById('page1').hidden=true;
         document.getElementById('page2').hidden=!true;
         document.getElementById('page3').hidden=true;
         document.getElementById('page4').hidden=true;
         document.getElementById('page42').hidden=true;
         document.getElementById('page43').hidden=true;
         document.getElementById('page44').hidden=true;
         document.getElementById('page5').hidden=true;
         
     }
    
    socket.on("school", (data)=>{
        console.log("this is promt from server", data);
        
     document.getElementById("Deutsch_Lehrer").textContent=data['Deutsch_Lehrer']
     document.getElementById("Geographielehrer").textContent=data['Geographielehrer']
    document.getElementById("Geschichtslehrer").textContent=data['Geschichtslehrer']
     document.getElementById("Sozialkunde").textContent=data['Sozialkunde']
    document.getElementById('page1').hidden=true;
    document.getElementById('page2').hidden=true;
    document.getElementById('page3').hidden=true;
    document.getElementById('page4').hidden=!true;
    document.getElementById('page42').hidden=true;
    document.getElementById('page43').hidden=true;
    document.getElementById('page44').hidden=true;
    document.getElementById('page5').hidden=true;
    });
    function teachers(teacher){
        socket.emit("teacher", teacher)
         document.getElementById('page1').hidden=true;
         document.getElementById('page2').hidden=!true;
         document.getElementById('page3').hidden=true;
         document.getElementById('page4').hidden=true;
         document.getElementById('page42').hidden=true;
         document.getElementById('page43').hidden=true;
         document.getElementById('page44').hidden=true;
         document.getElementById('page5').hidden=!true;
         
     }
  
    socket.on("results", (data)=>{
        console.log("this is promt from server", data);
        
     document.getElementById("result").textContent=data

    document.getElementById('page1').hidden=true;
    document.getElementById('page2').hidden=true;
    document.getElementById('page3').hidden=true;
    document.getElementById('page4').hidden=true;
    document.getElementById('page42').hidden=true;
    document.getElementById('page43').hidden=true;
    document.getElementById('page44').hidden=true;
    document.getElementById('page5').hidden=!true;
    });

   