import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
	<div className="info-box">
		 <p className="font-medium sm:text-xl text-center">{text}</p>
		 <Link to={link} className="neo-brutalism-white neo-btn">
			{btnText}
			<img src={arrow} className="w-4 h-4 object-contain" />
		 </Link>
	</div>
)

const renderContent = {
	1: (
		<h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
			Hi, I'm <span className="font-semibold">K8</span>👋
			<br /> An aspiring full stack dev from Toronto.
			</h1>
	),
	2: (
		<InfoBox
			text="Coding started as a hobby since Grade 6"
			link="/about"
			btnText="My Journey"
		/>
	),
	3: (
		<InfoBox
			text="Created fun projects to learn more"
			link="/projects"
			btnText="Portfolio"
		/>
	),
	4: (
		<InfoBox
			text="Wanna chat, I'm just a few keystrokes away"
			link="/contact"
			btnText="Let's talk"
		/>
	),
}


const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo