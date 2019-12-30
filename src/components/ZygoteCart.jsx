import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Layout, Container, Content } from 'layouts';
//import { TagsBlock, Header, SEO, SecondNav, Zygote } from 'components';
import Helmet from 'react-helmet';
import BuyButton from './BuyButton';
import Img from 'gatsby-image';
import { Grid, GridItem } from 'styled-grid-component';

import { Cart } from 'zygote-cart-clone';


// import * as preinfo from "preinfo";
// import * as calculatetax from "calculatetax";
// import * as secondplugin from "secondplugin";
// import * as componentTest from "componentTest";
//import * as helpers from "helpers";

//import * as EscaAPI from '@escaladesports/zygote-plugin-esca-api';

const ZygoteCart = props => {

  //const { subtotal } = props.Totals.totalsState.state

  // const tenPercent = ({
	// 	id: `10OFF`,
	// 	description: `10% off discount`,
	// 	displayValue: `-10%`,
	// 	value: () => {
	// 		return totalsState.State.subtotal * -.1
	// 	}
  // })
  
  
   
  return(
    
    <Cart
      stripeApiKey="pk_test_kuLPajeHN54EmoQl9DN6OTXh00Nbu3XDXV"
      //stripeApiKey=`${process.env.STRIPE_API_PUBLIC}`
      infoWebhook='/.netlify/functions/info-stripe'
			orderWebhook='/.netlify/functions/order-stripe'
      
      //plugins={[ helpers ]}

      cartHeader={<div>Sweet Leaf Succulents</div>}


      // totalModifications={[
      //   // {
      //   //   id: `shipping`,
      //   //   description: `Shipping`,
      //   //   value: 0,
      //   //   displayValue: `Free`,
      //   // },
      //   // {
      //   //   id: `tax`,
      //   //   description: `Tax`,
      //   //   value: 0,
      //   //   displayValue: `Calculated at checkout`,
      //   // },
      //   // {
      //   //   id: `sale-1`,
      //   //   description: `Super Sale!`,
      //   //   value: -2000,
      //   // },
      // ]}
     
    />
    
  );
};

export default ZygoteCart;