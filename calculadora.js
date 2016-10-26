   var display = "";
   var acum = 0;
   var operacion = "suma";
   /*Esta función añade números al string display y muestra el valor
    del string en la pantalla. Se activa cada vez que pulsamos una tecla de número o el punto*/

   function agregar(x) {
       if (display == "0") {
           display = "";
       }
       display += x;
       document.getElementById("result").innerHTML = display;
   }

   /* La función "borra" pone las variables "display" y "acum" a cero y muestra el valor de "display"*/
   function borra() {
       display = "0";
       acum = 0;
       document.getElementById("result").innerHTML = display;
   }

   /* Las  siguientes funciónes ejecutan la funcion "oper" y dan un valor a la varible "operación"
    para determinar que operación aritmética usara la funcion "oper" en la próxima llamada*/
   function igual() {
       oper();
       operacion = "nada"
   }

   function sumaF() {
       oper();
       operacion = "suma";
   }

   function restaF() {
       oper();
       operacion = "resta";
   }

   function multiF() {
       oper();
       operacion = "multi";
   }

   function diviF() {
       oper();
       operacion = "divi";
   }

   /* La función "ajuste" formatea el valor de la variable "acum" para que el numero 
   no tenga más de 16 dígitos,
   que es número maximo que puede contener la caja de resultados de la calculadora.
   Si la parte entera del número supera los 15 dígitos, damos a la variable "acum" el valor 0 
   y mostramos "Error". Si no es el caso, cortamos, con el método .substr(0,16), 
   el número para que no sobrepase el máximo de 16 dígitos*/
   function ajuste(x) {
       var I;
       var acumS = x.toString();
       var partesAS = acumS.split(".");
       if (partesAS[0].length > 14) {
           I = "Error";
           acum = 0;
       } else { I = acumS.substr(0, 16); };
       return I;
   }

/* La función "oper"  es el nucleo de la calculadora.
   Lo primero que hace es chequear si hay un "0" en "display"y lo elimina para que no haya ceros a la izquierda.
   Después chequea que tipo de operación hay en la variable "operacion" y combina el número que hay 
   en "display" con "acum" según la operación aritmética especificada.*/
   function oper() {
       if (display == "") {
           display = "0";
       }
       if (operacion === "suma" || operacion === "nada") {
           acum += parseFloat(display);
           display = "0";
           var H = ajuste(acum);
           document.getElementById("result").innerHTML = H;
           operacion = "suma";
       } else if (operacion === "resta" || operacion === "nada") {
           acum -= parseFloat(display);
           display = "0";
           var H = ajuste(acum);
           document.getElementById("result").innerHTML = H;
           operacion = "resta";
       } else if (operacion === "multi" || operacion === "nada") {
           acum *= parseFloat(display);
           display = "0";
           var H = ajuste(acum);
           document.getElementById("result").innerHTML = H;
           operacion = "suma";
       } else if (operacion === "divi" || operacion === "nada") {
           acum /= parseFloat(display);
           display = "0";
           var H = ajuste(acum);
           document.getElementById("result").innerHTML = H;
           operacion = "divi";
       }
   }