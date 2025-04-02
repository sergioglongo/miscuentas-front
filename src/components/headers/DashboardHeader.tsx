import { useState } from "react";

import { AccountCircle, ExitToApp, Person } from "@mui/icons-material";
import {
    Box,
    Divider,
    IconButton,
    ListItemIcon,
    Menu,
    MenuItem,
    Typography,
} from "@mui/material";
import { useNavigate } from "@tanstack/react-router";

import UnitIcon from "@/components/icons/unit-icons";
import { useStore } from "@/store/mainStore";

export function DashboardHeader() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const navigate = useNavigate();
    const {
        user: { setIsAuthenticated, userData },
        units: { unitActive },
    } = useStore();

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        handleClose();
        navigate({ to: "/auth/login" });
    };

    return (
        <header className="fixed right-0 top-0 z-10 w-full shadow-sm">
            <nav className="flex h-16 justify-end px-6">
                <Box
                    sx={{
                        px: 1,
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        Unidad Activa:
                        <Box
                            component="span"
                            sx={{
                                ml: 1,
                                px: 1,
                                py: 0.5,
                                border: 1,
                                borderRadius: 2,
                                borderColor: "grey.500",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 1,
                            }}
                        >
                            {unitActive && (
                                <UnitIcon iconName={unitActive.photo} />
                            )}
                            {unitActive?.name}
                        </Box>
                    </Typography>
                </Box>
                <div className="flex items-center">
                    <IconButton
                        onClick={handleMenu}
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                    >
                        <AccountCircle sx={{ width: 40, height: 40 }} />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        PaperProps={{
                            elevation: 2,
                            sx: {
                                borderRadius: 2,
                                mt: 0,
                                minWidth: "200px",
                            },
                        }}
                    >
                        <Box sx={{ px: 2, py: 1 }}>
                            <Typography variant="subtitle1">
                                {userData?.firstname} {userData?.lastname}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {userData?.email}
                            </Typography>
                        </Box>
                        <Divider />
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <Person fontSize="medium" />
                            </ListItemIcon>
                            Perfil
                        </MenuItem>
                        <MenuItem onClick={handleLogout}>
                            <ListItemIcon>
                                <ExitToApp fontSize="medium" />
                            </ListItemIcon>
                            Cerrar sesión
                        </MenuItem>
                    </Menu>
                </div>
            </nav>
        </header>
    );
}
