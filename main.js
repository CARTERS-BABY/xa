//https://teachablemachine.withgoogle.com/models/MfXeXvl_3/




console.log ('versoam5',ml5.version)
Webcam.set({
Width:350,
height: 300 , 
img_format : 'png', 
png_quality: 900
})
var camera = document.getElementById ('camera')
Webcam.attach(camera)
function tirarfoto (){
    Webcam.snap(function(data_uri){
document.getElementById ('resultado').innerHTML = `<img id = 'foto' src = '${data_uri}'/>`
    })
}
var classificaçao = ml5.imageClassifier ('https://teachablemachine.withgoogle.com/models/MfXeXvl_3/model.json', carregarmodelo )
function carregarmodelo (){
console.log ('modelo')
function checar()  {
    img = document.getElementById ('foto')
     classificaçao.classify (img,obteresultado )
    }
    function obteresultado (error,result) {
    if (error) {
        console.log (error)
    } else {
        console.log (result)
        var api = window.speechSynthesis
        var conteudo = 'objeto é' +  result[0].label
        var convertido = new SpeechSynthesisUtterance (conteudo)
        api.speak (convertido)
        document.getElementById ('objeto').innerHTML = result[0].label
        document.getElementById ('precisao').innerHTML = result[0].confidence.toFixed (3)
    }
    
    
    }
}