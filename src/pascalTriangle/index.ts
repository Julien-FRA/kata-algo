export const generate = (numRows: number): number[][] => {
  let triangle: number[][] = [[1]];

  if (numRows <= 1) return triangle;

  for (let i = 0; i <= numRows - 2; i++) {
    let ligne: number[] = [];

    for (let j = 0; j < triangle[i].length - 1; j++) {
      ligne.push(triangle[i][j] + triangle[i][j + 1]);
    }

    triangle.push([1, ...ligne, 1]);
  }

  return triangle;
};
