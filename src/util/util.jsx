

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
}
