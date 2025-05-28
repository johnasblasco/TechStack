import React from 'react'

const styles = {
    input: {
        textAlign: 'center' as const,
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        margin: '10px',
        width: '200px',
        fontSize: '16px',
        color: '#333',
        backgroundColor: '#fff',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
    }
}


export const InputFirstNumber = (
    { value, onChange }: {
        value: number,
        onChange: (e: number) => void
    }

) => {
    return (
        <input value={value} onChange={(e) => onChange(Number(e.target.value))} style={styles.input} type="text" placeholder='Enter first number' />
    )
}

export const InputSecondNumber = (
    { value, onChange }: {
        value: number,
        onChange: (e: number) => void
    }

) => {
    return (
        <input value={value} onChange={(e) => onChange(Number(e.target.value))} style={styles.input} type="text" placeholder='Enter second number' />
    )
}