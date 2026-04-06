import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingBookButton from "./FloatingBookButton";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 pt-[73px]">{children}</main>
    <Footer />
    <FloatingBookButton />
  </div>
);

export default Layout;
