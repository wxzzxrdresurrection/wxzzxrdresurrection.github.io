/* eslint-disable jsx-a11y/img-redundant-alt */
import './About me.css'
import myPfp from '../img/pfp.jpeg'

function AboutMe(){
    return(
        <div className="abt-me-container">
            <div className='image-holder'>          
                    <img className='profile-image' alt='Presentation Image' src={myPfp}/>
            </div>
            <div className='intro-holder'>
                <div className='title'>Luis Angel Zapata</div>
                <div className='text-presentation'>Full Stack Junior Developer enjoyer of learning new technologies and skills. Still studying my software engineer at Universidad Tecnologica de Torreon, but willing for oportunities to work whether inside or outside Mexico.</div>
            </div>
        </div>
    )
}

export default AboutMe;