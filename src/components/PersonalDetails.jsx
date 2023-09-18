/* eslint-disable react/prop-types */
import { useState } from "react"
import '../styles/index.css'

function PersonalDetails({
    fullName,
    contact,
    address,
    email,
    handleChange,
    handleDelete}
    ) {

    const [editMode, setEditMode] = useState(true)

    function isSubmit(e) {
        e.preventDefault();
        setEditMode(false)
    }
    // eslint-disable-next-line no-unused-vars
    function handleEdit(e) {
        setEditMode(true);
    }

    //pass the editmode condition 
    return editMode? ( 
        <form onSubmit={isSubmit}>
            <div className='sub-container-header'>
                <h2>Personal Informations</h2>
                <button>...</button>
            </div>
            <div className='sub-container'>
                <label>Full Name: </label>
                <input
                    onChange={handleChange}
                    id='fullName'
                    name="fullName"
                    type="text"
                    defaultValue={fullName}
                    required
                />
            </div>
            
            <div className='sub-container'>
                <label>Email: </label>
                <input
                    id='email'
                    name="email"
                    type="email"
                    value={email}
                    required
                    onChange={handleChange}
                />
            </div>
            
            <div className='sub-container'>
                <label>Contact: </label>
                <input
                    id='contact'
                    name="contact"
                    type="tel"
                    value={contact}
                    required
                    onChange={handleChange}
                />
            </div>

            <div className='sub-container'>
                <label>Address: </label>
                <input
                    id='address'
                    name="address"
                    type="text"
                    value={address}
                    required
                    onChange={handleChange}
                /> 
                <button>Add</button>

            </div>
        </form> 

    ): (
        <div className="displayContents">
            <p>{fullName}</p>
            <p>{contact}</p>
            <p>{address}</p>
            <p>{email}</p>
            <button onClick={handleEdit}></button>
            <button onClick={handleDelete}></button>
        </div>
        
    )
}
export default PersonalDetails;