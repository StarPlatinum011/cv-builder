/* eslint-disable react/prop-types */
import "../styles/template.css"

export default function CVTemplate(
    {
    personalDetails,
    education,
    experience,
    skills
    }
){
    return(
        <>
            <div className="container-top">
                <div className="top-items">
                    <h1>{personalDetails.fullName}</h1>
                    <div className="merged">
                        <p>{personalDetails.email} | </p>
                        <p>{personalDetails.contact}</p>
                    </div>
                    <p>{personalDetails.address}</p>
                </div>              
            </div>
            <div className="container-bottom">
                <h2>Education</h2> <hr/>
                {education.map((edu, index)=>{
                    return(       
                    <div key={index} className="education">
                        <div className="merged">
                            <p><strong>{edu.institution } : </strong> </p>
                            <p> {edu.company}</p>
                            <p>{edu.startDate} - </p>
                            <p>{edu.endDate}</p>
                        </div>
                        <p>{edu.degree}</p>
                        <p>{edu.grade}</p>
                    </div>
                    )
        })}

                
              <h2>Experience</h2> <hr/>
                {experience.map((exp, index) => {
                    return(
                        <div key={index} className="experience">
                            <div className="merged">
                                <p><strong>{exp.post} : </strong></p>
                                <p>{exp.startDate} - </p>
                                <p>{exp.endDate}</p>
                            </div>
                            <h4>{exp.company}</h4>
                            <p>{exp.responsibilities}</p>
                        </div>
                        
                    )
                })}
                
                <h2>Skills</h2><hr/>
                {skills.map((skill, index) => {
                    return(
                        <div key={index} className="skills">
                            <ul>
                                <li>{skill.skillName}</li>
                            </ul>
                        </div>
                    )
                    

                })}
            </div>
        </>
    )
}