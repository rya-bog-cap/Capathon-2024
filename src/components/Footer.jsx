import { Button } from './Button';
import './footer.css';
import tonGif from '../assets/videos/tomOutro.gif';

function Footer({ title, description, link }) {
  return (
    <>
      <div className="footer">
        <div className="text-footer">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <Button to={link} buttonStyle="btn--primary" buttonSize="btn--large">
          Sign Up
        </Button>
      </div>
      <p className="bottom-footer">Capathon 2024</p>
    </>

    // <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    //   <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
    //     <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    //     <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
    //       © 2024{''} Capathon
    //     </span>
    //   </div>
    // </footer>
  );
}

export default Footer;
