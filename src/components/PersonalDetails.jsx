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

    const [editMode, setEditMode] = useState(false)

    const isSubmit = (e) => {
        e.preventDefault();
        setEditMode(false)
    }
    // eslint-disable-next-line no-unused-vars
    const handleEdit = (e) => {
        e.preventDefault()
        setEditMode(true);
    }

    //pass the editmode condition 
    return editMode? ( 
        <form onSubmit={isSubmit}>            
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
                <button className="iso-btn">Add</button>

            </div>
        </form> 

    ): (
        <div className="display-contents">
            <p>{fullName}</p>
            <p>{contact}</p>
            <p>{address}</p>
            <p>{email}</p>
            <button id="edit-btn" onClick={handleEdit}> EDIT</button>
            <button id='delete-btn' onClick={handleDelete}>DELETE</button>
        </div>
        
    )
}
export default PersonalDetails;