import { formatePositionToChessNotation, getPositionIndex } from '../../utils'
import { ChessPiece } from './ChessPiece'

export class King extends ChessPiece {
  getValidMoves(): string[] {
    const [currentRow, currentCol] = getPositionIndex(this.position)
    const possibleMoves = [
      [currentRow - 1, currentCol - 1],
      [currentRow - 1, currentCol],
      [currentRow - 1, currentCol + 1],
      [currentRow, currentCol - 1],
      [currentRow, currentCol + 1],
      [currentRow + 1, currentCol - 1],
      [currentRow + 1, currentCol],
      [currentRow + 1, currentCol + 1],
    ]

    return possibleMoves
      .map(([row, col]) => formatePositionToChessNotation(row, col))
      .filter((move): move is string => move !== null) // After filtering, move is always a string and never null.
  }
}
