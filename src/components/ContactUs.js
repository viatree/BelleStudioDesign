import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './css/ContactUs.css';
import emailjs from '@emailjs/browser';

const YOUR_SERVICE_ID = 'service_eg0dub2';
const YOUR_TEMPLATE_ID = 'template_ii8xrzj';
const YOUR_USER_ID = 'sYTBvFdvXdiO0w8f0';

const ContactUs = () =>{
  const [show, setShow] = useState(false);
  const form = useRef();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const sendEmail  = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_eg0dub2', 'template_ii8xrzj', form.current, 'sYTBvFdvXdiO0w8f0')
    .then(
      (result) => {
        console.log('SUCCESS!', result.text);
        alert('Email sent successfully!');
      },
      (error) => {
        console.log('FAILED...', error.text);
        alert('Failed to send email. Please try again.');
      },
    );
};

  return (
    <>
      <Button className="waitlist-button" onClick={handleShow}>
        Join the Waitlist
      </Button>

      <Modal show={show} onHide={handleClose} className="custom-modal">
        <Modal.Header className="modal-header">
        <Button variant="close" onClick={handleClose} className="btn-close" />
        </Modal.Header>
        <Modal.Body className="modal-body">
          <h2>JOIN THE WAITLIST</h2>
          <p>Be the first to build your vault and test out new features.</p>
          <Form  ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3">
              
              <Form.Control
                type="email"
                placeholder="Your Email Address"
                required
                name="from_email"
              />
            </Form.Group>
            <Button variant="dark" type="submit">
              SUBMIT
            </Button>
          </Form>
          {/* <div className="unsubscribe mt-3">UNSUBSCRIBE</div> */}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ContactUs;
