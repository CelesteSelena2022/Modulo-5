import {
  ButtonBase,
  Card,
  CardHeader,
  Container,
  Grid,
  Typography,
  Box,
} from "@mui/material";

function App() {
  return (
  <Box sx={{ backgroundColor: "#2400FF", height: "100vh" }}>
  <Grid container spacing={2}>
    <Grid item xs={8}>
      <Card>
        <CardHeader>
          <Typography color="black">Hola soy la card 1</Typography>
        </CardHeader>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Card>
        <CardHeader>
          <Typography color="black">Hola soy la card 2</Typography>
        </CardHeader>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Card>
        <CardHeader>
          <Typography color="black">Hola soy la card 3</Typography>
        </CardHeader>
      </Card>
    </Grid>
    <Grid item xs={8}>
      <Card>
        <CardHeader>
          <Typography color="black">Hola soy la card 4</Typography>
        </CardHeader>
      </Card>
    </Grid>
  </Grid>
</Box>
  );
  {/* </ Header> asi evitamos el padding en nav de container */}
  {/* <Container>
    <Button variant="outlined">Hello world</Button>
  </ Container> */}
}
export default App
