import React from 'react';
import './styles.css';
import { useState } from 'react';
import Tags from '../../components/Tags/Tags';
import Level from '../../components/Level/Level';
import { tagsArray, levelsArray } from '../../utils/utils';
import axios from 'axios';
import api from '../../services/api';

export default function AddJob() {

  const [tags, setTags] = useState(tagsArray);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const [ addingJobs, setAddingJobs] = useState({
  title: '',
  company: {
    name: '',
    contactName: '',
    contactNumber: '',
    email: '',
    website: ''
  },
  location: '',
  term: '',
  level: '',
  wage: 0,
  description: '',
  tags: [] //remove this
  });

  const tagsToggleSelected = (name) => {
    const index = tags.findIndex((tag) => tag.name === name);
    const tagsCopy = [...tags];
    tagsCopy[index].selected = !tagsCopy[index].selected;
    setTags(tagsCopy);
  }

  const levelToggleSelected = (name, index) => {
    setSelectedIndex(index)
    setAddingJobs({...addingJobs, level: name})
    console.log(selectedIndex)
  }

  const handleChange = (event) => {
    const copy = {...addingJobs}
    copy[event.target.name] = event.target.value
    setAddingJobs(copy)
    console.log(addingJobs)
  }

  const handleCompanyChange = (event) => {
    const copy = {...addingJobs}
    copy.company[event.target.name] = event.target.value
    setAddingJobs(copy)
    console.log(addingJobs)
  }

  const handleSubmit = () => {
    api.post('/job', addingJobs)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

      <label for="title">Job Title:</label>
      <input type="text" id="title" name="title" value={addingJobs.title} onChange={handleChange}></input> <br></br>

      <label for="name">Company Name:</label>
      <input type="text" id="name" name="name" value={addingJobs.company.name} onChange={handleCompanyChange}></input> <br></br>

      <label for="contactName">Contact Name:</label>
      <input type="text" id="contactName" name="contactName" value={addingJobs.company.contactName} onChange={handleCompanyChange}></input> <br></br>

      <label for="contactNumber">Contact Number:</label>
      <input type="text" id="contactNumber" name="contactNumber" value={addingJobs.company.contactNumber} onChange={handleCompanyChange}></input> <br></br>

      <label for="email">E-mail:</label>
      <input type="text" id="email" name="email" value={addingJobs.company.email} onChange={handleCompanyChange}></input> <br></br>

      <label for="website">Website:</label>
      <input type="text" id="website" name="website" value={addingJobs.company.website} onChange={handleCompanyChange}></input> <br></br>

      <label for="location">Job Location:</label>
      <input type="text" id="location" name="location" value={addingJobs.location} onChange={handleChange}></input> <br></br>

      <label for="term">Job Term:</label>
      <input type="text" id="term" name="term" value={addingJobs.term} onChange={handleChange}></input> <br></br>

      <label for="Level">Job Level:</label>
      {levelsArray.map((level, index) => <Level name={level} index={index} toggleSelected={levelToggleSelected} selected={selectedIndex} />)} <br></br>

      <label for="wage">Wage:</label>
      <input type="text" id="wage" name="wage" value={parseInt(addingJobs.wage)} onChange={handleChange}></input> <br></br>

      <label for="description">Job Description:</label>
      <input type="text" id="description" name="description" value={addingJobs.description} onChange={handleChange}></input> <br></br>

      {tags.map(tag => <Tags name={tag.name} selected={tag.selected} toggleSelected={tagsToggleSelected} />)}

      <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
