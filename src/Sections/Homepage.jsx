/* eslint-disable react/no-unescaped-entities */
import '../styles/homepage.css';

function Homepage() {
  return (
    <>
      <div className="home-container">

        <div className='about-container'>

          <div className='text-content'>
            <h1>Web Developer</h1>
            <p>
              "Passionate web developer with a creative edge and a knack for turning ideas into visually stunning and highly functional websites. With a blend of technical expertise and artistic flair, I thrive on crafting intuitive user experiences that leave a lasting impression. From clean code to captivating designs, I'm dedicated to bringing visions to life and making the digital world a more engaging place, one pixel at a time."
            </p>
          </div>

          <img src='src\assets\images\profile-picture.jpg' alt="Profile Picture" />

        </div>

        {/* repetitive code */}
        <div className='circle circle1'></div>
        <div className='circle circle2'></div>
        <div className='circle circle3'></div>
        <div className='circle circle4'></div>
        <div className='circle circle5'></div>
        <div className='circle circle6'></div>
        <div className='circle circle7'></div>
        <div className='circle circle8'></div>
        <div className='circle circle9'></div>
        <div className='circle circle10'></div>
        <div className='circle circle11'></div>
        <div className='circle circle12'></div>
        <div className='circle circle13'></div>

        {/* project section */}
        {/* <div>
          <Projects />
        </div> */}

      </div >
    </>
  )
}

export default Homepage