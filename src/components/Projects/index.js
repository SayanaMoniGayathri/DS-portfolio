import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects, Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'ML/DL' ?
            <ToggleButton active value="ML/DL" onClick={() => setToggle('ML/DL')}>ML/DL</ToggleButton>
            :
            <ToggleButton value="ML/DL" onClick={() => setToggle('ML/DL')}>ML/DL</ToggleButton>
          }
          <Divider />
          {toggle === 'Databases' ?
            <ToggleButton active value="Databases" onClick={() => setToggle('Databases')}>Databases</ToggleButton>
            :
            <ToggleButton value="Databases" onClick={() => setToggle('Databases')}>Databases</ToggleButton>
          }
          <Divider />
          {toggle === 'Others' ?
            <ToggleButton active value="Others" onClick={() => setToggle('Others')}>Others</ToggleButton>
            :
            <ToggleButton value="Others" onClick={() => setToggle('Others')}>Others</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects