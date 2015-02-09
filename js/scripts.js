var queenAttack = function(position1, position2) {
  var x1 = position1[0]
  var y1 = position1[1]
  var x2 = position2[0]
  var y2 = position2[1]

  if ((x1 === x2) || (y1 === y2)) {
    return true;
  } else if (Math.abs(x1 - x2) === Math.abs(y1 - y2)) {
    return true;
  } else {
    return false;
  };
};
