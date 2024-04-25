import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header className="h-14 border-b shadow-md animate-fade-in-top top-0 sticky bg-white">
      <div className="ui-template flex items-center h-full">
        <h1 className="text-2xl">ServiceLogos</h1>
        <nav className="ml-auto space-x-4">
          <Link href="/">Home</Link>
          <Link href="https://github.com/SAWARATSUKI/ServiceLogos">GitHub</Link>
        </nav>
      </div>
    </header>
  )
};
