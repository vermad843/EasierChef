import React, {useState,useCallback}  from 'react';
import './Form.css';


function Form() {
    const [name, setName] = useState([{
        dish : '',
        cook : '',
        picture : '',
        name : '',
        quantity : '',
        measurement : ''
    }]);
  
    const [userDetails, setUserDetails] = useState([]);


    const handleChange = useCallback((e) => {
        setName({
            ...name,
            [e.target.name] : e.target.value
        }) 
    });

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        setUserDetails([
                ...userDetails,
                {
                    dish : name.dish,
                    cook : name.cook,
                    picture : name.picture,
                    name : name.name,
                    quantity : name.quantity,
                    measurement : name.measurement
                }
        ])
    });

    return (
        <>
        <div className = "wrapper">         
           <div className = "form-wrapper">
                <h1>Create Account</h1>
                <form onSubmit = {handleSubmit}>
                   <div className = "dish">
                       <label htmlFor = "dish">Dish</label>
                       <input 
                          type = "text"
                          className = ""
                          placeholder = "Name of the dish"
                          name = "dish"
                          value = {name.dish}
                          onChange = {handleChange}
                          />
                   </div>
                   <div className = "cook">
                       <label htmlFor = "cook">Steps to cook</label>
                       <input 
                          type = "text"
                          className = ""
                          placeholder = "Steps to cook"
                          name = "cook"
                          value = {name.cook}
                          onChange = {handleChange}
                          />
                   </div>
                   <div className = "picture">
                       <label htmlFor = "picture">Picture</label>
                       <input 
                          type = "text"
                          className = ""
                          placeholder = "Picture of dish in the form of URL"
                          name = "picture"
                          value = {name.picture}
                          onChange = {handleChange}
                          />
                   </div>
                   <div className = "list">
                       <label htmlFor = "name">Ingredient Name</label>
                       <input 
                          type = "text"
                          className = ""
                          placeholder = "Ingredient Name"
                          name = "name"
                          value = {name.name}
                          onChange = {handleChange}
                          />
                       <label htmlFor = "quantity">Ingredient quantity</label>
                       <input 
                          type = "text"
                          className = ""
                          placeholder = "Ingredient quantity"
                          name = "quantity"
                          value = {name.quantity}
                          onChange = {handleChange}
                          />
                       <label htmlFor = "measurement">Unit of measurement for ingredient qty</label>
                        <input 
                          type = "text"
                          className = ""
                          placeholder = "Unit of measurement for ingredient qty"
                          name = "measurement"
                          value = {name.measurement}
                          onChange = {handleChange}
                          />
                   </div>
                   <div className = "submit">
                        <button type = "submit">Submit</button>
                   </div>
                </form>
                <ul>
                    {
                        userDetails.map((user,i) => (
                            <li key = {i}>
                              Dish :       <h1>{user.dish}</h1>
                              Cook :       <h1>{user.cook}</h1>
                              Picture :    <h1>{user.picture}</h1>
                              Name :       <h1>{user.name}</h1>
                              Quantity :   <h1>{user.quantity}</h1>
                              Measurement: <h1>{user.measurement}</h1>
                              <br/>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
        </>
    )
}

export default Form;