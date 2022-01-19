function getX(x, nums) {
    var sorted = nums.sort(function(a,b){return a-b}); 
    return sorted[x-1];
  }