var obj11 = {
	name: "Arsa",
	age: 25,
	fav: [ "swiss", "london" ],
	prop: {
		behav: "cool",
		vert: "intro"
	}
};

var obj22 = {
	name: "Arsa",
	age: 25,
	fav: [ "swiss", "london" ],
	prop: {
		behav: "cool",
		vert: "intro"
	}
};

function compareObjects (obj1, obj2) {
	if (Object.keys(obj1).length == Object.keys(obj2).length) {
		for (var key in obj1) {
			if (obj2[key] == undefined) {
				return false;
			} else {
				if (typeof obj2[key] == "object") {
					if (!compareObjects(obj1[key], obj2[key])) {
						return false;
					}
				} else {
					if (obj1[key] != obj2[key]) {
						return false;
					}
				}
			}
		}
		return true;
	} else {
		return false;
	}
}

console.log(compareObjects(obj11, obj22));
