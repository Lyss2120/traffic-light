import React, { useState } from "react";
import './home.css'

//create your first component
const Home = () => {

const [selected, setSelected] = useState("red");

// if on click poner la clase encendida 
// addEventListener('light')
	return (
		<div className="container">
			<div className="fierro"></div>
			<div className="traffic-light">
				<div 
				onClick={()=>setSelected("red")}
				className={selected == "red"? "light red glow" : "light red"}>
				</div>
				<div 
				onClick={()=>setSelected("yellow")}
				className={selected == "yellow"? "light yellow glow" : "light yellow"}>

				</div>
				<div 
				onClick={()=>setSelected("green")}
				className={selected == "green"? "light green glow" : "light green"}>
				</div>
			</div>
		</div>
	);
};

export default Home;
