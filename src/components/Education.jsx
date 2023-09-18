/* eslint-disable react/prop-types */
import '../styles/index.css'

export default function Education(
    {institution,
    startDate,
    endDate,
    degree,
    grade,
    changeEducation}
){
    return(
        <>
            <div className='sub-container-header'>
                <h2>Education</h2>
                <button>...</button>
            </div>
            <div className='sub-container'>
                <label>Institution: </label>
                <input
                    name="institution"
                    defaultValue={institution}
                    type="text"
                    onChange={changeEducation}
                />
                        </div>
                        <div className='sub-container'>
                        <label>Start Date: </label>
                <input
                    name="startDate"
                    defaultValue={startDate}
                    type="text"
                    onChange={changeEducation}
                />
                        </div>

                        <div className='sub-container'>
                        <label>End Date: </label>
                <input
                    name="endDate"
                    defaultValue={endDate}
                    type="text"
                    onChange={changeEducation}
                />
                        </div>

                        <div className='sub-container'>
                        <label>Degree: </label>
                <input
                    name="degree"
                    defaultValue={degree}
                    type="text"
                    onChange={changeEducation}
                />
                        </div>

                        <div className='sub-container'>
                        <label>Grade: </label>
                <input
                    name="grade"
                    defaultValue={grade}
                    type="text"
                    onChange={changeEducation}
                />

                <button>Add</button>
            </div>        
        </>
    )
}