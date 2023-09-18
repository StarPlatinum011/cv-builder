/* eslint-disable react/prop-types */
import '../styles/index.css'

export default function Skills(
    {skillName,
    changeSkills}
){
    
    return(
        <>
            <div className='sub-container-header'>
                <h2>Skills</h2>
                <button>...</button>
            </div>
            <div className='sub-container'>
                <input
                    name="skillName"
                    type="text"
                    defaultValue={skillName}
                    onChange={changeSkills} 
                />
                <button>Add</button>


            </div>
        </>

    )
}