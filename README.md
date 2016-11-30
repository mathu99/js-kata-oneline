# js-kata-oneline
JS string kata in one line

TDD String Kata: http://osherove.com/tdd-kata-1/

Did the Kata in one line using Javascript: 

function add(input){
	return (input.length == 0) ? 0 : input.indexOf("-") > -1 ? "Negatives not allowed" : input.indexOf("//") > -1 ? eval(input.replace(new RegExp (input.substring(2,3), 'g'),"+").substring(4)) : eval(input.replace(/,/g , "+").replace(/\n/g , "+"));
}
