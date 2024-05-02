let paragraph = (function () {
	pub = {};

	//makePkg = (img, name, descr) => {
	makePkg = (title, information, sub_info) => {
		return `<div class="w-container">
				  <div class="w-richtext">
					  <h3>${title}</h3> 
					  <blockquote>${information}</blockquote>
					  ${sub_info}
				  </div>
				</div>
		`;
	};

	displayPkgs = (pkgs) => {
		pkgs.forEach((package) => {
			let title = package.title;
			let information = package.information;
			let sub_info = package.sub_info;
			
			$("#main-content").append(makePkg(title, information, sub_info));
		});
	};

	pub.setup = () => {
		$.ajax({
			type: "GET",
			url: "loopfoundation.json",
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
