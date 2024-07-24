let navbar = (function () {
	pub = {};

	createHTML = (currentPage) => {
		let html = [
			'<nav role="navigation" class="nav-menu w-nav-menu">',
			//'<a href="index.html" aria-current="page" class="nav-link w-nav-link %">Home</a>',
			'<a href="loopfoundation.html" class="nav-link w-nav-link %"><b>Loop3D Foundation</a>',
			'<a href="downloads.html" class="nav-link w-nav-link %"><b>Downloads & Articles</a>',
			'<a href="steerco.html" aria-current="page" class="nav-link w-nav-link %"><b>Steering Committee</a>',
			'<a href="loopers.html" class="nav-link w-nav-link %"><b>Loopers</a>',	
			//'<a href="downloads.html" class="nav-link w-nav-link %">Downloads & Articles</a>',
			'<a href="work-packages.html" class="nav-link w-nav-link %"><b>Work Packages</a>',
			'<a href="presentations.html" class="nav-link w-nav-link %"><b>Presentations</a>',
		//	'<a href="3Dconference2025.html" class="nav-link w-nav-link %"><b>3D Modelling conference 2025</a>',
		//	'<a href="blog.html" class="nav-link w-nav-link %">Blog</a>',
		//	'<a href="contact.html" class="nav-link w-nav-link %">Contact</a>',
			'<a href="#" class="close-x w-hidden-main w-hidden-medium w-hidden-small">×</a>',
			"</nav>",
		];
		for (let i = 1; i < html.length - 2; i += 1) {
			let pageRef = html[i].split('"')[1];
			let unformatted = html[i].split("%");
			if (pageRef == currentPage) {
				html[i] = unformatted[0] + "w--current" + unformatted[1];
			} else {
				html[i] = unformatted[0] + "" + unformatted[1];
			}
			//console.log(html[i]);
		}
		return html.join("\n");
	};

	pub.setup = () => {
		let path = window.location.pathname;
		let currentPage = path.split("/").pop();

		$("#navbar").append(createHTML(currentPage));
		console.log("Navbar loaded via js");
	};

	return pub;
})();

$(document).ready(pub.setup);
