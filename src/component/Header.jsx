import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'


const Header = () => {
    const number = useSelector(store => store.number)

    useEffect(() => {
        console.log("Header")
    }, [])



    return (
        <>
            <div className="container" style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }} >
                <h1>Header is here</h1>
                <span style={{
                    display: "inline-block",
                    backgroundColor: "blueviolet",
                    padding: "10px 18px",
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "10px",
                    boxShadow: "inset 0 0 5px 111111"
                }}  >count is: {number.number}</span>
            </div>
        </>
    )
}

export default Header