let boton = document.querySelector("button")
let input = document.querySelector("input")

boton.addEventListener("click", function(){
    cargarCiudad();
})

function cargarCiudad(){
    let ciudad = input.value
    if(input.value=== ""){
        alert("No ingresaste una ciudad!")
    }
    else{
        $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad +"&appid=fdd533266e28101881f610f2b8f1ebe1&units=metric&lang=es", function(data){
        console.log(data)
        document.querySelector("#ciudad").textContent = data.name
        document.querySelector('#temperatura').innerHTML = Math.round(data.main.temp) + '<sup>°C</sup>';
        document.querySelector("#wicon").src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + '.png'
        document.querySelector("#descripcion").textContent = data.weather[0].description
        document.querySelector(".container").style.visibility = "visible"
        input.value = ""
    })
    .fail(function(data){
        alert("Ingresaste una ciudad inexistente")
        input.value = ""
    })
    }
}