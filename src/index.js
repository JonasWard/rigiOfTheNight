import React from 'react';
import { render } from 'react-dom';
import { Parallax, Background } from 'react-parallax';
import './index.css';

const styles = {
  fontFamily: 'TinTin',
  fontSize: '2.5em',
  color: '#fff',
  background: 'black',
};
const insideStyles = {
  background: 'white',
  padding: 20,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
};
const image1 = 'images/rigi_of_the_night.png';
const image2 =
  'https://images.ctfassets.net/7l5wded27svb/7Abqh1Oc613vMyFVTbswk3/62d2af6db379debb2f7245d5ebcc8e43/MA-ce421fb9-86e3-4ed6-b103-c5fa8921bbaa.jpg?fm=jpg&fl=progressive&fit=fill&q=70&h=1008&w=1380';
const image3 = 'https://images.pexels.com/photos/776113/pexels-photo-776113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
const image4 = 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg';

const App = () => (
  <div style={styles}>
    <Parallax bgImage={image1} strength={-300}>
      <div style={{ height: '100vh', marginLeft: '10%', marginRight: '10%', align: 'center' }}>
        <div style={{ textAlign: 'justify', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <h1 style={{ fontFamily: 'TinTinBold' }}>The Rigi of the Night</h1>
          </div>
          <div>
            <p>
              On Saturday June the 3th, the moon will by full. Get your inner night owl in touch with your early bird and walk with us along the starlit slopes
              of the Rigi. With carefully curated routes and good spirit, we will reach the top shortly before sunrise and enjoy the show comforted by a
              bonfire.
            </p>
          </div>
        </div>
        {/* <div style={insideStyles}>HTML inside the parallax</div> */}
      </div>
    </Parallax>
    {/* <h2>| | |</h2> */}
    <Parallax bgImage={image2} strength={-200} blur={{ min: -1, max: 3 }}>
      <div style={{ height: '100vh' }}>
        <div style={{ marginTop: '5%', marginLeft: '10%', marginRight: '10%' }}>
          Packing list includes :
          <ul style={{ textAlign: 'left' }}>
            <li>A front lamp with 5 hours of batteries </li>
            <li>Good walking shoes</li>
            <li>A rain jacket </li>
            <li>A warm layer for the walk</li>
            <li>A warm layer for the top</li>
            <li>Enough water for yourself (suggested 1.5 litres)</li>
            <li>Snacks for the way</li>
            <li>Gloves / hat / buff for confort</li>
            <li>Sunscreen as we’ll hike down during the day</li>
          </ul>
        </div>
      </div>
    </Parallax>
    {/* <h2>| | |</h2> */}
    <Parallax bgImage={image3} strength={-100}>
      <div style={{ height: '100vh' }}>
        <div style={{ marginLeft: '10%', marginRight: '10%', textAlign: 'justify' }}>
          <p>
            We bring Gipfelschnapps, first a aid kit and safety blankets. Our designated sweepers on the back will make sure that no one is left behind. Climb
            at your own pace but stick in groups of three and we meet at the top. The way down can be skipped if you take the train. Sounds like a plan ? Let us
            know and we’ll include you in the dedicated WhatsApp group. Until then, take care and have a nice day ! See you at the start (precise location to be
            defined)
          </p>
        </div>
      </div>
    </Parallax>
    {/* <h2>| | |</h2> */}
    <Parallax
      bgImage={image4}
      strength={200}
      renderLayer={(percentage) => (
        <div>
          <div
            style={{
              position: 'absolute',
              background: `rgba(255, 125, 0, ${percentage * 1})`,
              left: '50%',
              top: '50%',
              borderRadius: '50%',
              transform: 'translate(-50%,-50%)',
              width: percentage * 500,
              height: percentage * 500,
            }}
          />
        </div>
      )}
    >
      <div style={{ height: 500 }}>
        <div style={insideStyles}>renderProp</div>
      </div>
    </Parallax>
    <h2>| | |</h2>
    <Parallax strength={500}>
      <Background className='custom-bg'>
        <div
          style={{
            height: 2000,
            width: 2000,
            backgroundImage: "url('https://i.imgur.com/8CV5WAB.png')",
          }}
        />
      </Background>
      <div>
        <br />
        custom background component
        <br />
        <br />
        custom background component
        <br />
        <br />
        custom background component
        <br />
        <br />
      </div>
    </Parallax>
    <div style={{ height: 500 }} />
    <h2>{'\u2728'}</h2>
  </div>
);

render(<App />, document.getElementById('root'));
