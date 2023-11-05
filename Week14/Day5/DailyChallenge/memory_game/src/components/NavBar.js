import './NavBar.css'

const NavBar = ({score, topScore}) => {
  return (
    <header>
      <main>
        <h3>Superheroes Memory Game</h3>
        <p>
          <span>Score: <b>{score}</b></span>
          <span>Top Score: <b>{topScore}</b></span>
        </p>
      </main>
      <div className='info'>
        Get points by clicking on an image but don't click on any more than
        once!
      </div>
    </header>
  );
};

export default NavBar;
