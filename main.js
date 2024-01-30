function setup(){
    Can1 = createCanvas(280, 280)
    Can1.center()
    background("white")
    Can1.mouseReleased(classifyCanvas)
    Speech1 = window.speechSynthesis
    myModel = ml5.imageClassifier('DoodleNet')
}

function clearCanvas(){
    background("white")
}
  
function draw(){
    strokeWeight(13)
    stroke(0)
    if(mouseIsPressed)(
        line(pmouseX, pmouseY, mouseX , mouseY)
    )
}
function classifyCanvas(){
    myModel.classify(Can1, gotResult)
}

function gotResult(error, results){
if(error){
    console.log(error)
}
else{
    console.log(results)
    document.getElementById("label").innerHTML = "You have drawn "+results[0].label;
    document.getElementById("confidence").innerHTML = "Accuracy: "+Math.round(results[0].confidence*100)+" %"
    talk = new SpeechSynthesisUtterance(results[0].label)
    Speech1.speak(talk)
}
}
