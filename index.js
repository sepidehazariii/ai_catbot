
function changPage(pagex){
    if(document.getElementById(pagex)=pagex){
        document
    }
}
function changePage2(){
    document.getElementById('page1').hidden=true;
    document.getElementById('page2').hidden=true;
    document.getElementById('page3').hidden=!true;
    document.getElementById('page4').hidden=true;
    document.getElementById('page4.2').hidden=true;
    document.getElementById('page4.3').hidden=true;
    document.getElementById('page4.4').hidden=true;
    document.getElementById('page5').hidden=true;
}
function changePage1(){
    document.getElementById('page1').hidden=true;
    document.getElementById('page2').hidden=true;
    document.getElementById('page3').hidden=true;
    document.getElementById('page4').hidden=!true;
    document.getElementById('page4.2').hidden=true;
    document.getElementById('page4.3').hidden=true;
    document.getElementById('page4.4').hidden=true;
    document.getElementById('page5').hidden=true;
}
function changePage3(){
    document.getElementById('page1').hidden=true;
    document.getElementById('page2').hidden=true;
    document.getElementById('page3').hidden=true;
    document.getElementById('page4').hidden=true;
    document.getElementById('page4.2').hidden=true;
    document.getElementById('page4.3').hidden=true;
    document.getElementById('page4.4').hidden=true;
    document.getElementById('page5').hidden=!true;
}
function changAvator(){
        document.getElementById('page1').hidden=true;
        document.getElementById('page1.5').hidden=!true;
        document.getElementById('page2').hidden=true;
        document.getElementById('page3').hidden=true;
        document.getElementById('page4').hidden=true;
        document.getElementById('page4.2').hidden=true;
    document.getElementById('page4.3').hidden=true;
    document.getElementById('page4.4').hidden=true;
        document.getElementById('page5').hidden=true;
    }
    function changePage41(){
        document.getElementById('page1').hidden=true;
        document.getElementById('page1.5').hidden=true;
        document.getElementById('page2').hidden=true;
        document.getElementById('page3').hidden=true;
        document.getElementById('page4').hidden=!true;
        document.getElementById('page4.2').hidden=true;
        document.getElementById('page4.3').hidden=true;
        document.getElementById('page4.4').hidden=true;
        document.getElementById('page5').hidden=true;
    }

    function changePage42(){
        document.getElementById('page1').hidden=true;
        document.getElementById('page1.5').hidden=true;
        document.getElementById('page2').hidden=true;
        document.getElementById('page3').hidden=true;
        document.getElementById('page4').hidden=true;
        document.getElementById('page4.2').hidden=!true;
        document.getElementById('page4.3').hidden=true;
        document.getElementById('page4.4').hidden=true;
        document.getElementById('page5').hidden=true;
    }
    function changePage43(){
        document.getElementById('page1').hidden=true;
        document.getElementById('page1.5').hidden=true;
        document.getElementById('page2').hidden=true;
        document.getElementById('page3').hidden=true;
        document.getElementById('page4').hidden=true;
        document.getElementById('page4.2').hidden=true;
        document.getElementById('page4.3').hidden=!true;
        document.getElementById('page4.4').hidden=true;
        document.getElementById('page5').hidden=true;
    }
    function changePage44(){
        document.getElementById('page1').hidden=true;
        document.getElementById('page1.5').hidden=true;
        document.getElementById('page2').hidden=true;
        document.getElementById('page3').hidden=true;
        document.getElementById('page4').hidden=true;
        document.getElementById('page4.2').hidden=true;
        document.getElementById('page4.3').hidden=true;
        document.getElementById('page4.4').hidden=!true;
        document.getElementById('page5').hidden=true;
    }
    function changOpacity(){
        let avs=document.getElementsByClassName("avator");
        console.log(avs.length);
        console.log(avs[2]);

        for(let i=0; i<11; i++){
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
    socket.on("promptresult", (data)=>{
        console.log("this is promt from server", data);
        changePage2();
    document.getElementById("1st-Person").textContent=data['1st-Person']['Story Lines']
    document.getElementById("Journalistic").textContent=data['Journalistic']['Story Lines']
    document.getElementById("Magical").textContent=data['Magical']['Story Lines']
    document.getElementById("Minimal").textContent=data['Minimal']['Story Lines']
    document.getElementById("Sci-Fi").textContent=data['Sci-Fi']['Story Lines']
    });
    
    function prompt(){
     
        let input= document.getElementById("input_main").value;
        console.log(input);
      
        socket.emit("prompt", input)
        document.getElementById('page1').hidden=true;
        document.getElementById('page1.5').hidden=true;
        document.getElementById('page2').hidden=!true;
        document.getElementById('page3').hidden=true;
        document.getElementById('page4').hidden=true;
        document.getElementById('page4.2').hidden=true;
        document.getElementById('page4.3').hidden=true;
        document.getElementById('page4.4').hidden=true;
        document.getElementById('page5').hidden=true;
        
    }

    
    