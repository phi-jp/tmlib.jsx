
import "console.jsx";
import "js/web.jsx";

import "../util/flow.jsx";

class AssetManager {

	static const assets = {}:Map.<variant>;

	static function load(assets: Map.<string>, callback: (Map.<variant>) -> void): void {
		var flow = new Flow(assets.keys().length, callback);

		assets.keys().forEach((key)-> {
			var value = assets[key];
			var image = dom.document.createElement("img") as HTMLImageElement;

			image.src = value;
			image.addEventListener("load", function(e:Event): void {
				flow.pass();
			});

			AssetManager.assets[key] = image;
		});
	}

	static function getImage(key:string): HTMLImageElement {
		return AssetManager.assets[key] as HTMLImageElement;

	}

}

