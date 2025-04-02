import { useState } from "react";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
    FormControl,
    IconButton,
    InputAdornment,
    Link,
    Snackbar,
    Stack,
    TextField,
} from "@mui/material";
import { useNavigate } from "@tanstack/react-router";

import AlertSnack from "@/components/AlertSnack";
import { LoadingButton } from "@/components/buttons/LoadingButton";
import { useSignIn } from "@/services/authApi";
import { useStore } from "@/store/mainStore";

// Replace any with proper type
// Add type for form data
interface SignInFormData {
    email: string;
    password: string;
}

// Add error type
interface ApiError {
    response?: {
        data?: {
            message?: string;
        };
    };
    message: string;
}

const SignInForm = () => {
    const {
        user: { setIsAuthenticated, setUser },
        units: { setUnitsList, setUnitMain, setUnitActive },
        lists: { setUnitsList: setUnitsListInLists },
    } = useStore();
    const [errorShow, setErrorShow] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState<SignInFormData>({
        email: "",
        password: "",
    });

    const { mutate: signIn, isPending } = useSignIn();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        signIn(formData, {
            onSuccess: (response) => {
                if (response.success) {
                    setIsAuthenticated(true);
                    setUser(response.user.user);
                    setUnitsList(response.user.units);
                    setUnitsListInLists(response.user.units);
                    setUnitMain(response.user.main_unit);
                    setUnitActive(response.user.main_unit);
                    navigate({ to: "/dashboard/dashboard" });
                } else {
                    setErrorMessage(response.message);
                    setErrorShow(true);
                }
            },
            onError: (error: ApiError) => {
                const message = error.response?.data?.message || error.message;
                setErrorMessage(message);
                setErrorShow(true);
            },
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2} alignItems="center">
                    <FormControl fullWidth>
                        <TextField
                            name="email"
                            label="Usuario / email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                        />
                    </FormControl>

                    <FormControl fullWidth>
                        <TextField
                            name="password"
                            label="Contraseña"
                            type={showPassword ? "text" : "password"}
                            value={formData.password}
                            onChange={handleChange}
                            fullWidth
                            slotProps={{
                                input: {
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() =>
                                                    setShowPassword(
                                                        !showPassword
                                                    )
                                                }
                                                edge="end"
                                            >
                                                {showPassword ? (
                                                    <Visibility />
                                                ) : (
                                                    <VisibilityOff />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                    </FormControl>

                    <Link
                        color="inherit"
                        variant="subtitle2"
                        sx={{ fontSize: "16px" }}
                    >
                        Olvidaste tu contraseña?
                    </Link>

                    <LoadingButton
                        fullWidth
                        size="large"
                        type="submit"
                        color="primary"
                        variant="contained"
                        sx={{ width: "200px" }}
                        loading={isPending}
                    >
                        Inicia sesión
                    </LoadingButton>
                </Stack>
            </form>

            <Snackbar
                open={errorShow}
                autoHideDuration={3000}
                onClose={() => setErrorShow(false)}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
            >
                <AlertSnack
                    onClose={() => setErrorShow(false)}
                    severity="error"
                >
                    {errorMessage}
                </AlertSnack>
            </Snackbar>
        </>
    );
};

export default SignInForm;
