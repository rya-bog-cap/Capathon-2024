
import { Button } from "./Button";
import "./footer.css";

function Footer(){

    function handleClick() {

    }

    return (
        <div className="sign-up-footer">
            <a href={"https://github.com/capathon2024/Capathon-2024"}>Sign up</a>
            <Button onClick={handleClick} buttonStyle="btn--outline" buttonSize="btn--large">
                
            </Button>
            {/* <img src={tomGif} /> */}
        </div>
    )
}

export default Footer;