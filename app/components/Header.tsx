import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-center">
      <h1 className="text-6xl font-mono font-bold">Next - TailwindCSS</h1>
      <nav className="m-4 b-2 b-slate-50">
        <Link href="/" className="text-2xl font-bold m-2">
          Home
        </Link>
        <Link href="/users" className="text-2xl font-bold m-2">
          Users
        </Link>
      </nav>
    </header>
  );
};

export default Header;
