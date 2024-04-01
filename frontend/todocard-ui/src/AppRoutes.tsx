import { Route, Routes } from "react-router-dom";
import { Home } from "./modules/home/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import AuthLayout from "./common/layouts/AuthLayout";
import LoggedInLayout from "./common/layouts/LoggedInLayout";


// Higher-order component (HOC) to wrap a component with AuthLayout
const withAuthLayout = (Component: React.ComponentType) => (
    <AuthLayout>
        <Component />
    </AuthLayout>
);

// Higher-order component (HOC) to wrap a component with LoggedInLayout
const withLoggedInLayout = (Component: React.ComponentType) => (
    <LoggedInLayout>
        <Component />
    </LoggedInLayout>
);


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={withAuthLayout(Login)} />
            <Route path="/register" element={withAuthLayout(Register)} />
            <Route path="/home" element={withLoggedInLayout(Home)} />
        </Routes>
    );
};

export default AppRoutes;