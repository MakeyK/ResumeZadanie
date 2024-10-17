import React, {useContext, useState}  from "react";
import {Card, Container, Form, Button, Col} from 'react-bootstrap'
import { MAIN_ROUTE } from "../utils/consts";
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row'
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import NavBar from "../components/NavBar";
import Markiza from "../Files/markiza.jpg"
import { FaUser, FaGraduationCap, FaTools, FaBriefcase, FaInfoCircle, FaPhone, FaEnvelope } from 'react-icons/fa';
import { BiFontFamily } from "react-icons/bi";


const MainPage = observer(() => {
    document.body.style.backgroundColor="white"
    const resumeData = {
        fullName: "Макеева Маркиза Владимировна",
        birthDate: "24.04.2024",
        education: "Бакалавр информационных технологий",
        skills: ["JavaScript", "React", "Node.js", "CSS", "HTML", "C++"],
        workExperience: "3 года опыта работы в разработке веб-приложений.",
        aboutMe: "Я увлечённый разработчик, стремящийся к постоянному обучению и самосовершенствованию.",
        contacts: {
          phone: "+7 (977) 318-50-12",
          email: "markiza05@gmail.com"
        }
      };
    return (
        <Container
        style = {{backgroundColor:'#D0D0D0', borderRadius: '15px', width: '1240px', height: '1754px', marginTop:'6px', fontFamily:"Play", paddingTop: '10px'}}>            
        <Card style={{marginLeft: '5px', marginRight: '5px', borderRadius: '7px', height: '30px', backgroundColor: '#42AAFF'}} fixed='top'></Card>      
        <div style={{display: 'flex',flexGrow: 1, alingItems: 'center', fontWeight: 'bold'}}>

        <img src={Markiza} style={{width: '200px', height:'250px', marginLeft: '35px', display: 'inline-block', marginRight:'30px'}}></img>  
        
        <p style={{width:'300px', fontSize:'35px', display: 'inline-block' }}>
        {resumeData.fullName}<br></br><br></br>
        {resumeData.birthDate}
        </p>
        </div>

    
        <Card style={{width:'370px', marginTop: '20px', borderRadius: '35px', border:'5px solid #42AAFF', backgroundColor:'#D0D0D0', marginLeft: '20px' }}>
          <p style={{ fontSize: '40px', display: 'flex', alignItems: 'center', textDecoration: 'underline',  marginLeft: '20px' }}>
            <FaGraduationCap style={{ marginRight: '5px' }} /> Образование
          </p><p style={{fontSize: '25px', marginLeft: '20px'}}>
          {resumeData.education}</p>
        </Card>


        <Card style={{width:'370px', marginTop: '20px', borderRadius: '35px', border:'5px solid #42AAFF', backgroundColor:'#D0D0D0', marginLeft: '20px' }}>
          <p style={{ fontSize: '40px', display: 'flex', alignItems: 'center', textDecoration: 'underline',  marginLeft: '20px' }}>
            <FaTools style={{ marginRight: '5px' }} /> Навыки
              </p>
          <ul style={{marginLeft: '10px', fontSize: '20px'}}>
            {resumeData.skills.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
        </Card>
        </Container>
    );
});

export default MainPage;