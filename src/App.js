import React, { useEffect, useState } from 'react'
import './App.css'


function App() {
const [gitHubName, setGitHubName] = useState('')         
const [gitHubAvatar, setGitHubAvatar] = useState('') 
const [gitHubButton, setGitHubButton] = useState('')              


useEffect(() => {
    fetch('https://api.github.com/users/ayanbajo')
    .then(res => res.json())
    .then(data => {
        setGitHubName(data.name)
        setGitHubAvatar(data.avatar_url)
        setGitHubButton(data.html_url)
    })
}, [])

return (
    <div className="App">
        <h1>Github Profile Info:</h1>
        <h2>{gitHubName}</h2>
        <img src={gitHubAvatar} alt="avatar"/>
        <a href={gitHubButton} target="_blank" alt="profilebutton">
          <button>Link to Github Profile</button>
          </a>
    </div>
);
}

export default App
    