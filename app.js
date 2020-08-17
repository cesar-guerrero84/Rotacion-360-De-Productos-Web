const slider = document.querySelector("#slider");
const canvas = document.querySelector("#canvas");// con estas dos const llamamos a los elementos id slider y canvas del html
slider.addEventListener("input",inputSlider);//con este evento leemos el contador del input slider en la funcion inputslider
const images = [];//aqui es donde vamos a almacenar todas las imagenes y decidir cual mostrar y cual no
const cntxt = canvas.getContext("2d")
window.addEventListener("load",pageLoaded)// aqui le decimos al navegador que cuando carge la pagina se ejecute la funcion que carga todas nuestras imagenes asi no tenemos el problema de que el navegador haga esperar al usuario a que carguen las imagenes para poder ver el contenido de la pagina

function pageLoaded()
{
    for (let i = 1;i <= 36;i += 1){
        const number = i.toString().padStart(2,'00');//el metodo toString cambia valores number a strings y el padStart crea lectores de valores con mas decimales por ejemplo en este caso hay 2 osea que ira de 0.1,0.2 etc hasta 10 y asi dos veces como se indico en el padstart osea hasta 20 esto lo necesitamos por que la url de la imagen carga en esos decimales tipo 0.1 etc
        const url = `https://stockx-360.imgix.net//Nike-Air-Force-1-Low-Travis-Scott-Cactus-Jack/Images/Nike-Air-Force-1-Low-Travis-Scott-Cactus-Jack/Lv2/img${number}.jpg?auto=format,compress&q=90&updated_at=1573661380&w=1000`;
        const image = new Image();
        image.src = url;//aqui declaramos la imagen de la url y la enviamos a image
        image.addEventListener("load",() =>{
            images[i] = image;
            if(i === 1){//esta condicion dice que si i (imagenes) es igual a 1 (primera imagen) se carga la imagen
                loadImage(i)
            }
        })
    }
}
function loadImage(index)
{
    cntxt.drawImage(images[index],0,0,canvas.width,canvas.height);
}
function inputSlider()
{
    console.log(this.value);
    loadImage(this.value)//aqui hacemos que al mover slider se ejecute la carga de imagenes creando el efecto 360
}