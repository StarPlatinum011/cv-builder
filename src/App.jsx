import { useState } from 'react'
import './App.css'
import Education from "./components/Education"  
import Skills from './components/Skills'
import Experience from './components/Experience'
import PersonalDetails from './components/PersonalDetails'
import DefaultData from "./components/DefaultData"

function App() {
  const generateDefaultData = DefaultData();
  const [personalDetails, setPersonalDetails] = useState(generateDefaultData.personalDetails);
  const [education, setEducation] = useState(generateDefaultData.education);
  const [experience, setExperienDetails]= useState(generateDefaultData.experience);
  const[skills, setSkills] = useState(generateDefaultData.skills);

  //Update the details of personalDetails component
  function updatePersonalDetails(e) {
    console.log('this has been pressed!', e.target.value)
    const name = e.target.name;
    const value = e.target.value;
    setPersonalDetails((values) => ({ ...values, [name]: value }));
  }

  //handle the deletion of personal details prop
  function handleDeletePersonalDetails() {
    setPersonalDetails({
      fullName:"",
      email:"",
      address:"",
      contact:"",

    })
  }
  //update the details of experience
  function updateExperience(e) {
    const name = e.target.name;
    const value = e.target.value;

    setExperienDetails((exps) =>({...exps, [name]: value}))
  }

//update the education details
function updateEducation(e) {
  const name = e.target.name;
  const value = e.target.value;

  setEducation((edus) =>({...edus, [name]: value}))
}

// update skills details
function updateSkills(e) {
  const name = e.target.name;
  const value = e.target.value;

  setSkills((skills) =>({...skills, [name]: value}))
}

  return (
    <div className="container-wrap">
      <div className='left-container'>
        <PersonalDetails
          fullName={personalDetails.fullName}
          contact={personalDetails.contact}
          address = {personalDetails.address}
          email = {personalDetails.email}
          handleChange = {updatePersonalDetails}
          handleDelete={handleDeletePersonalDetails}
        />
        
        {experience.map((item) => {
          return(
            <Experience
              key={item.id}
              post={item.post}
              company={item.company}
              startDate = {item.startDate}
              endDate = {item.endDate}
              responsibilities = {item.responsibilities}
              changeExperience = {updateExperience}
            />
          )
        })}
        

  
        {education.map((item) => {
          return(
            <Education
            key = {item.id}
            institution = {item.institution}
            startDate = {item.startDate}
            endDate = {item.endDate}
            degree = {item.degree}
            grade = {item.grade}
            changeEducation = {updateEducation}
            />
          )
        })}
        
        {skills.map((item) => {
            return(
              <Skills
              key ={ item.id}
              skillName = {item.skillName}
              changeSkills = {updateSkills}
          
        />
            )
          })}
        

      </div>
      <div className='right-container'>

      </div>
    </div>
    
  )
}

export default App
