   var display = "";
        var acum = 0;
        var operacion = "suma";
        function agregar(x) {
            if (display == "0") {
                display = "";
            }
            display += x;
            document.getElementById("result").innerHTML = display;
        }
        function borra() {
            display = "0";
            acum = 0;
            document.getElementById("result").innerHTML = display;
        }
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
        function oper() {
            if (display == "") {
                display = "0";
            }
            if (operacion === "suma" || operacion === "nada") {
                acum += parseFloat(display);
                display = "0";
                document.getElementById("result").innerHTML = acum;
                operacion = "suma";
            } else if (operacion === "resta" || operacion === "nada") {
                acum -= parseFloat(display);
                display = "0";
                document.getElementById("result").innerHTML = acum;
                operacion = "resta";
            } else if (operacion === "multi" || operacion === "nada") {
                acum *= parseFloat(display);
                display = "0";
                document.getElementById("result").innerHTML = acum;
                operacion = "suma";
            } else if (operacion === "divi" || operacion === "nada") {
                acum /= parseFloat(display);
                display = "0";
                document.getElementById("result").innerHTML = acum;
                operacion = "divi";
            }
        }