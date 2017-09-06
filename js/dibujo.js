var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var l = 0;
var limite = 30;
var lr = 0;
var limiteR = 30;
var y_i, x_f;
var yr_i;
var xr_f;

do {
    var y_i = 10 * l;
    var x_f = 10 * (l + 1);
    crearLineas("#000", 0, y_i, x_f, 300);
    l++
} while (l < limite);

do {
    var yr_i = limiteR * 10;
    var xr_f = 10 * (limiteR - 1)
    crearLineas("#000", 300, yr_i, xr_f, 0);
    limiteR = limiteR - 1;
} while (limiteR > lr);

crearLineas("#000", 1, 1, 1, 299);
crearLineas("#000", 1, 299, 299, 299);
crearLineas("#000", 299, 299, 299, 1);
crearLineas("#000", 299, 1, 1, 1);


function crearLineas(color, x_in, y_in, x_fin, y_fin)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_in,y_in);
    lienzo.lineTo(x_fin,y_fin);
    lienzo.stroke();
    lienzo.closePath();
}