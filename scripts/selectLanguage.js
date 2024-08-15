function select_language(language) {
	localStorage.setItem('language', language);
	window.dispatchEvent( new Event('storage') ) // <----- 
	document.querySelectorAll('[lang]').forEach(function (element) {
			if (element.getAttribute('lang') === language) {
					element.classList.add('active');
			} else {
					element.classList.remove('active');
			}
	});
}
select_language('en');