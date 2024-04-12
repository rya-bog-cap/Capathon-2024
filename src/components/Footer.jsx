import { Button } from './Button';
import './footer.css';
import tomGif from '../assets/videos/tomOutro.gif';

function Footer({ title, description }) {
  return (
    <div className="footer">
      <div className="text-footer">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>

      <div className="signup-footer">
        <Button
          // onClick={handleClick}
          to={
            'https://docs.google.com/forms/d/e/1FAIpQLSeCpjksUmyXMKOFK9TZo3Sq4y_LxkAV5XzUKFrY_USzyTXLbg/viewform?usp=sf_link'
          }
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Sign Up
        </Button>
        <img src={tomGif} />
      </div>
    </div>
  );
}

export default Footer;
