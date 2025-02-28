import { getPiece } from './game/ChessFactory'
import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('Enter piece and position (e.g., King, D5):', (input: string) => {
  try {
    const [piece, position] = input.split(',').map((ele) => ele.trim())
    const chessPosition = getPiece(piece, position)
    const moves = chessPosition.getValidMoves()
    console.log('Possible moves:', moves.length ? moves.join(', ') : 'No moves available.')
  } catch (error: any) {
    console.error('Error:', error.message)
  }
  rl.close()
})
