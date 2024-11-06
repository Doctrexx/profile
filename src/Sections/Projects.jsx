import '../styles/projects.css';

function Projects() {
  return (
    <>
      <div className=' project-container'>
        <h1>Projects</h1>

        <div className='project-section'>
          <div className='project-card'>
            <img
              src='../assets/images/portfolio/weatherapp.png'
              alt="Weather App" />
            <div className='project-info'>
              <h2>Weather App</h2>
              <p>A simple weather app that uses the Open Weather API to show current and forecasted weather conditions for any city in the world</p>
            </div>
            <button>Go to Project</button>
          </div>

          <div className='project-card'>
            <img
              src='../assets/images/portfolio/weatherapp.png'
              alt="Weather App" />
            <div className='project-info'>
              <h2>Weather App</h2>
              <p>A simple weather app that uses the Open Weather API to show current and forecasted weather conditions for any city in the world</p>
            </div>
            <button>Go to Project</button>

          </div>

          <div className='project-card'>
            <img
              src='../assets/images/portfolio/weatherapp.png'
              alt="Weather App" />
            <div className='project-info'>
              <h2>Weather App</h2>
              <p>A simple weather app that uses the Open Weather API to show current and forecasted weather conditions for any city in the world</p>
            </div>
            <button>Go to Project</button>
          </div>

        </div>

      </div>
    </>
  )
}

export default Projects;