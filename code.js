test("blank str returns 0", function () {
		ok(add("")==0,"");
});

test("add one number", function () {
		ok(add("1")==1,"");
});

test("add more stuff", function () {
		ok(add("1,2,3")==6,"");
});

test("add new line and stuff", function () {
		ok(add("1\n2,3")==6,"");
});

test("add custom delim and stuff", function () {
		ok(add("1\n2,3")==6,"");
});

test("add custom delim and stuff", function () {
		ok(add("//;\n1;2;3")==6,"");
});

test("negatives not allowed", function () {
		ok(add("-1,2,3")=="Negatives not allowed","");
});

function add(input){
	return (input.length == 0) ? 0 : input.indexOf("-") > -1 ? "Negatives not allowed" : input.indexOf("//") > -1 ? eval(input.replace(new RegExp (input.substring(2,3), 'g'),"+").substring(4)) : eval(input.replace(/,/g , "+").replace(/\n/g , "+"));
}