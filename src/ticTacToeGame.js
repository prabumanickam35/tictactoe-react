import Message from './components/message'
import Box from './components/box'
import './ticTacToe.css';
import { useState } from 'react';

const TicTacToeGame = () => {
  
  const [cell, setCell] = useState([" "," "," "," "," "," "," "," "," "]);

  const [turn, setTurn] = useState("X")

  const [message, setMessage] = useState("")

  const [winner, setWinner] = useState("")

  const whosturn = () => {
    if(turn === 'X') {
      setTurn('O');
    } else {
      setTurn('X');
    }
  }

  const gameResult = (boxes, turn) => {
    

    const combos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [0, 4, 8]
    ];

    for(let i = 0; i < combos.length; i++) {
      if(boxes[combos[i][0]] === boxes[combos[i][1]] &&  boxes[combos[i][0]] === boxes[combos[i][2]] &&  boxes[combos[i][2]] === turn) {
          return true;
        }
    }

    console.log('No results arrived')
    return false;
  }

  const movePossible = (boxes) => {
    for(let i = 0; i < boxes.length; i++) {
      if(boxes[i] === " ") return true;
    }

    return false;
  }



  const handleClick = (pos) => {
    if(winner) return

    let boxes = [...cell];
    console.log(pos);
    
    if(boxes[pos] === " ") {
      boxes[pos] = turn;
      setMessage("")
      setCell([...boxes])

      let result  = gameResult(boxes, turn);

      if(result) {
        setWinner(turn)
        setMessage(turn + " wins!")
      } else {
        if(movePossible(boxes)) {
          whosturn();
        } else {
          setWinner("-")
          setMessage("Tie : No more possible moves!")
        }
      }
    } else {
      if(movePossible(boxes)) {
        setMessage("Can't click again on this box")
      } else {
        setMessage("Tie : No more possible moves!")
      }
    }

    

    
   
    console.log(cell);

  }

  const startOver = () => {
    console.log("Starting over the game")
    setCell([" "," "," "," "," "," "," "," "," "]);
    setMessage("")
    setWinner("")
  }

  return <div className='tic-tac-toe'>
    <h1> Turn : {turn} </h1>
<div className='container'>
    <table>
      <tbody>
      <tr>
        <Box handleClick={() => handleClick(0)} data={cell[0]}/>
        <Box handleClick={() => handleClick(1)} data={cell[1]}/>
        <Box handleClick={() => handleClick(2)} data={cell[2]}/>
      </tr><tr>
        <Box handleClick={() => handleClick(3)} data={cell[3]}/>
        <Box handleClick={() => handleClick(4)} data={cell[4]}/>
        <Box handleClick={() => handleClick(5)} data={cell[5]}/>
      </tr><tr>
        <Box handleClick={() => handleClick(6)} data={cell[6]}/>
        <Box handleClick={() => handleClick(7)} data={cell[7]}/>
        <Box handleClick={() => handleClick(8)} data={cell[8]}/>
      </tr>
      </tbody>
    </table>
    </div>
    <h3>{message}</h3>
    <Message message={message} className="msg"/>
    <button onClick={startOver} className="btn">Start Over</button>
  </div>
}

export default TicTacToeGame;
