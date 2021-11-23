import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import AspectRatio from "components/AspectRatio";
import ModalLauncher from "components/ModalLauncher";

function ContentCardsSection2(props) {
  const items = [
    {
      image: "../img/tshirt1.png",
      title: "T Shirt 1",
      body: "DETAILS: High Quality Custom Printing or Embroidered T-Shirts",
      url: "/post/golden-gate",
    },
    {
      image:"../img/tshirt2.png",
      title: "T Shirt 2",
      body: "DETAILS: High Quality Custom Printing or Embroidered T-Shirts",
      url: "/post/beach",
    },
    {
      image: "../img/tshirt3.png",
      title: "T Shirt 3",
      body: "DETAILS: High Quality Custom Printing or Embroidered T-Shirts",
      url: "/post/road",
    },
    {
      image: "../img/MUG-1.png",
      title: "MUG 1",
      body: "DETAILS: Acrylic Mugs. Transparent, acrylic mugs are great for juice, water, or soda.",
      url: "/post/ballons",
    },
    {
      image: "../img/MUG-2.png",
      title: "MUG 2",
      body: "DETAILS: Acrylic Mugs. Transparent, acrylic mugs are great for juice, water, or soda.",
      url: "/post/ballons",
    },
    {
      image: "../img/MUG-3.png",
      title: "MUG 3",
      body: "DETAILS: Acrylic Mugs. Transparent, acrylic mugs are great for juice, water, or soda.",
      url: "/post/ballons",
    },
    {
      image: "../img/MUG-4.png",
      title: "MUG 4",
      body: "DETAILS: Acrylic Mugs. Transparent, acrylic mugs are great for juice, water, or soda.",
      url: "/post/ballons",
    },
    {
      image: "../img/MUG-5.png",
      title: "MUG 5",
      body: "DETAILS: Acrylic Mugs. Transparent, acrylic mugs are great for juice, water, or soda.",
      url: "/post/ballons",
    },
  ];

  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        />
        <Row className="justify-content-center">
          {items.map((item, index) => (
            <Col xs={12} md={6} lg={3} className="py-3" key={index}>
              
                <Card as="a" text="dark" className="text-decoration-none">
                  <AspectRatio ratio={1}>
                    <Card.Img src={item.image} alt={item.title} variant="top" fluid/>
                  </AspectRatio>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.body}</Card.Text>
                  </Card.Body>
                  <ModalLauncher src={item.image}/>
                </Card>
             
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
}

export default ContentCardsSection2;
