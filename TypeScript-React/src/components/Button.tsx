import React from 'react'

const styles = {

    button1: {
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer'
    },
    button2: {
        backgroundColor: 'red',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer'
    }

}

export const SubButton = ({
    onClick
}: {
    onClick: () => void
}) => {

    return (
        <button onClick={onClick} style={styles.button1}>Subtraction</button>
    )
}


export const AddButton = ({ onClick }
    : {
        onClick: () => void

    }) => {

    return (
        <button style={styles.button2} onClick={onClick}>Addition</button>
    )
}
