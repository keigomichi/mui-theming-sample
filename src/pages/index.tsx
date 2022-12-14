import Head from "next/head";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useColorModeContext } from "../contexts/ColorModeContext";

export default function Home() {
  const { colorMode, changeColorMode } = useColorModeContext();

  return (
    <>
      <Head>
        <title>Material UI Theming Sample</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="md" sx={{ my: 4 }}>
        <Select
          value={colorMode}
          defaultValue="system"
          onChange={(e) => changeColorMode(e.target.value)}
        >
          <MenuItem value="system">System</MenuItem>
          <MenuItem value="light">Light</MenuItem>
          <MenuItem value="dark">Dark</MenuItem>
        </Select>
      </Container>
    </>
  );
}
