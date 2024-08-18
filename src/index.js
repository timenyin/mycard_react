import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className='card'>
        <ImageHeader />
        <CardBody />
    </div>
  )
}

function ImageHeader() {
  return(
    <ProfileImage 
     imgName="imag_profile"
     imgSrc="profile.jpg"
      />
  )
}

function BadgeColor() {
  return(
    <div className="badge-container">
      <Skill skill="Technology" emoji="😀" color="badge-tech" />
      <Skill skill="JavaScript" emoji="🥘" color="badge-js" />
      <Skill skill="React" emoji="🌭" color="badge-react" />
      <Skill skill="CSS" emoji="🧑‍🏫" color="badge-css" />
      <Skill skill="Web Development" emoji="🤠" color="badge-webdev" />
    
  </div>
  )
}

function Skill (props) {
  return ( 
  <a href="#" className={`badge ${props.color}`}>{props.skill} {props.emoji}</a>

  )
}


function CardBody(){
  return (
    <div className="card-body">
       <h5 class="card-title">Harmony Kunu</h5>
       <p class="card-text">
      Passionate developer with 5 years of experience in creating beautiful and functional web applications.
    </p>
    {/* Badges */}
      <BadgeColor />
    </div>
  )
}


function ProfileImage(props) {
  return (
    <img src={props.imgSrc} alt={props.imgName} className='card-img-top' />
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode><App /></React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
