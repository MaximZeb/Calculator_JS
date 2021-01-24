
// прикрепляем кнопки с их значением 
function insert (num){
	document.form.textview.value = 
	document.form.textview.value + num;
}

// очистка input
function clean () {
	document.form.textview.value = "";
}

// удаляет последнию цифру
function back () {
	var public = document.form.textview.value;
	document.form.textview.value = public.substring(0,public.length-1);
}

// подсчет выражения 
function equal () {
	var public = document.form.textview.value;
	if(public) {
		document.form.textview.value = eval(public);
	}
}
// корень из числа 
function sqrt () {
	var public = document.form.textview.value;
	let equal = Math.sqrt(public);
	document.form.textview.value = eval(equal);
}