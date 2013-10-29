

class Util {
	
	static function shuffle(arr: Array.<variant>): Array.<variant> {

		for (var i=0,len=arr.length; i<len; ++i) {
			var j = Math.floor(Math.random()*len);

			if (i != j) {
				var t = arr[i];
				arr[i] = arr[j];
				arr[j] = t;
			}
		}

		return arr;
	}

	static function format(str:string, obj:Map.<variant>): string {
		var fn = (m:string):string -> {
			var key = m.substring(1, m.length-1);
			return obj[key] as string;
		};
		var rex = /\{(\w+)\}/g;

		return str.replace(rex, fn);
	}
}
