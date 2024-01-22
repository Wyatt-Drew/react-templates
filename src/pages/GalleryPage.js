import React from 'react';
import picture from '../assets/farming.png';
import picture2 from '../assets/asperagus.jpg';
import picture3 from '../assets/grass.jpg';
import picture4 from '../assets/LoZ.gif';
import './GalleryPage.css';

const GalleryPage = () =>{
    return(
        <div className = "image-gallery">
            <img className = "image" src={picture} alt="Event" />
            <img className = "image" src={picture2} alt="Event" />
            <img className = "image" src={picture} alt="Event" />
            <img className = "image" src={picture2} alt="Event" />
            <img className = "image" src={picture3} alt="Event" />
            <img className = "image" src={picture4} alt="Event" />
            <img className = "image" src={picture} alt="Event" />
            <img className = "image" src={picture3} alt="Event" />

            <img className = "image" src={picture} alt="Event" />
            <img className = "image" src={picture2} alt="Event" />
            <img className = "image" src={picture4} alt="Event" />

        </div>
    );
}
export default GalleryPage;