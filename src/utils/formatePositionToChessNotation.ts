/**
 * @param row denotes row index
 * @param col denotes column index
 * @description takes row and column index convert letters [3,4] -> "E4"
 * @returns string of position or null if position is outside the chessboard.
 */

export const formatePositionToChessNotation = (row: number, col: number): string | null => {
  // checks if the row and col are out of bounds
  if (row < 0 || row > 7 || col < 0 || col > 7) return null
  return `${String.fromCharCode(col + 65)}${row + 1}`
}
