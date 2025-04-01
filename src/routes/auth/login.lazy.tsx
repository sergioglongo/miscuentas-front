import { GitHub, Google, Twitter } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Divider,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { createLazyFileRoute, Link } from "@tanstack/react-router";

import { SignInForm } from "@/components/auth/SignInForm";

export const Route = createLazyFileRoute("/auth/login")({
  component: LoginPage,
});

function LoginPage() {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Card
      elevation={2}
      sx={{
        maxWidth: 400,
        width: "100%",
        mx: "auto",
        borderRadius: 3,
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box
          gap={1.5}
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={{ mb: 5 }}
          rowGap={1}
        >
          <Typography fontWeight="bold" fontSize={isMdDown ? "32px" : "24px"}>
            Inicia sesión
          </Typography>
          <Typography
            variant="body2"
            fontSize={isMdDown ? "24px" : "16px"}
            color="text.secondary"
          >
            aún no tienes cuenta?
          </Typography>
          <Link
            to="/auth/login"
            style={{
              fontSize: isMdDown ? "24px" : "16px",
              marginLeft: "4px",
              color: theme.palette.primary.main,
              textDecoration: "none",
            }}
          >
            Crea una aqui..
          </Link>
        </Box>
        <Box px={2}>
          <SignInForm />
        </Box>

        <Divider
          sx={{ my: 3, "&::before, &::after": { borderTopStyle: "dashed" } }}
        >
          <Typography
            variant="overline"
            sx={{ color: "text.secondary", fontWeight: "fontWeightMedium" }}
          >
            O inicia sesión con
          </Typography>
        </Divider>

        <Box gap={1} display="flex" justifyContent="center">
          <IconButton color="inherit">
            <Google />
          </IconButton>
          <IconButton color="inherit">
            <GitHub />
          </IconButton>
          <IconButton color="inherit">
            <Twitter />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}
