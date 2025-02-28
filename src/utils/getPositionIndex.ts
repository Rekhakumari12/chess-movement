/**
 * @param position denotes the position of the chess piece e.g. A1
 * @description parses the position contains the correct zero-based index.
 * @returns [rowIndex, columnIndex]
 */

export const getPositionIndex = (position: string): [number, number] => {
  const columnIndex = position[0].toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0)
  const rowIndex = parseInt(position[1], 10) - 1
  return [rowIndex, columnIndex]
}
