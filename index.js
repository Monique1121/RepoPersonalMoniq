function menu() {
    document.getElementById("par1").innerHTML =
        "Café Americano – Clásico y recién hecho<br>" +
        "Café Latte – Con leche espumosa<br>" +
        "Capuchino – Café con espuma cremosa<br>" +
        "Té de Manzanilla – Relajante<br>" +
        "Té Verde – Suave y refrescante<br>" +
        "Té Chai – Con especias y aroma intenso<br>" +
        "Jugo de Naranja – Natural y fresco<br>" +
        "Jugo de Manzana – Dulce y ligero<br>" +
        "Jugo de Fresa – Refrescante<br>" +
        "Leche – Fría o caliente<br>" +
        "Chocolate caliente – Dulce y reconfortante<br>" +
        "Malteada de Fresa – Cremosa y fría<br>" +
        "Malteada de Chocolate – Perfecta para consentirte<br>" +
        "Agua natural – Bien fría<br>" +
        "Agua mineral – Con burbujas";
}

let gatos = ["Tama", "Luna", "Miso", "Nube"];
let i = 0;

function condicion() {

    document.getElementById("p2").innerHTML = gatos[i];
    i++;
    if (i >= gatos.length) {
        i = 0;
    }

}

let sucursales = ["CDMX - Polanco", "Guadalajara - Chapultepec", "Monterrey - San Pedro", "Cancún - Zona Hotelera"];

function ciclo() {
    let texto = "";
    for (let j = 0; j < sucursales.length; j++) {
        texto += sucursales[j] + "<br>";
    }
    document.getElementById("p3").innerHTML = texto;
}

