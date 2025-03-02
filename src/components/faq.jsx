import React from 'react';
import { Box } from '@mui/material';
import { useUser } from '../services/useContext';

export default function Faq() {
  const { userData } = useUser();

  if (!userData) {
    return <div></div>;
  }

  
  const faqContainerStyle = {
    fontFamily: 'myFirstFont',
    
    width: '100%',
    margin: '30px',
    borderRadius: '30px',
    padding: '30px',
    backgroundColor: '#00350E',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const mobileFaqContainerStyle = {
    ...faqContainerStyle,
   
   
  };

  const questionStyle = {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '10px',
    maxWidth: '100%',
    wordWrap: 'break-word',
  };

  const answerStyle = {
    fontSize: '1rem',
    color: 'white',
    marginBottom: '20px',
    maxWidth: '100%',
    wordWrap: 'break-word',
  };

  return (
    <Box  className='pixel1' style={faqContainerStyle} sx={{ '@media (max-width: 600px)': mobileFaqContainerStyle }}>
      <h1 style={{ fontSize: '2rem', color: 'white', margin: '0' }}>FAQs</h1>

      <div style={{ textAlign: 'left', width: '100%' }}>
        <p style={questionStyle}>1. Can my account be used on multiple devices?</p>
        <p style={answerStyle}>
          Yes! Simply log in using your credentials and you’ll be able to use the account on any device that can access the
          web.
        </p>

        <p style={questionStyle}>2. What is the minimum amount that I’ll be able to transfer to my bank?</p>
        <p style={answerStyle}>The minimum amount that you can transfer to the bank is 1000.</p>

        <p style={questionStyle}>3. Do I need to download the game onto my device?</p>
        <p style={answerStyle}>
          No! For now, we only require you to visit our website URL to play the game.
        </p>

        <p style={questionStyle}>4. What happens if I disconnect in the middle of a match?</p>
        <p style={answerStyle}>
          Your turn timer will continue to tick down for the other player. You can reconnect, but the turns you pass on the
          timer will still be lost.
        </p>

        <p style={questionStyle}>5. How do I earn in-game currency?</p>
        <p style={answerStyle}>
          You can use money from your attached payment platform to get chips in the game. These chips can be used to enter
          into tournaments, which pay out in real money!
        </p>

        <p style={questionStyle}>6. How does this game protect me from scammers/cheaters?</p>
        <p style={answerStyle}>
          All of our cash-out transactions have a short window of time where they are approved by our staff. If an account is
          flagged for suspicious activity, it is temporarily frozen and reviewed by us. Accounts that are scamming/cheating
          will be deleted.
        </p>

        <p style={questionStyle}>7. Can I play offline?</p>
        <p style={answerStyle}>There is currently no support for an offline version of the client.</p>
      </div>
    </Box>
  );
}
