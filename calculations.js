document.getElementById('inputKg').addEventListener('input', function(e){
	var kg = e.target.value;
	console.log(kg);
	document.getElementById('inputLbs').value = (kg*2.2).toFixed(2);
});

document.getElementById('inputLbs').addEventListener('input', function(e){
	var lbs = e.target.value;
	console.log(lbs);
	document.getElementById('inputKg').value = (lbs/2.2).toFixed(2);
});

document.getElementById('inputKm').addEventListener('input', function(e){
	var km = e.target.value;
	console.log(km);
	document.getElementById('inputMiles').value = (km*0.6214).toFixed(2);
});

document.getElementById('inputMiles').addEventListener('input', function(e){
	var miles = e.target.value;
	console.log(miles);
	document.getElementById('inputKm').value = (miles/0.6214).toFixed(2);
});

document.getElementById('inputFahr').addEventListener('input', function(e){
	var fahr = e.target.value;
	console.log(fahr);
	document.getElementById('inputCel').value = ((fahr-32)*(5/9)).toFixed(2);
});

document.getElementById('inputCel').addEventListener('input', function(e){
	var cel = e.target.value;
	console.log(cel);
	document.getElementById('inputFahr').value = ((cel*(9/5))+32).toFixed(2);
});