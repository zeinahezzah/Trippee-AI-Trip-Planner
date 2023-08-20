import * as React from 'react';
import "./WelcomeCard.scss";
import { useNavigate } from "react-router-dom";


export default function WelcomeCard(props) {
	const navigate = useNavigate();
	const onClick = loc => {
		navigate(`/${props.nav}`);
	}

  return (
  
	<section className="card" onClick={onClick}>
		<div className="card__media" onClick={onClick}>
			<img src={props.image} alt="exploreimage"/>
		</div>
		<div className="card__content">
			<div className="card__wrapper">		
    		<h2>{props.title}</h2>
				<p className="card__question">{props.question} <br/> {props.description}</p>
			</div>
		</div>
	</section>
      );
}





