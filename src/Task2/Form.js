import React, { useState } from 'react'

const Form = () => {

    const [Address, setAddress] = useState({
        address: ["address 1", "address 2"]
    })

    const [Country, setCountry] = useState(["Afghanistan", "Albania", "India", "Indonesia"])
    const [State, setState] = useState(["Gujarat", "Jharkhand", "Odisha", "Uttarakhand"])
    const [City, setCity] = useState(["surat", "anand", "bhavnagar", "palanpur"])

    const clickHandler = () => {
        setAddress({
            address: ["address 1", "address 2", "address 3"]
        })
    }
    const removeHandler = () => {
        setAddress({
            address: ["address 1", "address 2"]
        })
    }
    return (
        <div>
            {Address.address.map((item, index) => {
                return (<>
                    <p>Address {index+1}</p>
                    <input type="text" />
                </>)
            })}
            <br />
            <label>Country:</label>
            <select name="country">
                {Country.map((country) => {
                    return <option value="volvo">{country}</option>
                })}
            </select>
            <br />

            <label>State:</label>
            <select name="state">
                {State.map((state) => {
                    return <option value="volvo">{state}</option>
                })}
            </select>
            <br />

            <label>city:</label>
            <select name="city">
                {City.map((city) => {
                    return <option value="volvo">{city}</option>
                })}
            </select>
            <br />
            {Address.address.length === 2 ?
                <button onClick={clickHandler}>Add Address</button>
            :
                <button onClick={removeHandler}>Remove Address</button>
            }

        </div>
    )
}

export default Form


