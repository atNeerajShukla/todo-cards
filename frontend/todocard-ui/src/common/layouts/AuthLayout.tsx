import { ReactNode } from "react";
import Footer from "../Footer";
import AuthNavbar from "../navbar/AuthNavbar";

interface AuthLayoutProps {
    children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <AuthNavbar />
            {children}
            <Footer />
        </div>
    );
};

export default AuthLayout;
