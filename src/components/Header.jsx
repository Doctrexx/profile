import '../styles/header.css';

function Header() {
  return (
    <div className="header-container">
      {/* !translate this to english and then back to hindi */}
      <h2>विशेषताएँ
        <div className='underline'></div>
        <small>translate</small>
      </h2>

      <ul>
        <li>About Me</li>
        <li>Projects</li>
        <li>Contact</li>
        <li>Socials</li>
      </ul>
    </div>
  )
}

export default Header