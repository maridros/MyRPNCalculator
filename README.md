# MyRPNCalculator
## Reverse Polish Notation Calculator
This calculator uses postfix notation. The user adds numbers to the stack by pushing the number buttons and then the enter button. The stack takes maximum 18 numbers. When the user wants to do an operation with the last numbers of the task, this is done by pressing the button with the corresponding operation symbol. 
### Example
If someone wants to find the result of 8 * (3 + 2) they do the following steps:
1. Press button 8 and then enter (the stack now contains: [8])
2. Press button 3 and then enter (the stack now contains: [8, 3])
3. Press button 2 and then enter (the stack now contains: [8, 3, 2])
4. Press button + --> removes the two last elements of the stack, adds them and puts the result to the stack (the stack now contains: [8, 5])
5. Press button * (the stack now contains: [40], which is the result)
### Interface of the calculator and usage
The following image shows the graphical calculator and the usage of each buttons
![rpnCalc](https://user-images.githubusercontent.com/89779679/131679565-93dc9e8a-7a5f-4629-ac2f-5715ea7bc41a.png)
### Running the code
All you need to run the code is just a browser (like chrome, firefox etc). Just download all the files to the same folder and run MyRPNCalculator.html.
