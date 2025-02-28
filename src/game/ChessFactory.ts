import { ChessPiece } from './pieces/ChessPiece'
import { Pawn } from './pieces/Pawn'
import { King } from './pieces/King'
import { Queen } from './pieces/Queen'

export const getPiece = (type: string, position: string): ChessPiece => {
  switch (type.toLowerCase()) {
    case 'pawn':
      return new Pawn(position)
    case 'king':
      return new King(position)
    case 'queen':
      return new Queen(position)
    default:
      throw new Error(`Invalid piece type: ${type}. Allowed: Pawn, King, Queen.`)
  }
}
