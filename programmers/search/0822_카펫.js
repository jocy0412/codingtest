function solution(brown, yellow) {
  var sum = brown + yellow;

  for (let height = 3; height < brown; height++) {
    if (sum % height === 0) {
      let width = sum / height;
      if (yellow === (width - 2) * (height - 2)) {
        return [width, height];
      }
    }
  }
}
