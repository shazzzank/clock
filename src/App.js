import React, { useState } from 'react';

function App () {
	const [time, setTime] = useState(new Date().toLocaleTimeString());
	setInterval(getTime);
	function getTime(){	setTime(new Date().toLocaleTimeString()); }
	return (
		<div>
			<h1>{time}</h1>
		</div>
	);
}

export default App;