//
Webcam.set({
    width:350,
    height:300,
    img_format:'png',
    png_quality:100

});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/IRQY3SPPU/model.json',modelLoaded);
function modelLoaded(){
    console.log('Model Loaded');
}
function speak()
{
    var synth=window.speechSynthesis;
    speak_data_1="The First Prediction is"+prediction_1;
    speak_data_2="The Second Prediction is"+prediction_2;
    var utterThis=newspeechSynthesis(speak_data_1+speak_data_2);
     synth.speak(utterThis);
}
function welcome(){
    var name=document.getElementById("input-1").value;
       document.getElementById("text").innerHTML="<h1>"+name+",Welcome to the Hand Gesture App </h1>";
       document.getElementById("input-1").value="";
    
}

