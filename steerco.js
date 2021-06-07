let workPackages = (function () {
	pub = {};

	makePkg = (img, name, descr) => {
		return `<div class="w-container">
				  <div class="w-richtext">
					<div style='display:inline; font-size: 26px; line-height: 36px; margin-top: 20px;'>
					    <img src="${img}" width="100" height="100">  ${name} 
					</div>	  
					<blockquote>${descr}</blockquote>
				  </div>
				</div>
		`;
	};

	displayPkgs = (pkgs) => {
		pkgs.forEach((package) => {
			let img = package.img;
			let name = package.name;
			let descr = package.descr;
			
			$("#main-content").append(makePkg(img, name, descr));
		});
	};

	pub.setup = () => {
		$.ajax({
			type: "GET",
			url: "steerco.json",
			data: {
				get_param: "value",
			},
			dataType: "json",
			async: false,
			success: function (data) {
				let pkgs = [];
				pkgs = data.biogs;

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
