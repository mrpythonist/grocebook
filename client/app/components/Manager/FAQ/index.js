/**
 *
 * FAQ
 *
 */

import React, { useEffect, useState } from "react";

import Faq from "react-faq-component";

const data = {
  title: "FAQ's",
  rows: [
    {
      title: "How does Grocebook delivery and pickup work?",
      content: `Grocebook makes it easy to order from your favorite stores. Shop for items from stores near you, with a selection of more than 500 retailers and trusted local grocers across North America. Then, Grocebook will connect you with a personal shopper in your area to shop and deliver your order. Contactless delivery is available with our “Leave at my door” option.`,
    },
    {
      title: "How much does Grocebook cost?",
      content:
        "You don’t need a membership to order with Grocebook. In fact, you can even order from warehouse clubs, like Costco, Sam’s Club, and BJ’s Wholesale Club, without a retailer club membership. To get started, create an account, select the store you want to shop, and place your order. New customers may be eligible for free delivery promotions.",
    },
    {
      title: "Will I pay the same price on Grocebook as I would in store?",
      content: `Retail partners set the prices of items on the Grocebook marketplace. While many retailers offer everyday store prices on Grocebook, some retailers may set prices on the Grocebook platform that are different from in-store prices.`,
    },
    {
      title: "What happens if there's an issue with my order?",
      content: `If something isn’t right, you’ve got options. In the Grocebook app or website, you can report:
      Missing items,
      Incorrect items,
      Damaged items,
      Poor replacements,
      Early/late orders,
      If an order never came, or you get someone else’s order, you can reach out to Grocebook Care.`,
    },
  ],
};

const styles = {
  titleTextColor: "black",
  rowTitleColor: "black",
  rowContentColor: "grey",
  arrowColor: "red",
};

const config = {
  animate: true,
  tabFocus: true,
};

const FAQ = (props) => {
  return (
    <div style={{"width": "700px",
     "margin":'auto'}}>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
};

export default FAQ;
