const readline = require('readline-sync')

// This algorithm calculates basic operations with input values
function start() {

	const content = {}
	
	content.valuesInput = handleValuesInput()
	content.operationInput = handleOperationInput()
	content.operationResult = handleOperationResult()

	function handleValuesInput() {
		let first = readline.questionInt('Enter first value: ')
		let second = readline.questionInt('Enter second value: ')

		return {
			first,
			second
		}
	}

	function handleOperationInput() {
		const options = ['sum', 'subtraction', 'multiplication', 'division']
		const selectedIndex = readline.keyInSelect(options, 'Choose an operation: ')
		
		selectedOperation = options[selectedIndex]

		return selectedOperation
	}

	function handleOperationResult() {

		switch (selectedOperation) {
			case 'sum':
				sum()
				break
			case 'subtraction':
				subtraction()
				break
			case 'multiplication':
				multiplication()
				break
			case 'division':
				division()
				break
		}

		function sum() {
			result = (content.valuesInput.first + content.valuesInput.second)
			return result
		}

		function subtraction() {
			result = (content.valuesInput.first - content.valuesInput.second)
			return result
		}

		function multiplication() {
			result = (content.valuesInput.first * content.valuesInput.second)
			return result
		}

		function division() {
			result = (content.valuesInput.first / content.valuesInput.second)
			return result
		}

		return result
	}

	console.log('\n')
	console.log(content)
}

start()