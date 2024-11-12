import { useState } from 'react'
import uniqid from 'uniqid'
import './App.css'
import Education from "./components/Education"  
import Skills from './components/Skills'
import Experience from './components/Experience'
import PersonalDetails from './components/PersonalDetails'
import DefaultData from "./components/DefaultData"
import CVTemplate from "./components/CVTemplate"
// import { func } from 'prop-types'

function App() {
  const generateDefaultData = DefaultData();
  const [personalDetails, setPersonalDetails] = useState(generateDefaultData.personalDetails);
  const [education, setEducation] = useState(generateDefaultData.education);
  const [experience, setExperienDetails]= useState(generateDefaultData.experience);
  const[skills, setSkills] = useState(generateDefaultData.skills);

  //edit states hooks
  const[experienceEditID, setExperienceEditID] = useState(null);
  const [eduEditID, setEduEditID] = useState(null);
  const [skillsEditID, setSkillsEditID] = useState(null);

  ///////Personal Details////////
  //Update the details of personalDetails component
  function updatePersonalDetails(e) {
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

  ///////Experience////////
  //update the details of experience
  function updateExperience(e) {
      const {name, value} = e.target;
      const {key} = e.target.dataset; //retrieves data-key value from component
      const updatedExperience = experience.map((item) => {
        if(item.id==key) { //if the object id is equals to the current component key
          return{...item, [name]: value}
        }
        return{...item};
      });
      setExperienDetails(updatedExperience);
  }

//add Experience
function handleExperienceAdd() {
  const id = uniqid();
  
  setExperienDetails((prevExp) => 
    [
      ...prevExp,
      {
        id,
        company: "",
        post: "",
        startDate: "",
        endDate:"",
        responsibilities:''
      }
    ]);
  setExperienceEditID(id); //set id similar with editID so condition of editable function is met
}

//delete experience
function handleDeleteExperience(key) {
  //get a key from component and filter that out
  const removeExperience = experience.filter((item) => item.id!= key)
  setExperienDetails(removeExperience);//update details with new filtered value
}

/////Education///////
function updateEducation(e) {
  const {value, name} = e.target;
  const {key} = e.target.dataset;
  const updatedEdu = education.map((item) => {
    if(item.id === key) {
      return{...item, [name]:value}
  }
  return {...item}
})
  setEducation(updatedEdu);
}


//add education 
function addNewEducation() {
  const id = uniqid();
  setEducation((prevEdu) =>
    [
      ...prevEdu, 
      {
        id,
        institution: '',
        degree: '',
        startDate: '',
        endDate: '',
        grade: ''
      }
    ]
  )
  setEduEditID(id);
}

//delete education 
function handleDeleteEducation(key){
  const deleteEducation = education.filter((item) => item.id!==key)
  setEducation(deleteEducation)
}


///////////////Skills////////////
function updateSkills(e) {
  const {value, name} = e.target;
  const {key} = e.target.dataset;

  const newSkills = skills.map((item) => {
    if(item.id === key) {
      return{ 
        ...item, [name]: value
      }
    }
    return{ ...item}
  })

  setSkills(newSkills);
}

function deleteSkills(key) {
  const newSkills = skills.filter((item) => item.id!=key);
  setSkills(newSkills); 
}

function addNewSkill() {
  const id = uniqid();
  setSkills((prevSkills) => [
    ...prevSkills,
    {
      id,
      skillName: ""
    }
  ]);
  setSkillsEditID(id);
}

  return (
    <div className="container-wrap">
      <div className='left-container'>
      <h2>Personal Informations</h2>
        <PersonalDetails
          fullName={personalDetails.fullName}
          contact={personalDetails.contact}
          address = {personalDetails.address}
          email = {personalDetails.email}
          handleChange = {updatePersonalDetails}
          handleDelete={handleDeletePersonalDetails}
        />
        
        <h2>Experiences</h2>
        {experience && (
          <div>
            {experience.map((item) => {
            return(
              <Experience
                key={item.id}
                id={item.id}
                post={item.post}
                company={item.company}
                startDate = {item.startDate}
                endDate = {item.endDate}
                responsibilities = {item.responsibilities}
                changeExperience = {updateExperience}
                editID = {experienceEditID}
                handleEditID = {(id) => setExperienceEditID(id)}
                deleteExperience = {handleDeleteExperience}
              />
            )
          })}
        </div>
        )}
        {experienceEditID == null && (
          <button className='btn-main' onClick={handleExperienceAdd}>ADD NEW</button>
        )}
        

        <h2>Education</h2>
        {education && (
          <div>
            {education.map((item) => {
              return(
                <Education
                key = {item.id}
                id= {item.id}
                institution = {item.institution}
                startDate = {item.startDate}
                endDate = {item.endDate}
                degree = {item.degree}
                grade = {item.grade}
                editID = {eduEditID}
                changeEduEditID = {(id) => setEduEditID(id)}
                changeEducation = {updateEducation}
                deleteEducation = {handleDeleteEducation}
                />
              )
            })}
        </div>
        )}
        {eduEditID===null && (
          <button onClick={addNewEducation} className='btn-main'>ADD NEW</button>
        )}
        
        <h2>Skills</h2>
        {skills && 
          (
            <div>
              {skills.map((item) => {
                return(
                  <Skills
                  key ={ item.id}
                  id={item.id}
                  skillName = {item.skillName}
                  editID = {skillsEditID}
                  changeSkillsEditID = {(id)=>setSkillsEditID(id)}
                  changeSkills = {updateSkills}
                  deleteSkills = {deleteSkills}
                  />
                )
              })}
            </div>
          )
        }
        {skillsEditID===null &&(
          <button className='btn-main' onClick={addNewSkill}>ADD NEW</button>
        )}
        
      </div>
      <div className='right-container'>
          <CVTemplate
            personalDetails = {personalDetails}
            education = {education}
            experience = {experience}
            skills = {skills}
          />
      </div>
    </div>
    
  )
}


export default App
