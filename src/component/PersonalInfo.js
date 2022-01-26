import React from 'react';
import reactIcon from "../images/react.svg";
import javascriptIcon from "../images/javascript.png";
import cssIcon from "../images/css.svg";
import htmlIcon from "../images/html5.svg";
import javaIcon from "../images/java.png";
import pythonIcon from "../images/python.svg";
import rubyIcon from "../images/ruby.svg";
import illustratorIcon from "../images/illustrator.svg";
import indesignIcon from "../images/indesign.svg";

export default function PersonalInfo() {
  return (
    <div className='personal-info-container'>
    <h1 className='head-section'>個人簡介</h1>
    <div className='personal-info-content-container'>
      <div className='name title'>甘定中 Peter Kan</div>
      <div className='introduction'>曾於日本公司實習，並具近一年產品經理經驗。</div>
      <div className='subtitle programming-language'>程式語言</div>
      <ul className='programming-language-images'>
        <li><img className='icon' src={reactIcon} alt="" /></li>
        <li><img className='icon' src={javascriptIcon} alt="" /></li>
        <li><img className='icon' src={cssIcon} alt="" /></li>
        <li><img className='icon' src={htmlIcon} alt="" /></li>
        <li><img className='icon' src={javaIcon} alt="" /></li>
        <li><img className='icon' src={pythonIcon} alt="" /></li>
        <li><img className='icon' src={rubyIcon} alt="" /></li>
      </ul>
      <div className='subtitle other-tools'>其他工具</div>
      <ul className='other-tools-images'>
        <li><img className='icon' src={illustratorIcon} alt="" /></li>
        <li><img className='icon' src={indesignIcon} alt="" /></li>
      </ul>
    </div>
    </div>
  );
}
