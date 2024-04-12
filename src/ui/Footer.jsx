import { Instagram, Twitter, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="grid justify-center gap-8 p-4 bg-gray-200 text-base-content">
      <div className="flex items-center justify-center gap-10">
        <a className="hover:underline" href="#">
          About us
        </a>
        <a className="hover:underline" href="#">
          Contact
        </a>
        <a className="hover:underline" href="#">
          Jobs
        </a>
        <a className="hover:underline" href="#">
          Press kit
        </a>
      </div>
      <div>
        <div className="flex items-center justify-center gap-8">
          <a
            target="_blank"
            href="https://www.instagram.com/abhishekpatil7770/"
          >
            <Instagram />
          </a>
          <a target="_blank" href="https://twitter.com/abhiPatil7770">
            <Twitter />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/abhishek-patil-12513b225/"
          >
            <Linkedin />
          </a>
        </div>
      </div>
      <div>
        <p>
          Copyright © 2024 - All right reserved by{" "}
          <a
            target="_blank"
            className="hover:underline"
            href="https://github.com/Abhishek7487"
          >
            Abhishek Patil
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
