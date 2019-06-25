function ingresarElementos(arreglo, n){
    for(var i = 0; i < n; i++){
        var datos = parseInt(prompt("INGRESAR LOS ELEMENTOS"));
        arreglo[i] = datos;
    }
}


function mostrarElementos(arreglo, n){
    for(var i = 0; i < n; i++){
        console.log(arreglo[i]);
        
    }
    prompt(arreglo);
}

function algoritmoSeleccion(arreglo, n){
    for(var i = 0; i < n; i++){
        for(var j = i+1; j < n; j++){
            if(arreglo[j] < arreglo[i]){
                var aux = arreglo[j];
                arreglo[j] = arreglo[i];
                arreglo[i] = aux;
            }
        }
    }
}

function mayorMenor(arreglo, n){
   algoritmoSeleccion(arreglo, n);
   console.log("EL MAYOR ELEMENTO ES: ");
   var mayor = arreglo[n-1];
   console.log(mayor);
   console.log("EL MENOR ELEMENTO ES: ");
   var menor = arreglo[0];
   console.log(menor);
}


function menuPrincipal(arreglo){
        do{

            var menu=parseInt(prompt(
            `INGRESE LA OPCION REQUERIDA:
             1.- PARA INGRESAR LOS ELEMENTOS
             2.- PARA MOSTRAR ELEMENTOS
             3.- ORDENAR
             4.- MAYOR Y MENOR ELEMENTO 
             5.- SALIR
            `))
            switch(menu){
                case 1:
                    console.log("BIENVENIDO CASO 1");
                    var n = parseInt(prompt("INGRESE EL TAMAÑO"));
                    ingresarElementos(arreglo123, n);
                    break;
                case 2:
                    console.log("BIENVENIDO CASO 2");
                    console.log("EL ARREGLO ES:");
                    mostrarElementos(arreglo123, n);
                    break; 
                case 3:
                    console.log("BIENVENIDO CASO 3");
                    console.log("EL ARREGLO ORDENADO ES:");
                    algoritmoSeleccion(arreglo123, n);
                    mostrarElementos(arreglo123, n);
                    break;
                case 4:
                    console.log("BIENVENIDO CASO 4");
                    mayorMenor(arreglo123, n);
                    break;
                case 5:
                    console.log("ADIOS :)...");
                    break;
                default:
                    console.log("OPCION INCORRECTA")
            }
        }while(menu != 5)
 }

 var arreglo123 = [];

menuPrincipal(arreglo123);
