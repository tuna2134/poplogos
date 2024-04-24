import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header className="h-14 border-b shadow-md animate-fade-in-top">
      <div className="ui-template flex items-center h-full">
        <h1 className="text-2xl">ServiceLogos</h1>
        <nav className="ml-auto">
          <Link href="/">Home</Link>
        </nav>
      </div>
    </header>
  )
};