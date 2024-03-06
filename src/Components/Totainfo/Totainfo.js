import React, { useState } from 'react';
import './Totainfo.css';

function Totainfo() {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (buttono) => {
    setActiveButton((prevButton) => (prevButton === buttono ? null : buttono));
  };


  const heade = [{

     headeing : 'frequently asked questions'
  }];

  const buttonData = [
    {
      question: 'What is Loki the God of?',
      answer: 'God of Mischief and brother to Thor, Loki\'s tricks and schemes wreak havoc across the realms. Loki, Prince of Asgard, Odinson, rightful heir of Jotunheim, and God of Mischief, is burdened with glorious purpose. His desire to be a king drives him to sow chaos in Asgard.',
    },
    {
      question: 'Who is Loki now in Marvel?',
      answer: 'Loki Laufeyson, also known by adoption as Loki Odinson and by his title as the God of Mischief, is a character portrayed by Tom Hiddleston in the Marvel Cinematic Universe (MCU) media franchise.',
    },
    {
      question: 'Is Loki now God of Time?',
      answer: 'Yes. Loki goes back to the loom, transforming into the god we all know and (sometimes) love, and destroys it as his friends look on, telling them he knows what type of god he needs to be. He finds himself entangled among the branches, physically gathering them and pulling them with him as he becomes the god of time.',
    },
    {
      question: 'Who will Loki marry?',
      answer: 'Loki is married to Sigyn and they have two sons, Narfi or Nari and Váli. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. In the form of a mare, Loki was impregnated by the stallion Svaðilfari and gave birth to the eight-legged horse Sleipnir.',
    },
    {
      question: 'What is Loki\'s Norse real name?',
      answer: 'High says that Loki\'s alternative name is Lopt, that he is the son of the male jötunn Fárbauti, his mother is "Laufey or Nál", and his brothers are Helblindi and Býleistr.',
    },
    {
      question: 'Is Loki the son of Odin?',
      answer: 'In modern literature (such as Marvel Comics) it has become popular to portray Loki as the adopted son of Odin. This however has no basis in Norse mythology, where Loki is portrayed as the blood brother of Odin.',
    },
    // Add more button data as needed
  ];
  

  return (
    <div className='totalinfo'>
      <div className='nii'>
      {heade.map((headein)=>(
          <h1>{headein.headeing}</h1>

        ))}
        
      </div>
      <div className='nui'>

        
        {buttonData.map((buttono, index) => (
          <div key={index}>
            <button
              className='donn'
              onClick={() => handleClick(index)}
            >
              {buttono.question}
            </button>
            {activeButton === index && (
              <div className='oho'>
                <p>{buttono.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Totainfo;