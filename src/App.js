import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import Presentation from "layouts/pages/presentation";
import { ThemeProvider } from "@mui/material/styles";
import react from "react";
import routes from "routes";
import theme from "assets/theme";

export default function App() {
    const { pathname } = useLocation();

    react.useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
    }, [pathname]);

    const getRoutes = (allRoutes) =>
        allRoutes.map((route) => {
            if (route.collapse) {
                return getRoutes(route.collapse);
            }

            if (route.route) {
                return (
                    <Route
                        exact
                        path={route.route}
                        element={route.component}
                        key={`${route.key}`}
                    />
                );
            }

            return null;
        });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
                {getRoutes(routes)}
                <Route path="/" element={<Presentation />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </ThemeProvider>
    );
}
