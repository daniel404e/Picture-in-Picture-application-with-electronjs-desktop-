const { dialog } = require('electron');

const ipc = require('electron').ipcRenderer

var screens =[];
let mediaRecorder;
const recordedchunks = [];
 
var previousscreen;
var currentscreen=0;
var once =0;

    
     
 
 




function change (e)
{
    console.log(e);
  

    if(currentscreen != e)
    {
    previousscreen=currentscreen;
    currentscreen=e;
   
    document.getElementById(currentscreen).classList.add("summaclass");
     //document.getElementById(currentscreen).style.borderRadius="5px";
    document.getElementById(previousscreen).classList.remove("summaclass");
  ipc.send("changescreen", e);

    }

     
}

ipc.on('screens', (event, message) => {
    screens = message ;
    console.log(screens);
    console.log(screens.length); 
    document.getElementById("noofscreens").innerHTML = "total screens: "+screens.length;
         
      var temp =0;
      document.getElementById("drptop").innerHTML="";
        screens.forEach( element  => {
                 
            
            document.getElementById("drptop").innerHTML = document.getElementById("drptop").innerHTML +"<a id="+temp+" onclick= 'change("+temp+")'  >" + element +"</a>" ;
          
            temp=temp+1;
    });
    
    
 
    
 
     
     

    
    
    document.getElementById(currentscreen).classList.add("summaclass");
     
     //console.log(document.getElementById(1).innerText );
       
  })

  ipc.send('asynchronous-message', 'async ping');

  document.getElementById('minz').onclick= function(){ ipc.send('trafic',0); };

  document.getElementById('quitz').onclick= function(){ ipc.send('trafic',1); };

  document.getElementById('reloadn').onclick= function(){ ipc.send('reloads',1); };
   
    
//for the video
  ipc.on('SET_SOURCE', async (event, sourceId) => {
      console.log("hiiii this is");
    try {
        console.log("hiiii this is");
       const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          mandatory: {
            chromeMediaSource: 'desktop',
            chromeMediaSourceId: sourceId,
            minWidth: 100,
            maxWidth: 128000,
            minHeight: 72,
            maxHeight: 72000
          }
        }
      })
      handleStream(stream)
    } catch (e) {
      handleError(e)
    }
  })

  
  
  function handleStream (stream) {
    const video = document.querySelector('video')
    video.srcObject = stream
    video.onloadedmetadata = (e) => video.play()
    
   
  }
  
  function handleError (e) {
    console.log(e)
  }

  ///for the video




  ipc.on('focusstat', async (event, focusid) => {

    console.log(focusid);
    
    if(focusid)
    {
          document.getElementById("quitz").style.opacity="1";
          document.getElementById("minz").style.opacity="0.7";
          document.getElementById("minz").style.zIndex="100";
          document.getElementById("quitz").style.zIndex="100";
    }
    else
    {
        document.getElementById("quitz").style.opacity="0";
        document.getElementById("minz").style.opacity="0";
        document.getElementById("minz").style.zIndex="-100";
        document.getElementById("quitz").style.zIndex="-100";

    }

  })



 
  document.getElementById("swind").onmouseover= function (){document.getElementById("drptop").style.display="block" ; }
  document.getElementById("drptop").onmouseover= function (){document.getElementById("drptop").style.display="block"}

   
       document.getElementById("drptop").style.display="none"  ;
 
   document.getElementById("swind").onmouseout =  function(){ document.getElementById("drptop").style.display="none" };
   document.getElementById("drptop").onmouseout =  function(){ document.getElementById("drptop").style.display="none" };



   // When the user clicks on div, open the popup
   function myFunction2() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }


  function myFunction3() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }


  function myFunction4() {
    var popup = document.getElementById("myPopup2");
    popup.classList.toggle("show2");
  }


  function myFunction5() {
    var popup = document.getElementById("myPopup2");
    popup.classList.toggle("show2");
  }