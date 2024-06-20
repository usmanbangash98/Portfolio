import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h3 className="font-cursive text-2xl mx-2 w-10">UB</h3>
      </div>
      <div className="m-4 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/usmanbangash/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer">
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/usmanbangash98"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
