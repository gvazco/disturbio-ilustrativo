import React from "react"
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
  Icon,
} from "semantic-ui-react"
import Icono from "../../images/icono.png"
import "./Footer.scss"

export default function Footer() {
  return (
    <Segment
      inverted
      vertical
      style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
    >
      <Container textAlign="center" className="footer">
        <Grid divided inverted stackable>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Contacto" />
            <List link inverted>
              <List.Item as="a">5581853675</List.Item>
              <List.Item as="a">5563719043</List.Item>
              <List.Item as="a">info@disturbioilustrativo.com</List.Item>
              <List.Item as="a">Google Forms</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Group 2" />
            <List link inverted>
              <List.Item as="a">Link One</List.Item>
              <List.Item as="a">Link Two</List.Item>
              <List.Item as="a">Link Three</List.Item>
              <List.Item as="a">Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Group 3" />
            <List link inverted>
              <List.Item as="a">Link One</List.Item>
              <List.Item as="a">Link Two</List.Item>
              <List.Item as="a">Link Three</List.Item>
              <List.Item as="a">Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header inverted as="h4" content="Síguenos en Redes Sociales" />
            <div className="redes">
              <Icon size="large" name="facebook" />
              <Icon size="large" name="instagram" />
              <Icon size="large" name="facebook messenger" />
              <Icon size="large" name="youtube" />
            </div>
          </Grid.Column>
        </Grid>

        <Divider inverted section />
        <Image centered className="icono" src={Icono} />
        <List horizontal inverted divided link size="small">
          <List.Item as="a" href="#">
            Disturbio Ilustrativo * 2021 - Todos los derechos reservados
          </List.Item>
          <List.Item as="a" href="#">
            Contacto
          </List.Item>
          <List.Item as="a" href="#">
            Politica de Privacidad
          </List.Item>
        </List>
      </Container>
    </Segment>
  )
}
