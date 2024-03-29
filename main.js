function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Udwb0ZJyV/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,results)
{
if(error){
    console.error(error);
}
else{
    console.log(results);
    random_r=Math.floor(Math.random()*255)+1;
    random_g=Math.floor(Math.random()*255)+1;
    random_b=Math.floor(Math.random()*255)+1;
    document.getElementById("result_label").innerHTML='I can hear:'+results[0].label;
    document.getElementById("result_confidence").innerHTML='Accuracy:'+(results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")";
    document.getElementById("result_confidence").style.color="rgb("+random_r+","+random_g+","+random_b+")";
    var mg=document.getElementById('animal1');
    var mg1=document.getElementById('animal2');
    var mg2=document.getElementById('animal3');
    var mg3=document.getElementById('animal4');
    if(result[0].label=="clap")
    {
        mg.src='aliens-01.gif';
        mg1.src='aliens-02.png';
        mg2.src='aliens-03.png';
        mg3.src='aliens-04.png';
    }
    else if(result[0].label=="snapping")
    {
        mg.src='aliens-01.png';
        mg1.src='aliens-02.gif';
        mg2.src='aliens-03.png';
        mg3.src='aliens-04.png';
    }
    else if(result[0].label=="bell")
    {
        mg.src='aliens-01.png';
        mg1.src='aliens-02.png';
        mg2.src='aliens-03.gif';
        mg3.src='aliens-04.png';
    }
    else
    {
        mg.src='aliens-01.png';
        mg1.src='aliens-02.png';
        mg2.src='aliens-03.png';
        mg3.src='aliens-04.gif';
    }
}
}


