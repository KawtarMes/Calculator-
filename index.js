
        const container = document.createElement("main") // create div main
        const calculator = document.createElement("div"); // create div  caclulator       
        calculator.classList.add("calculatorDiv")

        document.body.appendChild(container) // met la div container dans le body
        container.appendChild(calculator) // calculator dans la div container
            container.classList.add("containerDiv")
        var inputNum1 = document.createElement("input"); // input
        inputNum1.type = "number";                     // type input = number
        

            var inputSign = document.createElement("select"); // select with the signs as options
            var plus = document.createElement("option")
            plus.textContent = "+"
            var minus = document.createElement("option")
            minus.textContent = "-"
            var multiply  = document.createElement("option")
            multiply.textContent = "*"
            var division  = document.createElement("option")
            division.textContent = "/"

        var inputNum2 = document.createElement("input"); // pareil pour l'input du num2
        inputNum2.type = "number";                     

        const egale = document.createElement("button") // button egale
        egale.textContent= "="

        var resultDiv = document.createElement("div"); // div to display my result
        resultDiv.classList.add("result"); // added a class so i can call by className
        resultDiv.textContent = "resultat" 
           // resultDiv.style.borderColor = "teal"; //style attributes
           

        calculator.appendChild(inputNum1);  // je met input dans la div calculator
        calculator.appendChild(inputSign); // put the select sign in the calculator, with its signs/ options
            inputSign.appendChild(plus)
            inputSign.appendChild(minus);
            inputSign.appendChild(multiply);
            inputSign.appendChild(division);
        calculator.appendChild(inputNum2); // input2
        calculator.appendChild(egale) // button egale 
        calculator.appendChild(resultDiv);// div in calculator div for the result
     


        egale.addEventListener("click", function() {
            // Retrieve input values and operator
            let num1 = parseFloat(inputNum1.value); // Parsefloat prend le string et transforme en num decimal. donc on pourra calculer
            let num2 = parseFloat(inputNum2.value);
            let operator = inputSign.value;
            let result
        
            switch (operator){
                case "+":
                    result = num1+ num2
                    break;
                case "-":
                    result = num1 - num2
                    break;
                case "*":
                result = num1 * num2
                break;
                case "/":
                result = num1 / num2
                break;
                default:
                     result = "invalid"
            }
            resultDiv.textContent = "Result: " + result;  })

                   
          // Meglio switch , che eval , problemi di sicurezza se non sbaglio