import React from 'react'
import "./style.css"

const CheckOut = () => {
    return (
        <div className='UserForm'>
            <h1>Please provide below details:</h1>
            <form>
                <fieldset>
                    <label>
                        <p>Name:</p> 
                        <input name='name'/>
                    </label>
                    <label>
                        <p>Billing Address:</p> 
                        <input bill='bill'/>
                    </label>
                    <label>
                        <p>Delivery Address:</p> 
                        <input delivery='delivery'/>
                    </label>
                    <label>
                        <p>Telephone Number:</p> 
                        <input tel='tel'/>
                    </label>
                    <label>
                        <p>Current Date:</p> 
                        <input date='date'/>
                    </label>
                </fieldset>
            <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default CheckOut
