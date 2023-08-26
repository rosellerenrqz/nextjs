import Link from "next/link";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <footer className="bottom-0 mt-10 w-full border-t border-gray-500 py-5 text-center">
      <div className="mx-auto">
        <Link
          href="https://www.facebook.com/enriquez.roseller/"
          target="_blank"
        >
          <h1 className="text-gray-200">© Roseller Enriquez Jr</h1>
        </Link>

        <main className="flex justify-center py-3 text-center">
          <Link
            href="https://www.facebook.com/enriquez.roseller/"
            target="_blank"
          >
            <FacebookRoundedIcon className="mx-2 text-2xl text-gray-300 hover:text-blue-400" />
          </Link>
          <Link href="https://instagram.com/rosellerenriquez" target="_blank">
            <InstagramIcon className="mx-2 text-2xl text-gray-300 hover:text-blue-400" />
          </Link>
          <Link href="https://github.com/rosellerenrqz" target="_blank">
            <GitHubIcon className="mx-2 text-2xl text-gray-300 hover:text-blue-400" />
          </Link>
        </main>
      </div>
    </footer>
  );
};

export default Footer;
