import React from "react";
import { Container } from "react-bootstrap";

import { NavigationBar } from "./NavigationBar";
import { Top } from "./Top";
import { About } from "./About";
import { Photography } from "./Photography";
import { Travel } from "./Travel";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

function Home() {
  return (
    <Container fluid>
      <NavigationBar />
      <Top />
      <About />
      <Travel />
      <Photography />
      <Contact />
      <Footer />
    </Container>
  );
}

export default Home;
