Webcam.set({
    width :350,
    height :350,
    image_format : 'jpeg',
    jpeg_quality :100
});
 camera = document.getElementById("webcam");
 Webcam.attach('#camera');

 function captureIMG(){
     Webcam.snap(function(data_uri){
document.getElementById("output1").innerHTML='<img id="anyname" src="'+data_uri+'"</img>';
     });
 }
 console.log("ml5 version:" + ml5.version);
 classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/model.json', modelLoaded);
 function modelLoaded(){
     console.log("Deepak has been activated!")
 }
function identifyIMG(){
    imganything = document.getElementById("anyname");
    classifier.classify(imganything,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
        
    }
    else{
        console.log(results);
    }
}
