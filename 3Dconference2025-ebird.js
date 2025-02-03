let paragraph = (function () {
	pub = {};

	//makePkg = (img, name, descr) => {
	makePkg = (title, information, sub_info, img) => {
		return `<div class="w-container">
				  <div class="w-richtext">
					  <h3 style = "color:rgb(150, 65, 9)"><b>${title}</b></h3> 
					  <blockquote>${information}</blockquote>
					  ${sub_info}
					  <br>
					  <img
							src="${img}"
							loading="lazy"
							sizes="(max-width: 479px) 94vw, (max-width: 767px) 95vw, (max-width: 991px) 728px, 940px"
							alt=""
						/>
				  </div>
				</div>
		`;
	};

	displayPkgs = (pkgs) => {
		pkgs.forEach((package) => {
			let title = package.title;
			let information = package.information;
			let sub_info = package.sub_info;
			let img = package.img;
			
			$("#main-content").append(makePkg(title, information, sub_info, img));
		});
	};

	pub.setup = () => {
		$.ajax({
			type: "GET",
			url: "3Dconference2025.json",
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
