import React from 'react'
import Header from '../../components/Header/Header';
import "./QuickLinks.css"
import { useLocation } from 'react-router-dom';

const QuickLinks = () => {
  const location = useLocation();
  return (
    <div>
      <Header title = "Quick Links" showHeaderCenter={true} showHeaderRight = {true} link = "/home" username = {location.state.username}/>
      <a href = "https://myedurec.nus.edu.sg/psp/cs90prd/?cmd=login">
      <img alt  = "MyEduRec" src = "data:image/png;base64,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"/>
      </a>
      <a href = "https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1655962015&rver=7.0.6737.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26RpsCsrfState%3d748b106d-06bd-77e0-839e-c3fb31323889&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015">
      <img alt = "outlook" src = "data:image/jpeg;base64,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" />
      </a>
      <a href = "https://luminus.nus.edu.sg/?r=%2Fdashboard">
      <img alt = "LumiNUS" src = "https://wiki.nus.edu.sg/download/attachments/199330682/LumiNUSstudent?version=1&modificationDate=1516257023933&api=v2" />
      </a>
      <a href = "https://piazza.com/">
      <img alt = "Piazza" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Piazza_logo.png/1200px-Piazza_logo.png" />
      </a>
      <a href = "https://coursemology.org/users/sign_in">
      <img alt = "Coursemology" src = "https://raw.githubusercontent.com/Coursemology/coursemology.org/development/public/images/coursemology_logo_landscape_100.png" />
      </a>
      <a href = "https://web.telegram.org/z/">
      <img alt = "Coursemology" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/640px-Telegram_2019_Logo.svg.png" />
      </a>
      <a href = "https://nus.campuslabs.com/engage">
      <img alt = "nussync" src = "https://se-images.campuslabs.com/clink/images/2c20f5ed-aaaa-4a74-9ab6-5aa04e8d21b32b882934-e3d8-423e-97e2-ef14254c1fc2.png"/>
      </a>
    </div>
  )
}

export default QuickLinks;
