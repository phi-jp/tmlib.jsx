

class Random {
	static function randint(min:int, max:int): int {
		return Math.floor( Math.random()*(max-min+1) ) + min;
	}

	static function radfloat(min:number, max:number): number {
		return Math.random()*(max-min)+min;
	}

	static function randbool(): boolean {
		return Random.randint(0, 1) == 1;
	}
}
