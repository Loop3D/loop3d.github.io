let workPackages = (function () {
	pub = {};

	makePkg = (title, presenter, url) => {
		return `<div class="w-container">
				  <div class="w-richtext">
					<h2>${title}</h2>
					<h3>${presenter}</h3>
					<blockquote>
						   <iframe id="ytplayer" type="text/html" width="800vw" height="360"
						   src="${url}"
						   frameborder="0" allowfullscreen></iframe>
					</blockquote>
				  </div>
				</div>
		`;
	};

	displayPkgs = (pkgs) => {
		pkgs.forEach((presentation) => {
			let title = presentation.title;
			let presenter = presentation.presenter;
			let url = presentation.video_url;

			$("#main-content").append(makePkg(title, presenter, url));
		});
	};

	pub.setup = () => {
		$.ajax({
			type: "GET",
			url: "presentations.json",
			data: {
				get_param: "value",
			},
			dataType: "json",
			async: false,
			success: function (data) {
				let presentations = [];
				presentations = data.presentations;

				displayPkgs(presentations);
			},
			error: () => {
				alert("Could not load presentation data.");
			},
		});
	};

	return pub;
})();

$(document).ready(pub.setup);
