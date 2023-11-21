import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementNumber, decrementNumber } from '../redux/NumberReducer/number.action'

const Counter = () => {
    const dispatch = useDispatch()
    const number = useSelector(store => store.number)


    // useEffect(() => {
    //     console.log(number)
    // }, [])

    const incrementHandler = () => {
        dispatch(incrementNumber(number.number))

    }

    const decrementHandler = () => {
        dispatch(decrementNumber(number.number))

    }

    useEffect(() => {
        localStorage.setItem("number", number.number)
    }, [number.number])

    return (
        <>
            <button style={
                {
                    display: "inline-block",
                    width: "50px",
                    height: "50px",
                    backgroundColor: "green",
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "bold",
                    borderRadius: "10px",
                    border: "none",
                    margin: "10px",
                    cursor: "pointer"
                }
            }

                onClick={decrementHandler}
            >-</button>
            <span>Counter is: {number.number} </span>
            <button style={
                {
                    display: "inline-block",
                    width: "50px",
                    height: "50px",
                    backgroundColor: "green",
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "bold",
                    borderRadius: "10px",
                    border: "none",
                    margin: "10px",
                    cursor: "pointer"
                }
            }
                onClick={incrementHandler}

            >+</button>

        </>
    )
}

export default Counter