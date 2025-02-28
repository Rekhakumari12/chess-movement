# Chess Movement CLI App

A **console-based chess movement calculator** that determines valid moves for different chess pieces.

## **Features**

- Supports chess pieces like **King, Queen, Pawn, etc.**
- Uses **Object-Oriented Programming (OOP)** for scalability.
- Built with **TypeScript & Node.js**.
- Includes **Jest tests with coverage reports**.

---

## **Setup & Installation**

### **1️. Clone the Repository**

```sh
git clone https://github.com/rekhakumari12/chess-movement.git
cd chess-movement
```

### **2️. Install Dependencies**

```sh
npm install
```

## **Running the App**

```sh
npm start
```

The app will automatically build and then prompt for chess piece & position, e.g.:

```
Enter piece and position (e.g., King, D5): King, D5
Possible moves: C4, D4, E4, C5, E5, C6, D6, E6
```

### **Run in Development Mode**

```sh
npm run dev
```

This runs the app using `ts-node` without compiling to `dist/`.

---

## **Running Tests**

```sh
npm test
```

To check **test coverage**, run:

```sh
npm run test:coverage
```

Open the coverage report:

```sh
open coverage/lcov-report/index.html
```

---

## **📂 Project Structure**

```
chess-movement/
│── src/
│   │── game/
│   │   │── ChessFactory.ts  # Factory for creating pieces
|   |   |── chess.test.ts
│   │   │── pieces/
│   │   │   │── King.ts
│   │   │   │── Pawn.ts
│   │   │   │── Queen.ts
│   │   │   │── ChessPiece.ts  # Base class for pieces
│   │── utils/
│   │── index.ts    # Main entry point
│── dist/                   # Compiled JavaScript (after build)
│── coverage/                # Test coverage reports
│── package.json
│── tsconfig.json
│── .gitignore
│── README.md
```
