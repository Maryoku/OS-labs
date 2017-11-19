var Debt=Array();
Debt["Smit"]=15;
Debt["Shmidt"]=18;
Debt["Tom"]=25;
Debt["Sam"]=18;
Debt["Bob"]=48;

sum(Debt);
StartS(Debt);
EndM(Debt);

function sum (Debt) {
	var rez = 0;
	for (var key in Debt) {
		rez += parseInt(Debt[key]);
	}
	WScript.StdOut.WriteLine(rez);
}

function StartS (Debt) {
	re=/^S/;
	
	for (var key in Debt) {
		if(key.match(re)) {
			WScript.StdOut.WriteLine(key);
		}
	}
}

function EndM (Debt) {
	re=/m$/;
	
	for (var key in Debt) {
		if(key.match(re)) {
			WScript.StdOut.WriteLine(key);
		}
	}
}