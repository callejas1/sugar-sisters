import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import Jumbotron from '../components/Jumbotron';
import products from '../products';

const HomeScreen = () => {
  return (
    <>
     <Row>
       <Col>
       <Jumbotron/>
       </Col>
     </Row>
     <h1 className="home-heading">Productos Recientes</h1> 
     <Row>
       {products.map((product) => (
         <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
           <Product product={product}/>
         </Col>
       ))}
     </Row>
    </>
  )
};

export default HomeScreen;
