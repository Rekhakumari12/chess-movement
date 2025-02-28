import { formatePositionToChessNotation, getPositionIndex } from '../../utils'
import { ChessPiece } from './ChessPiece'

export class Pawn extends ChessPiece {
  getValidMoves(): string[] {
    const [row, col] = getPositionIndex(this.position)

    // moves one step forward (row + 1)
    const newPosition = row < 7 ? formatePositionToChessNotation(row + 1, col) : null
    return newPosition ? [newPosition] : []
  }
}
