import { getPiece } from './ChessFactory'

describe('Chess Movement', () => {
  test('Pawn moves from G1', () => {
    expect(getPiece('Pawn', 'G1').getValidMoves()).toEqual(['G2'])
  })

  test('King moves from D5', () => {
    const moves = getPiece('King', 'D5').getValidMoves()
    expect(moves).toEqual(['C4', 'D4', 'E4', 'C5', 'E5', 'C6', 'D6', 'E6'])
  })

  test('Queen moves from E4 contains H7', () => {
    expect(getPiece('Queen', 'E4').getValidMoves()).toContain('H7')
  })

  test('Queen moves from E4', () => {
    const moves = getPiece('Queen', 'E4').getValidMoves()
    expect(moves).toEqual([
      'A4',
      'E1',
      'B4',
      'E2',
      'C4',
      'E3',
      'D4',
      'E5',
      'F4',
      'E6',
      'G4',
      'E7',
      'H4',
      'E8',
      'F5',
      'F3',
      'D5',
      'D3',
      'G6',
      'G2',
      'C6',
      'C2',
      'H7',
      'H1',
      'B7',
      'B1',
      'A8',
    ])
  })

  test('Invalid piece type throws error', () => {
    expect(() => getPiece('Dragon', 'D5')).toThrow('Invalid piece type')
  })

  test('Invalid position throws error', () => {
    expect(() => getPiece('Pawn', 'Z9')).toThrow('Invalid position')
  })
})
