/* eslint-disable react/prop-types */
import { useState } from 'react'
import CheckIcon from '@rsuite/icons/Check';
import '../styles/index.css'

export default function Experience(
    {
    id,
    post,
    company,
    startDate,
    endDate,
    responsibilities, 
    changeExperience,
    deleteExperience,
    editID,
    handleEditID
}
){

    const [editMode, setEditMode] = useState(true)

    // handleEditID(id)

    function handleEdit() {
        setEditMode(true);
        handleEditID(id);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setEditMode(false);
        handleEditID(null);
    }

    //handle delete and set the editId to null
    function handleDelete() {
        //send the id as key to filter the item
        deleteExperience(id);
        handleEditID(null);
    }

    console.log('and this is a real id', id)
    console.log(' this is a ', editID)


    return editMode && editID===id?(
        <>
            <form key={id} onSubmit={handleSubmit}>
                <div className='sub-container'>
                    <label>Position: </label>
                    <input
                        id='post'
                        name="post"
                        type="text"
                        value={post}
                        onChange={changeExperience}
                        required
                        data-key={id}
                    />
                </div>
                <div className='sub-container'>
                    <label>Company: </label>
                    <input
                        id='company'
                        name="company"
                        type="text"
                        value={company}
                        onChange={changeExperience}
                        required
                        data-key={id}
                    />
                </div>

                <div className='sub-container'>
                    <label>Start Date: </label>
                    <input
                        id='startDate'
                        name="startDate"
                        type="text"
                        value={startDate}
                        onChange={changeExperience}
                        required
                        data-key={id}
                    />
                </div>

                <div className='sub-container'>
                    <label>End Date: </label>
                    <input
                        id='endDate'
                        name="endDate"
                        type="text"
                        value={endDate}
                        onChange={changeExperience}
                        required
                        data-key={id}
                    />
                </div>
                <div className='sub-container'>
                    <label>Responsibilities:</label>
                    <textarea
                        id='responsibilities'
                        name="responsibilities"
                        type="text"
                        value={responsibilities}
                        onChange={changeExperience}
                        required
                        data-key={id}
                        
                    />
                    
                </div>  
                <button className='iso-btn' type='submit'>Save</button>
            </form>
        </>
    ) : (
        <div className='display-contents'>
        
        <p><strong>{company} </strong> - {post}</p>
            <button onClick={handleEdit}>EDIT</button>
            <button onClick={handleDelete}>DELETE</button>
        </div>
    )
}