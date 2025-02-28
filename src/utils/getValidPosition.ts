/**
 * @param position denotes the position of the chess piece
 * @description checks if the position is valid (A1-H8)
 * @returns boolean
 */

export const getValidPosition = (position: string): boolean => {
  return /^[A-H][1-8]$/.test(position)
}
