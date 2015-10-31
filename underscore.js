// PUT YOUR CODE HERE!!!

var _ = new Object();
// average - returns the average value in a given array
// _.average([4,6,1,1])
// => 3

_.average = function(array) {
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum / array.length;
};



// contains - returns true if a given value is present in an array
// _.contains([7,55,99], 99);
// => true

//assuming checking value type as well as value

_.contains = function(array, value) {
	result = false;
	for (var i = 0; i < array.length; i++) {
		if (array[i] === value) {
			result = true;
		}
	}
	return result;
};


_.contains = function(array, value) {
	if (array.indexOf(value) !== -1) {
		return true;
	} else {
		return false;
	}
};


// first - returns the first element in an array
// _.first([5, 4, 3, 2, 1]);
// => 5

_.first = function(array) {
	return array[0];
};


// last - returns the last element in an array
// _.last([5, 4, 3, 2, 1]);
// => 1

_.last = function(array) {
	return array[array.length-1];
};


// max - returns the maximum value in an array
// var numbers = [10, 5, 100, 2, 1000];
// _.max(numbers);
// => 1000

_.max = function(array) {
	var result = array[0];
	for (var i = 0; i < array.length; i++) {
		if (array[i] > result) {
			result = array[i];
		}
	}
	return result;
};

_.max = function(array) {
	array.sort(function(a, b) {
		return b - a;
	});
	return array[0];
};

// min - returns the minimum value in an array
// var numbers = [10, 5, 100, 2, 1000];
// _.min(numbers);
// => 2

_.min = function(array) {
	var result = array[0];
	for (var i = 0; i < array.length; i++) {
		if (array[i] < result) {
			result = array[i];
		}
	}
	return result;
};

_.min = function(array) {
	array.sort(function(a, b) {
		return a - b;
	});
	return array[0];
};

// shuffle - Returns a shuffled copy of the list, using a version of the Fisher-Yates shuffle. Don't worry about implementing that exact shuffle alogrithm. Start by creating your own simple shuffle.
// _.shuffle([1, 2, 3, 4, 5, 6]);
// => [4, 1, 6, 3, 5, 2]

_.shuffle = function(array) {
	var newArray = [];
	var fixedCounter = array.length;
	var counter = array.length;

	for (var i = 0; i < fixedCounter; i++) {
		var num = Math.floor(Math.random() * counter);
		newArray.push(array.splice(num, 1)[0]);
		counter--;
	}
	return newArray;
};

_.shuffle([1, 2, 3, 4, 5, 6]);


// * sample - Produce a random sample from the list. Pass a number to return n random elements from the list. Otherwise a single random item will be returned.

// _.sample([1, 2, 3, 4, 5, 6]);
// => 4

// _.sample([1, 2, 3, 4, 5, 6], 3);
// => [1, 6, 2]

_.sample = function(array, n) {
	var newArray = [];
	var arrayLength = 1;
	if (n) {
		arrayLength = n;
	}

	for (var i = 0; i < arrayLength; i++) {
		var num = Math.floor(Math.random() * array.length);
		newArray.push(array[num]);
	}

	return newArray;
};


// difference - returns the values from array that are not present in the other array.
// _.difference([1, 2, 3, 4, 5], [5, 2, 10]);
// => [1, 3, 4]

_.difference = function(array1, array2) {
	var newArray = [];
	for (var j = 0; j < array1.length; j++) {
		if (array2.indexOf(array1[j]) == -1) {
			newArray.push(array1[j]);
		}
	}
	return newArray;
};


//this shows what values were NOT present in BOTH arrays
_.difference = function(array1, array2) {
	var newArray = [];
	for (var j = 0; j < array1.length; j++) {
		if (array2.indexOf(array1[j]) == -1) {
			newArray.push(array1[j]);
		}
	}
	for (var i = 0; i < array2.length; i++) {
		if (array1.indexOf(array2[i]) == -1) {
			newArray.push(array2[i]);
		}
	}
	return newArray;
};


// indexOf - Returns the index at which value can be found in the array, or -1 if value is not present in the array.
// _.indexOf([1, 2, 3], 2);
// => 1

_.indexOf = function(array, value) {
	var result;
	for (var i = 0; i < array.length; i++) {
		if (array[i] === value) {
			result = i;
      break;
		} else {
			result = -1;
		}
	}
	return result;
};


// pluck - extracts a list of property values and returns them in an array.
//   var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
// _.pluck(stooges, 'name');
// => ["moe", "larry", "curly"]


//this worked
_.pluck = function(arrayName, property) {
	var returnArray = [];
	for (var i = 0; i < arrayName.length; i++) {
		returnArray.push(arrayName[i][property]);
	}
    return returnArray;
};


// Part 2 - next week


var _ = new Object();

// each - iterates over an array and calls a given function with each element
// _.each([1, 2, 3], alert);
// => alerts each number in turn...


_.each = function(array, action) {
	array.forEach(function(value) {
		action(value);
	});
};


// compact - returns a new array with all provided undefined values removed
// _.compact([1, "hello", undefined, 3, undefined]);
// => [1, "hello", 3]


_.compact = function(array) {
	var newArray = [];
	array.forEach(function(item) {
		if (item !== undefined) {
			newArray.push(item);
		}
	});
	return newArray;
};



// map - returns a new array of values produced by running each element of an array through a given function
// _.map([1, 2, 3], function(num){ return num * 3; });
// => [3, 6, 9]

_.map = function(array, action) {
	var newArray = [];
	array.forEach(function(value) {
		newArray.push(action(value));
	});
  return newArray;
};

//old fashioned way
_.map = function(array, action) {
	var newArray = [];
	for (var i = 0; i < array.length; i++) {
		newArray.push(action(array[i]));
	}
	return newArray;
};


// _.map(["dogs", "before", "cats"], function(str){ return str.toUpperCase(); });
// => ["DOGS", "BEFORE", "CATS"]



// filter - Looks through each value in the list, returning an array of all the values that pass a truth test
// var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// => [2, 4, 6]


_.filter = function(array, action) {
	var newArray = [];
	array.forEach(function(value) {
		if (action(value) === true) {
			newArray.push(value);
		}
	});
	return newArray;
};

_.filter =function(array, action) {
	var newArray = [];
	for (var i = 0; i < array.length; i++) {
		if (action(array[i]) === true) {
			newArray.push(array[i]);
		}
	}
	return newArray;
};