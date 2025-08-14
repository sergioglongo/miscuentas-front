import {
    AccountBalance,
    ChevronLeft,
    Dashboard,
    Menu as MenuIcon,
    Settings,
} from "@mui/icons-material";
import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { Link } from "@tanstack/react-router";

import { useStore } from "@/store/mainStore";

export function Sidebar() {
    const {
        ui: {
            sidebar: { isOpen },
            toggleSidebar,
        },
    } = useStore();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <>
            <IconButton
                onClick={toggleSidebar}
                sx={{
                    position: "fixed",
                    left: isOpen ? 240 : 10,
                    top: 10,
                    zIndex: 1200,
                    backgroundColor: "white",
                    borderRadius: isOpen ? "0 12px 12px 0" : "50%",
                    boxShadow: "2px 0 4px rgba(0, 0, 0, 0.1)",
                    "&:hover": {
                        bgcolor: "white",
                    },
                }}
            >
                {isOpen ? <ChevronLeft /> : <MenuIcon />}
            </IconButton>

            <Drawer
                variant={isMobile ? "temporary" : "persistent"}
                open={isOpen}
                onClose={toggleSidebar}
                sx={{
                    width: isOpen ? 240 : 0,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: 240,
                        boxSizing: "border-box",
                        backgroundColor: theme.palette.background.default,
                        transition: theme.transitions.create(
                            ["width", "margin"],
                            {
                                easing: theme.transitions.easing.sharp,
                                duration:
                                    theme.transitions.duration.enteringScreen,
                            }
                        ),
                    },
                }}
            >
                <div className="flex items-center justify-center p-4">
                    <img
                        src="/logowallet.png"
                        alt="Mis Cuentas Logo"
                        className="h-10 w-auto"
                    />
                    <h1 className="ml-2 text-xl font-bold">Mis Cuentas</h1>
                </div>

                <List>
                    <ListItem component={Link} to="/dashboard/main">
                        <ListItemIcon>
                            <Dashboard />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem component={Link} to="/accounts/admin">
                        <ListItemIcon>
                            <AccountBalance />
                        </ListItemIcon>
                        <ListItemText primary="Cuentas" />
                    </ListItem>
                    <ListItem component={Link} to="/configs/panel">
                        <ListItemIcon>
                            <Settings />
                        </ListItemIcon>
                        <ListItemText primary="Configuración" />
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
}
