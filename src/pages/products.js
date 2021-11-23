import React from "react";
import Meta from "components/Meta";
import NavbarCustom2 from "components/NavbarCustom2";
import ContentCardsSection2 from "components/ContentCardsSection2";
import Footer2 from "components/Footer2";

function ProductsPage(props) {
  return (
    <>
      <Meta title="Products" />
      <NavbarCustom2
        bg="white"
        variant="light"
        expand="md"
        logo={'../img/label.jpg'}
      />
      <ContentCardsSection2
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Products"
        subtitle=""
      />
      <Footer2
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

export default ProductsPage;
