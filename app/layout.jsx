import Navbar from "@/components/Navbar";
import "../assets/styles/globals.css";

export const metadata = {
  title: "property-pulse",
  keyword: "rental, property, real estate",
  description: "Find the perfect rental property",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
};
export default MainLayout;
