import React from 'react';

const Documentary = () => {
    return (
        <div className="my-5">
        <h1>Documentary on Kids Heaven</h1>
        <p>Explore everything about KidsHeaven through Youtube. To see more videos on KidsHeaven, Kindly visit our Youtube Page.</p>
        <iframe style={{borderRadius:'10px'}} width="1020" height="480" src="https://www.youtube.com/embed/QzxWI24Vr2E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
};

export default Documentary;