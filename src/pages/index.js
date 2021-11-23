import React from "react";
import Meta from "components/Meta";
import NavbarCustom from "components/NavbarCustom";
import HeroSection from "components/HeroSection";
import ContentCardsSection from "components/ContentCardsSection";
import Footer from "components/Footer";

function IndexPage(props) {
  return (
    <>
      <Meta />
      <NavbarCustom
        bg="white"
        variant="light"
        expand="md"
        logo={'../img/label.jpg'}
      />
      <HeroSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage={'../img/banner.png'}
        bgImageOpacity={1}
        title="TARDIGRADES SHOP"
        subtitle="An exciting place for the whole family to shop"
        buttonText="View All Products"
        buttonColor="primary"
        buttonPath="/products"
      />
      <ContentCardsSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Featured Products"
        subtitle=""
      />
      <Footer
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        copyright={`© ${new Date().getFullYear()} Company`}
        logo={'../img/label.jpg'}
      />
    </>
  );
}

export default IndexPage;
