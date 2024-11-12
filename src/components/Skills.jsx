/* eslint-disable react/prop-types */
import EditIcon from '@rsuite/icons/Edit';
import TrashIcon from '@rsuite/icons/Trash';
import { useState } from 'react'
import '../styles/index.css'

export default function Skills(
    {
    id,
    editID,
    changeSkillsEditID,
    deleteSkills,
    skillName,
    changeSkills}
){
    const [isEditable, setIsEditable] = useState(true)

    function handleEdit() {
        setIsEditable(true);
        changeSkillsEditID(id);
    }

    function handleDelete() {
        deleteSkills(id);
        changeSkillsEditID(null);
    }

    function handleSubmit(e){ 
        e.preventDefault();
        setIsEditable(false);
        changeSkillsEditID(null);
    }
    return isEditable && id === editID?(
        <>
        <form onSubmit={handleSubmit} key={id}>

       
            <div className='sub-container'>
                <input
                    id='skillname'
                    name="skillName"
                    type="text"
                    defaultValue={skillName}
                    onChange={changeSkills} 
                    data-key = {id}
                    required
                />
            </div>
            <button className='iso-btn' type='submit'>SAVE</button>
        </form>
        </>

    ): 
    (
        <div className='skill-group'>
            <p>{skillName}</p>
            <div> <button onClick={handleEdit}><EditIcon/></button>
            <button onClick={handleDelete}><TrashIcon/></button></div>
        </div>
    )
}