import { getPositionIndex, formatePositionToChessNotation } from '../../utils'
import { ChessPiece } from './ChessPiece'

export class Queen extends ChessPiece {
  getValidMoves(): string[] {
    const [currRowIndex, currColIndex] = getPositionIndex(this.position)
    const moves: Set<string> = new Set()

    // horizontal & vertical moves
    for (let i = 0; i < 8; i++) {
      if (i !== currColIndex) moves.add(formatePositionToChessNotation(currRowIndex, i)!)
      if (i !== currRowIndex) moves.add(formatePositionToChessNotation(i, currColIndex)!)
    }

    for (let i = 1; i < 8; i++) {
      moves.add(formatePositionToChessNotation(currRowIndex + i, currColIndex + i)!) // top-right diagonal
      moves.add(formatePositionToChessNotation(currRowIndex - i, currColIndex + i)!) // bottom-right diagonal
      moves.add(formatePositionToChessNotation(currRowIndex + i, currColIndex - i)!) // top-left diagonal
      moves.add(formatePositionToChessNotation(currRowIndex - i, currColIndex - i)!) // bottom-left diagonal
    }

    return Array.from(moves).filter(Boolean) // filter boolean to remove all falsy value
  }
}
