/*
==== Código de cajero automático orientado a objetos =====
@author: Christopher Coria Vásquez.
@version: 0.1
@copyright-website: https://www.mastercoria.com/
============
Este código es libre, puedes modificarlo, distribuírlo y hacerte de tus propios cambios.
Si quieres leer más aportes relacionados a la programación y la tecnología, puedes visitar mi blog: https://blog.mastercoria.com/
*/

// Clase general.
class Billete{
	constructor(a,b){
		this.valor = a;
		this.cantidad = b;
	}
}

// Funciones.
function cajero(){
	dinero = parseInt(document.getElementById("numero").value);
	for(var i of caja){
		if(dinero > 0){
			var a = Math.floor(dinero / i.valor);
			if(a > i.cantidad){
				a = i.cantidad;
			}
			dinero -= i.valor * a;
			entregados.push(new Billete(i.valor, a));
		} 
	}
	if(dinero < 0){
		resultado.innerHTML = "Números negativos no válidos.";
		document.getElementById("borrar").style.display = "inline";
	}
}
function ejecutar(){
	cajero();
	for(var i of entregados){
		if (dinero > 0){
			resultado.innerHTML = "No puedo darte esa cantidad.";
		} else if(i.cantidad > 0){
			resultado.innerHTML += "Billetes/monedas de $" + i.valor + ": " + i.cantidad + "<br />";
		}
	}
	document.getElementById("borrar").style.display = "inline";
}
function borrarContenido(){
	window.location.reload();
}

// Variables globales.
var enviarFormulario = document.getElementById("enviar");
var dinero;
var resultado = document.getElementById("resultados");
var caja = [], entregados = [];
caja.push(new Billete(100,11)); // 1,100
caja.push(new Billete(50,7)); // 350
enviarFormulario.addEventListener("click", ejecutar);