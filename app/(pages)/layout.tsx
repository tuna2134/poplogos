import { Header } from "@/components/ui/header"

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="ui-template py-6">
        {children}
      </main>
    </>
  );
};

export default Layout;