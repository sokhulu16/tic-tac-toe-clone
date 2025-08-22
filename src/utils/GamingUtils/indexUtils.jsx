export const checkForWinner = (board) => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
  ];

  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]; // 'X' or 'O'
    }
  }

  return false; // no winner
};





// const checkForSequence = (option1, option2, option3) => {
//   return option1 !== null && option1 === option2 && option2 === option3;
// };


// export const checkForWinner = (board) => {
//   // 0 1 2
//   // 3 4 5
//   // 6 7 8

//   //rows
//   for (let i = 0; i < 9; i += 3) {
//     if (checkForSequence(board[i], board[i + 1], board[i + 2])) {
//       console.log("Row Winner");
//       return true;
//     }
//   }

//   //colomns
//   for (let i = 0; i < 3; i += 1) {
//     if (checkForSequence(board[i], board[i + 3], board[i + 6])) {
//       console.log("COLOMNS Winner");
//       return true;
//     }
//   }

//   // diagnal 1
//   if (board[0] === board[4] && board[4] === board[8]) {
//     console.log("DIAGNOL winner");
//     return true;
//   }

//   // diagnal 2
//   if (board[2] === board[4] && board[4] === board[6]) {
//     console.log("DIAGNOL winner");
//     return true;
//   }
// };
