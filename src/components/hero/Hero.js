import React from "react";
import { Row, Col } from "reactstrap";
import "./Hero.css";
import img3 from "../../assets/test.svg";
import img5 from "../../assets/icons/Vector (5).svg";
import img7 from "../../assets/Group 27.svg";

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
          <Col xs='12' md='6' className='hero-text-img'>
            <img src={img7} alt='hero-img' className='img-fluid' />
          </Col>
        </Row>
        <Row className='my-5'>
          <Col xs='12' md='6' className='touch-container'>
            <div className='col-6 first-cont'>
              <img
                src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1615558581/Rectangle_9.1_2_fea8yk.png'
                alt='hero-img'
                className='image1'
              />
            </div>
            <div className='col-6 first-cont'>
              <img
                src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1615553854/Rectangle_9.3_bfnuwf.png'
                alt='hero-img'
                className='image2'
              />
            </div>
            <div className='col-6 first-cont'>
              <img
                src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1615558580/Rectangle_9_jabqee.png'
                alt='hero-img'
                className='image3'
              />
            </div>
            <div className='col-6 first-cont'>
              <img
                src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1615558581/Group_22_1_zazre0.png'
                alt='hero-img'
                className='image4'
              />
            </div>
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
      <Col className='img4 my-5'>
        <div>.</div>
        <p className='video'>
          <img className='mr-2' src={img5} alt='img' /> WATCH VIDEO
        </p>
      </Col>
    </>
  );
};

export default Hero;
