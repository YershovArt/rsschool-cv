document.addEventListener('click', function (e) {
	const targetElement = e.target;
	if (targetElement.closest('.button-burger')) {
		document.documentElement.classList.toggle('menu-open');
	}
})