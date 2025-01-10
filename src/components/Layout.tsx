import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <header>
        <h1>Country Explorer</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
