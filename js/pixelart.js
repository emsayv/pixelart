var myPixelDraw = {
	colorPicked:0,
	cellColor: "#ecf0f1",
	defaultCells: 30,
	coloring: "false",
	fns : {
		calcSize: function(cantidadDePiezas) {
			if(typeof cantidadDePiezas==='undefined'){
				var cantidadDePiezas= myPixelDraw.defaultCells; 
			}
			var totalDeCeldas = cantidadDePiezas * cantidadDePiezas;
			 myPixelDraw.container.empty();
			 for (var  i = 0; i < totalDeCeldas; i++) {
			 	//USANDO JQUERY CREAR UN ELEMENTO HTML
			 	//A ESE ELEMNTO LE AGREGAMOS LA CLASE CELL
			 	// varable.attr("draggable")
			 	//al container le hago append con el objeto creado
			 }
		},
		reSize : function (cantidadDePiezas)  {
						
		},
		detectMouseUp: function ()  {
			console.log('detectMouseUp');
		},
		colorPalette: function ()  {
			console.log('colorPalette');
		},
		pickColor: function ()  {
			console.log('pickColor');
		},
		colorIt: function ()  {
			console.log('colorIt');
		},
		colorOnDrag: function ()  {
			console.log('colorOnDrag');
		},
		reset: function ()  {
			console.log('reset');
		},
		toggleBorders: function ()  {
			console.log('toggleBorders');
		},
		disableRightClick: function ()  {
			console.log('disableRightClick');
		},
		grabImage: function ()  {
			console.log('grabImage asdasd');
		}
	},
	init:function(container){
		this.container = container;
		var listaDeFunciones = Object.keys(this.fns);
		listaDeFunciones.forEach(function(valor, indice){			
			myPixelDraw.fns[valor]();
		});

	}
}

$(document).ready(function(){
	var elemento = $("#container");

	myPixelDraw.init(elemento);
});
