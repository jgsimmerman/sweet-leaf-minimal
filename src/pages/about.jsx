import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'About Us'} />
    <Header title="About Us">Sweet Leaf Succulents and Ornamental Plants</Header>
    <Container center={center}>
      <h3>We sell succulents and stuff.</h3>
    </Container>
  </Layout>
);

export default About;

Container.propTypes = {
  center: PropTypes.object,
};
