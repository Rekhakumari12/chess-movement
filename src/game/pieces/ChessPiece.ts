import { getValidPosition } from '../../utils/getValidPosition'

export abstract class ChessPiece {
  // store the chess piece's position (E5)
  protected position: string

  constructor(position: string) {
    if (!getValidPosition(position)) {
      throw new Error(`Invalid position: ${position}. Must be in format A1-H8.`)
    }
    this.position = position.toUpperCase()
  }

  // ensure all the chess pieces have a getValidMoves method
  abstract getValidMoves(): string[]
}
