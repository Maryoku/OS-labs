var rez;

var a;
WScript.StdOut.WriteLine("Please Enter Number a: ");
a = WScript.StdIn.ReadLine();

var b;
WScript.StdOut.WriteLine("Please Enter Number b: ");
b = WScript.StdIn.ReadLine();

var oper;
WScript.StdOut.WriteLine("Please Enter Operand (+ or - or * or /): ");
oper = WScript.StdIn.ReadLine();

if (oper == '+') {
	rez = parseInt(a) + parseInt(b);
	WScript.StdOut.WriteLine(rez);
}
else if (oper == '-') {
	rez = parseInt(a) - parseInt(b);
	WScript.StdOut.WriteLine(rez);
}
else if (oper == '*') {
	rez = parseInt(a) * parseInt(b);
	WScript.StdOut.WriteLine(rez);
}
else if (oper == '/') {
	rez = parseInt(a) / parseInt(b);
	WScript.StdOut.WriteLine(rez);
}