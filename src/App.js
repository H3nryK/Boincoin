import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FaExchangeAlt, FaGithub, FaGlobe, FaHandHoldingHeart, FaLaptopCode, FaPizzaSlice, FaRocket, FaTelegram, FaWallet }  from 'react-icons/fa';
import { FaUserNinja, FaXTwitter } from 'react-icons/fa6';
import { Accordion, Button } from 'react-bootstrap';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Fade } from 'react-awesome-reveal';
import Profile from './assets/file.png';
import './App.css';

function App() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is Meme Coin?',
      answer: 'Meme Coin is a cryptocurrency inspired by the world of memes and Internet culture.',
    },
    {
      question: 'How can I get Meme Coin?',
      answer: 'You can purchase Meme Coin on various cryptocurrency exchanges or participate in the initial token distribution.',
    },
    {
      question: 'Is Meme Coin a secure cryptocurrency?',
      answer: 'Yes, Meme Coin is built on a secure and decentralized blockchain technology, ensuring the safety of your transactions.',
    },
    {
      question: 'Can I use Meme Coin for everyday transactions?',
      answer: 'Absolutely! Meme Coin can be used for various transactions, including online purchases, peer-to-peer payments, and more.',
    },
  ];

  return (
    <div className='App'>
      <header className="bg-dark text-white py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3 col-6">
              <img src={Profile} alt="Boinacoin" className="logo" style={{ maxWidth: '70px' }} />
            </div>
            <div className="col-md-6 col-12 text-center">
              <Fade direction="left" triggerOnce>
                <h1 className="mb-0">Boinacoin</h1>
              </Fade>
            </div>
            <div className="col-md-3 col-12 d-flex justify-content-md-end justify-content-center mt-3 mt-md-0">
              <Fade direction="right" triggerOnce>
                <div className="d-flex align-items-center">
                  <a href="#" className="text-white mx-2">
                    <FaGithub size={24} />
                  </a>
                  <a href="#" className="text-white mx-2">
                    <FaXTwitter size={24} />
                  </a>
                  <a href="#" className="text-white mx-2">
                    <FaTelegram size={24} />
                  </a>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </header>

      <main className='py-5'>
        <section className='bg-dark hero-section text-white py-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6'>
              <Fade direction='left' triggerOnce>
                <h1>Boinacoin</h1>
                <p>Every bite counts.</p>
                <div className='btn-group'>
                  <Button variant='primary' className='me-2'>
                    <FaWallet className='me-2' />
                    Connect Wallet
                  </Button>
                  <Button variant='primary' className='me-2'>
                    <FaXTwitter className='me-2' />
                    Join our community
                  </Button>
                  <Button variant='primary' className='me-2'>
                    <FaTelegram className='me-2' />
                    Join our community
                  </Button>
                </div>
              </Fade>
              </div>
            <div className="col-md-6 d-flex justify-content-center">
            <Fade direction="right" triggerOnce>
              <img src={Profile} alt="Hero" className="img-fluid pulsing-logo" style={{ maxWidth: '300px' }} />
            </Fade>
          </div>
            </div>
          </div>
        </section>

        <section className='features-section py-5'>
          <div className='container'>
            <h2 className='text-center mb-4'>Key Features</h2>
            <div className='row'>
              <div className='col-md-4 mb-4'>
                <div className='feature-card p-4 text-center'>
                  <FaPizzaSlice size={48} className='mb-3' />
                  <h4>Rewarding Culinary Experiences</h4>
                  <p>
                    Boinacoin rewards users for engaging in food-related activities. Whether you're trying a new restaurant, sharing a recipe online, or attending a food festival, you can earn Boinacoins.
                    This feature incentivizes users to explore and enjoy new culinary experiences, creating a vibrant community of food enthusiasts who are rewarded for their passion.
                  </p>
                </div>
              </div>
              <div className='col-md-4 mb-4'>
                <div className='feature-card p-4 text-center'>
                  <FaHandHoldingHeart size={48} className='mb-3' />
                  <h4>Supporting Local Food Businesses</h4>
                  <p>
                    Boinacoin promotes and supports local food vendors and small businesses. Users can use Boinacoins to purchase meals, ingredients, and culinary experiences from participating vendors, helping to boost the local economy.
                    This feature encourages users to discover and support local food scenes, providing a direct economic benefit to small food businesses while enhancing the user's culinary journey.
                  </p>
                </div>
              </div>
              <div className='col-md-4 mb-4'>
                <div className='feature-card p-4 text-center'>
                  <FaUserNinja size={48} className='mb-3' />
                  <h4>Global Food Community</h4>
                  <p>
                    Boinacoin fosters a global network of food lovers.
                    Through the Boinacoin platform, users can connect with others who share their culinary interests, exchange recommendations, and participate in food-related events and challenges.
                    This feature emphasizes the social aspect of food, helping to build a supportive and engaged community that transcends geographical boundaries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='roadmap-section py-5'>
          <div className='container'>
            <h2 className='text-center mb-4'>Roadmap</h2>
            <VerticalTimeline>
              <VerticalTimelineElement
                className='vertical-timeline-element--work'
                date='Q3 2024'
                iconStyle={{ background: 'rgba(33, 150, 243)', color: '#fff'}}
                icon={<FaRocket />}
              >
                <h3 className='vertical-timeline-element-title'>Project Launch</h3>
                <p>Boinacoin is launched, and the initial token distribution begins.</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className='vertical-timeline-element--work'
                date='Q4 2024'
                iconStyle={{ background: 'rgba(233, 30, 99)', color: '#fff'}}
                icon={<FaLaptopCode />}
              >
                <h3 className='vertical-timeline-element-title'>Core Development</h3>
                <p>The core development team focuses on building the infrastructure and implementing key features.</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className='vertical-timeline-element--work'
                date='Q1 2025'
                iconStyle={{ background: 'rgba(0, 150, 136)', color: '#fff'}}
                icon={<FaExchangeAlt />}
              >
                <h3 className='vertical-timeline-element-title'>Exchange Listing</h3>
                <p>Boinacoin gets listed on major cryptocurrency exchanges, increasing its visibility and accessibility.</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className='vertical-timeline-element--work'
                date='Q2 2025'
                iconStyle={{ background: 'rgba(233, 30, 99)', color: '#fff'}}
                icon={<FaGlobe />}
              >
                <h3 className='vertical-timeline-element-title'>Global Adoption</h3>
                <p>Boinacoin aims to achieve global adoption and become a widely accepted cryptocurrency.</p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </section>
        <section className='faq-section py-5'>
          <div className='container'>
            <h2 className='text-center mb-4'>Frequently Asked Questions</h2>
            <Accordion>
              {faqs.map((faq, index) => (
                <Accordion.Item
                  key={index}
                  eventKey={index}
                  onClick={() => handleAccordionClick(index)}
                  className={'accordion-item ${activeIndex === index ? "active" : ""}'}
                >
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Body>{faq.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <footer className='bg-dark text-white py-3'>
        <div className='container'>
          <div className="row">
            <div className="col">
              <p>&copy;2024 Boinacoin</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;