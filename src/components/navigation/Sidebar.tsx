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

import { useUIStore } from "@/store/uiStore";

export function Sidebar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isOpen = useUIStore((state) => state.sidebar.isOpen);
  const toggleSidebar = useUIStore((state) => state.toggleSidebar);

  return (
    <>
      <IconButton
        onClick={toggleSidebar}
        sx={{
          position: "fixed",
          left: isOpen ? 240 : 10,
          top: 10,
          zIndex: 1200,
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
            transition: theme.transitions.create(["width", "margin"], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          },
        }}
      >
        <div className="flex items-center justify-center p-4">
          <img
            src="/src/assets/Logo wallet.png"
            alt="Mis Cuentas Logo"
            className="h-10 w-auto"
          />
          <h1 className="ml-2 text-xl font-bold">Mis Cuentas</h1>
        </div>

        <List>
          <ListItem component={Link} to="/dashboard">
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem component={Link} to="/dashboard/accounts">
            <ListItemIcon>
              <AccountBalance />
            </ListItemIcon>
            <ListItemText primary="Cuentas" />
          </ListItem>
          <ListItem component={Link} to="/dashboard/settings">
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
