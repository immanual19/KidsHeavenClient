import React from 'react';
import './Documentary.css';
const Documentary = () => {
    return (
        <div className="my-5">
        <div style={{margin:'0 auto'}} className="w-75">
        <h1>Documentary on Kids Heaven</h1>
        <p>Explore everything about KidsHeaven through Youtube. To see more videos on KidsHeaven, Kindly visit our Youtube Page.</p>
        </div>
        
        <iframe src="https://www.youtube.com/embed/QzxWI24Vr2E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
};

export default Documentary;