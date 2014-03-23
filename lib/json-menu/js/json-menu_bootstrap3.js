//load JSON file
$.getJSON('samples/json-data/menu.json', function(data) {
	//build menu
	var builddata = function () {
		var source = [];
		var items = [];
		for (i = 0; i < data.menus.length; i++) {
			var item = data.menus[i];
			var label = item["name"];
			var parentid = item["parent_id"];
			var id = item["id"];
			var url = item["url"];
			var level = item["level"];

			if (items[parentid]) {
				var item = { parentid: parentid, label: label, url: url, item: item, level: level };
				if (!items[parentid].items) {
					items[parentid].items = [];
				}
				items[parentid].items[items[parentid].items.length] = item;
				items[id] = item;
			}
			else {
				items[id] = { parentid: parentid, label: label, url: url, item: item, level: level };
				source[id] = items[id];
			}
		}
		return source;
	}

	var buildUL = function (parent, items) {
		$.each(items, function () {
			if (this.label) {
				if (this.items && this.items.length > 0) {
					var li = $("<li class='dropdown'>" + "<a class='dropdown-toggle' data-toggle='dropdown' href='"+ this.url +"'>" + this.label + "</a></li>");
					if (this.level !== "0") {
						li.addClass("js-menu");
					}
					li.appendTo(parent);
					var ul = $("<ul class='dropdown-menu'></ul>");
					ul.appendTo(li);
					buildUL(ul, this.items);
				} else {
					var li = $("<li class=''>" + "<a href='"+ this.url +"'>" + this.label + "</a></li>");
					li.appendTo(parent);
				}
			}
		});
	}
	var source = builddata();
	var ul = $(".json-menu");
	// ul.appendTo(".json-menu");
	buildUL(ul, source);
	//add bootstrap classes
	//if ($(".json-menu>li:has(ul.js-menu)"))
	//{
		$(".json-menu").find("li.js-menu").addClass('dropdown-submenu');
	//}
	//if ($(".json-menu>li>ul.js-menu>li:has(> ul.js-menu)"))
	//{
	//	$(".json-menu>li>ul.js-menu li ").addClass('dropdown-submenu');
	//}
	// $("ul.js-menu").find("li:not(:has(> ul.js-menu))").removeClass("dropdown-submenu");
});
