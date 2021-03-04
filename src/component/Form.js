import React  from 'react'

import './Form.css';

function Signup() {
    return (
        <>
        <div className = "wrapper">         
           <div className = "form-wrapper">
                <h1>Create Account</h1>
                <form >
                   <div className = "dish">
                       <label htmlFor = "dish">Dish</label>
                       <input 
                          type = "text"
                          className = ""
                          placeholder = "Name of the dish"
                          name = "dish"
                          />
                   </div>
                   <div className = "cook">
                       <label htmlFor = "cook">Steps to cook</label>
                       <input 
                          type = "text"
                          className = ""
                          placeholder = "Steps to cook"
                          name = "cook"
                          />
                   </div><div className = "picture">
                       <label htmlFor = "picture">Picture</label>
                       <input 
                          type = "text"
                          className = ""
                          placeholder = "Picture of dish in the form of URL"
                          name = "picture"
                          />
                   </div>
                   <div className = "list">
                       <label htmlFor = "Name">Ingredient Name</label>
                       <input 
                          type = "text"
                          className = ""
                          placeholder = "Ingredient Name"
                          name = "Name"
                          />
                       <label htmlFor = "quantity">Ingredient quantity</label>
                       <input 
                          type = "text"
                          className = ""
                          placeholder = "Ingredient quantity"
                          name = "quantity"
                          />
                       <label htmlFor = "measurement">Unit of measurement for ingredient qty</label>
                        <input 
                          type = "text"
                          className = ""
                          placeholder = "Unit of measurement for ingredient qty"
                          name = "measurement"
                          />
                   </div>
                   <div className = "submit">
                        <button type = "submit">Submit</button>
                   </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default Signup;