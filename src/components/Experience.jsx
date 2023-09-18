/* eslint-disable react/prop-types */
import '../styles/index.css'

export default function Experience(
    {post,
    company,
    startDate,
    endDate,
    responsibilities, 
    changeExperience}
){

    return(
        <>
            <div className='sub-container-header'>
                <h2>Experiences</h2>
                <button>...</button>
            </div>
            <div className='sub-container'>
                <label>Position: </label>
                <input
                    name="post"
                    type="text"
                    value={post}
                    onChange={changeExperience}
                />
            </div>
            <div className='sub-container'>
                <label>Company: </label>
                <input
                    name="company"
                    type="text"
                    value={company}
                    onChange={changeExperience}
                />
            </div>

            <div className='sub-container'>
                <label>Start Date: </label>
                <input
                    name="startDate"
                    type="text"
                    value={startDate}
                    onChange={changeExperience}
                />
            </div>

            <div className='sub-container'>
                <label>End Date: </label>
                <input
                    name="endDate"
                    type="text"
                    value={endDate}
                    onChange={changeExperience}
                />
            </div>
            <div className='sub-container'>
                <label>Responsibilities:</label>
                <input
                    name="responsibilities"
                    type="text"
                    value={responsibilities}
                    onChange={changeExperience}
                />
                <button>Add</button>
            </div>  
        </>
    )
}