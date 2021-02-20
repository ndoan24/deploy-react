import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our Food!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://files.slack.com/files-pri/T018R8C5LSE-F01M44DABQU/imagejpeg_0_2_.jpg'
              text='Explore our Thai Tacos inspired'
              label='Thai Tacos'
              path='/menu'
            />
            <CardItem
              src='https://files.slack.com/files-tmb/T018R8C5LSE-F01N80G3N0L-bcebf63550/facebook_1613268874123_6766540091811786655_720.jpg'
              text='Get a taste of our soup'
              label='Soup'
              path='/menu'
            />




<CardItem
              src='https://files.slack.com/files-tmb/T018R8C5LSE-F01MYNFEFQD-2e766f38d2/facebook_1613268942065_6766540376780488263_720.jpg'
              text='On a warm or cold day'
              label='Soup'
              path='/menu'
            />
          </ul>

          <CardItem
              src='https://files.slack.com/files-tmb/T018R8C5LSE-F01MAJ0J7U1-fcad91f41d/img_6885_720.jpg'
              text='$3 per taco'
              label='Thai Tacos'
              path='/menu'
            />
          <ul className='cards__items'>
        
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
