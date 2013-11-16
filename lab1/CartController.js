function CartController($scope){
	$scope.items = [
		{title: 'Paint pots', quantity: 8, price: 9.099},
		{title: 'polka pots', quantity:100, price: 19.99},
		{title: 'peblles', quantity:10, price: 20.20}
	];

	$scope.remove = function(index){
		$scope.items.splice(index, 1);
	}
}