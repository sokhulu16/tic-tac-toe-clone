export const checkForWinner = (board) => {
  const winningCombos = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal TL to BR
    [2, 4, 6], // Diagonal TR to BL
  ];

  for (let [a, b, c] of winningCombos) {
    if (
      board[a] &&
      board[a] === board[b] &&
      board[b] === board[c]
    ) {
      console.log("We have a winner:", board[a]);
      return board[a]; // Return the winning symbol ('X' or 'O')
    }
  }

  return null; // No winner
};








//first way you ca do it 

// export const checkForWinner = (board) => {
//   console.log("in here");
//   // 0 1 2
//   // 3 4 5
//   // 6 7 8

//   // diagnal 1
//   if (board[0] === board[4] && board[4] === board[8]) {
//     console.log("we have a winner");
//     return true;
//   }

//   // diagnal 2
//   if (board[2] === board[4] && board[4] === board[6]) {
//     console.log("we have a winner");
//     return true;
//   }

//   // diagnal 3
//   if (board[0] === board[1] && board[1] === board[2]) {
//     console.log("we have a winner");
//     return true;
//   }

//   // diagnal 4
//   if (board[3] === board[4] && board[4] === board[5]) {
//     console.log("we have a winner");
//     return true;
//   }

//   // diagnal 5
//   if (board[6] === board[7] && board[7] === board[8]) {
//     console.log("we have a winner");
//     return true;
//   }

//   // diagnal 6
//   if (board[0] === board[3] && board[3] === board[6]) {
//     console.log("we have a winner");
//     return true;
//   }

//   // diagnal 7
//   if (board[1] === board[4] && board[4] === board[7]) {
//     console.log("we have a winner");
//     return true;
//   }

//   // diagnal 8
//   if (board[2] === board[5] && board[5] === board[8]) {
//     console.log("we have a winner");
//     return true;
//   }
// };
