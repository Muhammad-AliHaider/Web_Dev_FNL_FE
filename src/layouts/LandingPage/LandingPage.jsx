import React from 'react';
import { Button, notification, Space } from 'antd';
import { Link } from "react-router-dom";
import './LandingPage.css';
import Music from '../../assets/music/storm-clouds-purpple-cat.wav';
import { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';

function getRandomCircleStyle() {
  const circleSize = Math.random() * 6;
  const startPositionX = Math.random() * 100 + 'vw';
  const startPositionY = Math.random() * 10 + 100 + 'vh';
  const endPositionX = Math.random() * 100 + 'vw';
  const endPositionY = (-1 * parseFloat(startPositionY)) - Math.random() * 30 + 'vh';
  const moveDuration = 28000 + Math.random() * 9000;
  const animationDelay = Math.random() * 20000;
  const scaleDuration = 2000 + Math.random() * 3000;
  const scaleDelay = Math.random() * 4000;
  const fadeDuration = 2000 + Math.random() * 3000;
  const fadeDelay = Math.random() * 2000;
  const scaleDirection = Math.random() > 0.5 ? 'scaleUp' : 'scaleDown'; // Add this line

  return {
    '--circle-size': `${circleSize}px`,
    '--start-position-x': startPositionX,
    '--start-position-y': startPositionY,
    '--end-position-x': endPositionX,
    '--end-position-y': endPositionY,
    '--move-duration': `${moveDuration}ms`,
    '--animation-delay': `${animationDelay}ms`,
    '--scale-duration': `${scaleDuration}ms`,
    '--scale-delay': `${scaleDelay}ms`,
    '--fade-duration': `${fadeDuration}ms`,
    '--fade-delay': `${fadeDelay}ms`,
    '--scale-direction': scaleDirection, // Add this line
  };
}

function play(){
  console.log("is playing")
  new Audio(Music).play()
}

function LandingPage() {
  const [api, contextHolder] = notification.useNotification();
  const location = useLocation();

  useEffect(()=>{
    openNotification()
  },[])
  useEffect(() => {
    console.log('Location changed', location);
  }, [location]);

  const openNotification = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Space>
        <Button type="primary" size="small" onClick={() => api.destroy(key)}>
          Confirm
        </Button>
      </Space>
    );
    api.open({
      message: 'Notification Title',
      description:
        'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
      btn,
      key,
    });}
  const circles = Array.from({ length: 50 }, () => getRandomCircleStyle());

  return (

    <div className="containers" style={{ height: '100vh' }}>
       {contextHolder}
      <div className="background">
        <div class="mycontainer">

          <div class="topnav">
          <Link to={"/signin"}>Login</Link>
          <Link to={"/signup"}>SignUp</Link>
          </div>
        </div>
        <div class="mycontainer2">
          <div class="topnav">
            <a href="#contact">Demo</a>
          <Link to={"/about"}>About</Link>
          </div>
        </div>
      </div>
      <div className="circle-container">
        {circles.map((style, index) => (
          <div key={index} className="circle-container" style={style}>
            <div className= {Math.random() > 0.5 ?"circle" : "circle2"}></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
