import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  const layoutStyle = {
    backgroundColor: "#e0f7fa", // Azzurrino chiaro
    minHeight: "100vh", // Assicura che il background copra l'intera altezza della pagina
    padding: "16px", // Aggiunge un po' di padding
  };

  return (
    <div style={layoutStyle}>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
