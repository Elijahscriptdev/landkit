import React from "react";
import { Row, Col } from "reactstrap";
import "./Hero.css";
import img3 from "../../assets/test.svg";

const Hero = () => {
  return (
    <>
      <div className='hero-container'>
        <Row className='my-5'>
          <Col xs='12' md='6' className='hero-text'>
            <h1>
              Chat with <span>friends</span>. <br />
              Watch funny content.
            </h1>
            <p>
              Forward-thinking businesses use Timekit to imagine,
              <br /> design and manage the perfect scheduling flows to <br />{" "}
              imagine, design and manage.
            </p>
            <input type='text' placeholder='(123) 4567-8901' />
            <button type='submit'>Text Link</button>
          </Col>
          <Col xs='12' md='6'>
            <img
              src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1615494675/FireShot_Capture_223_-_Page_1_-_Test_111_-_www.figma.com_nrgon4.png'
              alt='hero-img'
              className='img-fluid'
            />
          </Col>
        </Row>
        <Row className='my-5'>
          <Col xs='12' md='6'>
            <img
              src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1615494675/FireShot_Capture_223_-_Page_1_-_Test_111_-_www.figma.com_nrgon4.png'
              alt='hero-img'
              className='img-fluid'
            />
          </Col>
          <Col xs='12' md='6' className='hero-text2'>
            <h1>
              Keep in touch while <br /> traveling the world.
            </h1>
            <p>
              Forward-thinking businesses use Timekit to <br /> imagine, design
              and manage the perfect <br /> scheduling flows to imagine, design
              and manage.
            </p>
            <button type='submit'>View show list</button>
          </Col>
        </Row>
        <Row className='my-5'>
          <Col xs='12' md='6' className='hero-text3'>
            <h1>
              Chat with your friends <br /> while watching together.
            </h1>
            <p>
              Forward-thinking businesses use Timekit to <br /> imagine, design
              and manage the perfect <br /> scheduling flows to imagine, design
              and manage.
            </p>
          </Col>
          <Col xs='12' md='6'>
            <img src={img3} alt='hero-img' className='img-fluid' />
          </Col>
        </Row>
      </div>
      <Col className='img4 my-5'></Col>
    </>
  );
};

export default Hero;
