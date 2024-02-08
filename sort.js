var sortNumber = function (number) {
	number.sort( function (a,b) {
		if (a == b) {
			return 0;
		}
		return a < b ? -1 : 1;
	});
};

var number = [ 19, 3, 81, 1, 24, 21];
sortNumber(number);
cosole.log(number);

## commit demo pull_request_func
## Added demo code pull_request_func
##print(Added demo code pull_request_func);

