let workPackages = (function () {
	pub = {};

	makePkg = (title, presenter, url) => {
		var videoSection = "";
		if (url.includes("youtube")) {
			videoSection = `<div class="w-container">
				  <div class="w-richtext">
					<h2>${title}</h2>
					<h3>${presenter}</h3>
					<blockquote>
						   <iframe id="ytplayer" type="text/html" width="600px" height="360"
						   src="${url}"
						   frameborder="0" allowfullscreen></iframe>

					</blockquote>
				  </div>
				</div>
		`;
		} else {
			videoSection = `<div class="w-container">
				  <div class="w-richtext">
					<h2>${title}</h2>
					<h3>${presenter}</h3>
					<blockquote>

					<video tabindex="0" controls="true" x-webkit-airplay="allow"  preload="none" id="ytplayer" style="max-width: 1024px; max-height: 1024px; width: 600px; height: 360px;">
												<source src="${url}" type="">
																		</video>
					</blockquote>
				  </div>
				</div>
		`;
		}
		return videoSection;
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
