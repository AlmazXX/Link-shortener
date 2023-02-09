import { Container, CssBaseline } from "@mui/material";
import AppToolbar from "./components/UI/AppToolbar/AppToolbar";
import Link from "./features/link/Link";

function App() {
  return (
    <>
      <CssBaseline />
      <header>
        <AppToolbar />
      </header>
      <main>
        <Container maxWidth="xl">
            <Link/>
        </Container>
      </main>
    </>
  );
}

export default App;