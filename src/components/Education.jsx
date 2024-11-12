/* eslint-disable react/prop-types */
import { useState } from 'react'
import '../styles/index.css'

export default function Education(
    {
    id,
    editID,
    changeEduEditID,
    institution,
    startDate,
    endDate,
    degree,
    grade,
    changeEducation,
    deleteEducation}
){

    const [isEditable, setEditable] = useState(true)

    function handleEdit() {
        setEditable(true);
        changeEduEditID(id);
    }

    function handleDelete() {
        deleteEducation(id);
        changeEduEditID(null);

    }

    function eduSubmit(e) {
        e.preventDefault();
        setEditable(false);
        changeEduEditID(null);
    }


    return isEditable && id===editID ? (
        <>
        <form key={id} onSubmit={eduSubmit}>
            <div className='sub-container'>
                <label>Institution: </label>
                <input
                    id='institution'
                    name="institution"
                    defaultValue={institution}
                    type="text"
                    onChange={changeEducation}
                    data-key = {id}
                    required
                />
            </div>
            <div className='sub-container'>
            <label>Start Date: </label>
                <input
                    id='startDate'
                    name="startDate"
                    defaultValue={startDate}
                    type="text"
                    onChange={changeEducation}
                    data-key = {id}
                    required
                />
            </div>

            <div className='sub-container'>
            <label>End Date: </label>
                <input
                    id='endDate'
                    name="endDate"
                    defaultValue={endDate}
                    type="text"
                    onChange={changeEducation}
                    data-key = {id}
                    required
                />
            </div>

            <div className='sub-container'>
            <label>Degree: </label>
                <input
                    id='degree'
                    name="degree"
                    defaultValue={degree}
                    type="text"
                    onChange={changeEducation}
                    data-key = {id}
                    required
                />
            </div>

            <div className='sub-container'>
            <label>Grade: </label>
                <input
                    id='grade'
                    name="grade"
                    defaultValue={grade}
                    type="text"
                    onChange={changeEducation}
                    data-key = {id}
                    required
                />

            </div>   
            <button className='iso-btn' type='submit'>SAVE</button>

            </form>     
        </>
    ): (
        <div className='display-contents'>
            <p>{institution}</p>
            <button onClick={handleEdit}>EDIT</button>
            <button onClick={handleDelete}>DELETE</button>
        </div>
    )
}