function select_language(language) {
	document.querySelectorAll('[lang]').forEach(function (element) {
			if (element.getAttribute('lang') === language) {
					element.classList.add('active');
			} else {
					element.classList.remove('active');
			}
	});
}
select_language('en');