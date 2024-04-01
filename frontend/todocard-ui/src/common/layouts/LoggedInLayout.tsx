import { ReactNode } from "react";
import Footer from "../Footer";
import Navbar from "../navbar/Navbar";


interface AuthLayoutProps {
    children: ReactNode;
}

const LoggedInLayout: React.FC<AuthLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default LoggedInLayout;
