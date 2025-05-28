import React, { useState, useEffect } from 'react'
import { SubButton, AddButton } from './components/Button'
import { InputFirstNumber, InputSecondNumber } from './components/Input'

export const App = () => {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);

  useEffect(() => {
    console.log(num1, num2);
  }, [num1, num2]);

  const subFunction = (num1: number, num2: number) => {
    alert(num1 - num2);
    console.log(num1 - num2);
  }
  const addFunction = (num1: number, num2: number) => {
    alert(num1 + num2);
    console.log(num1 + num2);
  }


  return (
    <div style={styles.container}>
      <h1 style={styles.text}>Main App</h1>

      <InputFirstNumber value={num1} onChange={(e: number) => setNum1(e)} />
      <InputSecondNumber value={num2} onChange={(e: number) => setNum2(e)} />

      <div style={styles.flexContainer}>
        <SubButton onClick={() => subFunction(num1, num2)} />
        <AddButton onClick={() => addFunction(num1, num2)} />
      </div>
    </div>
  );
};

// CSS styles
const styles = {
  container: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center' as const,
    height: '100vh',
  },
  flexContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40vh',
    gap: '30px',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  text: {
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '0',
    padding: '0',
  },
};
