let workPackages = (function () {
	pub = {};

	makePkg = (pkg, name, lead, descr) => {
		return `<div class="w-container">
				  <div class="w-richtext">
					<h2>${pkg}. ${name}</h2>
					<h3>Lead: ${lead}</h3>
					<blockquote>${descr}</blockquote>
				  </div>
				</div>
		`;
	};

	displayPkgs = (pkgs) => {
		pkgs.forEach((package) => {
			let name = package.name;
			let pkg = package.num;
			let descr = package.descr;
			let lead = package.lead;

			$("#main-content").append(makePkg(pkg, name, lead, descr));
		});
	};

	pub.setup = () => {
		$.ajax({
			type: "GET",
			url: "wpkgs.json",
			data: {
				get_param: "value",
			},
			dataType: "json",
			async: false,
			success: function (data) {
				let pkgs = [];
				pkgs = data.wpkgs;

				displayPkgs(pkgs);
			},
			error: () => {
				alert("Could not load work-package data.");
			},
		});
	};

	return pub;
})();

$(document).ready(pub.setup);
