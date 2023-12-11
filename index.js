
function changePage(){
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
function changePage2(){
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
function changePage3(){
    document.getElementById('page1').hidden=true;
    document.getElementById('page1.5').hidden=true;
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

const socket = io("https://boomserver.pick-up.services/", {
    transports: ["websocket"],
})
    socket.on("connect", () => {
        console.log('this is your ID: ', socket.id);
    });
    socket.on("echo_replay", (data)=>{
        console.log("this is echo from server", data);
    });
    socket.emit("echo", "hello from sepideh")