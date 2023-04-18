import Avatar from '../assets/Avatar.png';
import { Link } from 'react-router-dom';

type WelcomeHeader = Props;

interface Props {
  name?: string;
  image?: string;
}

function WelcomeHeader({ name = 'Lui', image = Avatar, ...props }: Props) {
  return (
    <header className="mx-5 mt-8 flex justify-between bg-[#1C1C27]">
      <div className="flex flex-col justify-between">
        <h3 className="font-sans font-bold text-xs text-white opacity-40">
          Welcome {name}👋
        </h3>
        <h1 className="text-white font-bold text-sm">
          Let's relax and watch a movie!
        </h1>
      </div>
      <a href="/">
        <img className="h-10 w-10" alt="avatar" src={image}></img>
      </a>
    </header>
  );
}
export default WelcomeHeader;
