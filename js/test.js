function natija() {
	// var a = document.getElementById('docx').value;
	// var b = document.getElementById('excel').value;
	// var c = document.getElementById('css2').value;

	var test1 = document.querySelector('[name=radio]:checked').value;
	var test2 = document.querySelector('[name=radio2]:checked').value;
	var test3 = document.querySelector('[name=radio3]:checked').value;
	var test4 = document.querySelector('[name=radio4]:checked').value;
	var test5 = document.querySelector('[name=radio5]:checked').value;
	var correct = 0;
	if (test1 == "docx") {
		correct++;
	}
	if (test2 == "excel") {
		correct++;
	}
	if (test3 == "css2") {
		correct++;
	}
	if (test4 == "ozbekiston") {
		correct++;
	}
	if (test5 == "ochyawil") {
		correct++;
	}
	document.getElementById('ntj').innerHTML = 'sizning toplagan balingiz: ' + correct;
}