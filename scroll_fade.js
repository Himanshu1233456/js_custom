const faders = document.querySelectorAll('.sc_fade');

const appearop = {
	root: null,
	threshold: 0.7,
	rootMargin: "0px 0px -50px 0px"
};

const scroll = new IntersectionObserver(function(entries,scroll) {
	entries.forEach(entry => {
		if(!entry.isIntersecting) { return; }
		else
		{
			entry.target.classList.add("appear");
			scroll.unobserve(entry.target);
		}
	});
}, appearop);

faders.forEach(fader => {
	scroll.observe(fader);
})