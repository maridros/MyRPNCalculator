		var stack = [];
		
		//function that clears the display (stack and input) 
		function clr() 
		{ 
			clearDisplay();
			clearStackDisplay();
			stack = [];
		} 
					
		//function that runs when an operator symbol is pressed to do the corresponding operation
		function operatorPressed(operator) {
			if (operator === "+") {
				sum();
			} else if (operator === "-") {
				sub();
			} else if (operator === "x") {
				multiply();
			} else if (operator === "/") {
				divide();
			} else if (operator === "neg") {
				neg();
			} else if (operator === "sin") {
				sin();
			} else if (operator === "cos") {
				cos();
			} else if (operator === "tan") {
				tan();
			} else if (operator === "root") {
				root();
			} else if (operator === "power") {
				power();
			} else if (operator === "n!") {
				factor();
			} else if (operator === "log") {
				logarithm();
			} else if (operator === "swap") {
				swap();
			} else if (operator === "del") {
				del();
			} else if (operator === "ln") {
				ln();
			}
			clearDisplay();
			setDisplayStack(stack);
		}
		
		//function that runs when enter is pressed to push the element on the stack and display refreshed stack
		function enterPressed() {
			var value = getDisplay();
			if (isNaN(value)) {
				alert("Invalid input!!!");
			} else {
				stack.push(parseFloat(value));
				setDisplayStack(stack);
			}
			clearDisplay();	
		}
		
		//function that adds a character (number or '.') to display view
		function symbolPressed(d) {
			var oldValue = getDisplay();
			if (oldValue === "0") {
				document.getElementById("input").value = ""; 
				oldValue = "";
			}
			if (oldValue.length < 18) {
				var newValue = oldValue + d;
				setDisplay(newValue);
			}
		}
		
		//function that sets value s to the input display
		function setDisplay(s) {
			document.getElementById("input").value = s; 
		}
		
		//function that sets value s to the stack display 
		function setDisplayStack(s) {
			document.getElementById("stack").value = s.join(" "); 
		}
		
		//function that gets the content of input display
		function getDisplay() {
			return document.getElementById("input").value; 
		}
		
		//function that clears the input display
		function clearDisplay() {
			document.getElementById("input").value = "0"; 
		}
		
		//function that clears the stack display
		function clearStackDisplay() {
			document.getElementById("stack").value = ""; 
		}
		
		//========== functions for each operation ==========
		
		//addition
		function sum() {
			if (stack.length > 1) {
				stack.push(stack.pop() + stack.pop());
			}
			else {
				alert("Not enough elements in the stack!\nYou need at least two numbers for an addition.");
			}
			
		}
		
		//subtraction
		function sub() {
			if (stack.length > 1) {
				var last = stack.pop();
				stack.push(stack.pop() - last);
			}
			else {
				alert("Not enough elements in the stack!\nYou need at least two numbers for a subtraction.");
			}
		}
		
		//multiplication
		function multiply() {
			if (stack.length > 1) {
				stack.push(stack.pop() * stack.pop());
			}
			else {
				alert("Not enough elements in the stack!\nYou need at least two numbers for a multiplication.");
			}
		}
		
		//division
		function divide() {
			if (stack.length > 1) {
				var last = stack.pop();
				stack.push(stack.pop() / last);
			}
			else {
				alert("Not enough elements in the stack!\nYou need at least two numbers for a division.");
			}
		}
		
		//negation
		function neg() {
			if (stack.length > 0) {
				stack.push(-stack.pop());
			} else {
				alert("Not enough elements in the stack!\nYou need at least one number for negation.");
			}
		}
		
		//sin
		function sin() {
			if (stack.length > 0) {
				stack.push(Math.sin(stack.pop() * Math.PI / 180.0));
			} else {
				alert("Not enough elements in the stack!\nYou need at least one number for sin operation.");
			}
		}
		
		//cos
		function cos() {
			if (stack.length > 0) {
				stack.push(Math.cos(stack.pop() * Math.PI / 180.0));
			} else {
				alert("Not enough elements in the stack!\nYou need at least one number for cos operation.");
			}
		}
		
		//tan
		function tan() {
			if (stack.length > 0) {
				stack.push(Math.tan(stack.pop() * Math.PI / 180.0));
			} else {
				alert("Not enough elements in the stack!\nYou need at least one number for tan operation.");
			}
		}
		
		//root
		function root() {
			if (stack.length > 0) {
				stack.push(Math.sqrt(stack.pop()));
			} else {
				alert("Not enough elements in the stack!\nYou need at least one number for root operation.");
			}
		}
		
		//power
		function power() {
			if (stack.length > 1) {
				last = stack.pop();
				stack.push(Math.pow(stack.pop(), last));
			} else {
				alert("Not enough elements in the stack!\nYou need at least two numbers for power operation.");
			}
		}
		
		//n!
		function factor() {
			if (stack.length > 0) {
				num = stack.pop();
				if (Number.isInteger(num)) {
					if (num === 0 || num === 1)
						stack.push(1);
					else {
						for (var i = num - 1; i > 0; i--)
							num *= i;
						stack.push(num);
					}
				} else {
					stack.push(num);
					alert("Last number of the stack must be an integer for factor operation!");
				}
				
			} else {
				alert("Not enough elements in the stack!\nYou need at least one number for factor operation.");
			}
		}
		
		//log
		function logarithm() {
			if (stack.length > 0) {
				stack.push(Math.log10(stack.pop()));
			} else {
				alert("Not enough elements in the stack!\nYou need at least one number for logarithm calculation.");
			}
		}
		
		//swap
		function swap() {
			if (stack.length > 1) {
				oldlast = stack.pop();
				newlast = stack.pop();
				stack.push(oldlast);
				stack.push(newlast);
			} else {
				alert("Not enough elements in the stack!\nYou need at least two numbers for swap operation.");
			}
		}
		
		//delete
		function del() {
			if (stack.length > 0) {
				stack.pop();
			} else {
				alert("Not enough elements in the stack!\nYou need at least one number for delete operation.");
			}
		}
		
		//ln
		function ln() {
			if (stack.length > 0) {
				stack.push(Math.log(stack.pop()));
			} else {
				alert("Not enough elements in the stack!\nYou need at least one number for ln calculation.");
			}
		}
				