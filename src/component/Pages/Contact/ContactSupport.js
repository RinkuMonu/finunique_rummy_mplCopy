import { useState } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";

const ContactSupport = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    setShowModal(true); // Show Success Modal
    setTimeout(() => setShowModal(false), 3000); // Auto-close after 3 seconds

    // Clear form fields
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <div 
        className="game-banner d-flex align-items-center justify-content-center text-white"
        style={{ 
          backgroundImage: 'url("./images/Banner/Contact Us-01.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '50vh',
          position: 'relative'
        }}
      >
        {/* <div className="bg-dark bg-opacity-50 w-100 h-100 d-flex align-items-center justify-content-center">
          <h1 className="display-4">Contact..</h1>
        </div> */}
      </div>
    
    <Container className="py-5 mt-5">
      <Row className="justify-content-center align-items-center">
        {/* Left Side: Contact Info */}
        <Col lg={5} className="mb-4">
          <h4 className="text-uppercase text-primary">Information</h4>
          <h1 className="fw-bold">Contact Us</h1>
          <p className="text-muted">
            Have questions? Reach out to us, and we will get back to you as soon as possible.
          </p>

          <div className="mt-4">
            <h5 className="fw-bold">Find Us</h5>
            <p className="text-muted">
              PLOT NO 97, DAKSHINPURI-I, SHRIKISHANPURA, SANGANER, Jagatpura, Jaipur, Rajasthan
              <br />
              <strong className="text-dark">+91 72970 26119</strong>
            </p>

            <h5 className="fw-bold">Mail</h5>
            <p className="text-muted">
              <strong>info@FinUniquerummy.com</strong>
            </p>
          </div>
        </Col>

        {/* Right Side: Contact Form */}
        <Col lg={6}>
          <Form 
            onSubmit={handleSubmit} 
            className="p-4 rounded shadow-lg"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
            }}
          >
            <h3 className="text-center fw-bold mb-4">Get In Touch</h3>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="p-3 border-0 rounded-3"
                style={{ background: "#f8f9fa" }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-3 border-0 rounded-3"
                style={{ background: "#f8f9fa" }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                name="message"
                rows={4}
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="p-3 border-0 rounded-3"
                style={{ background: "#f8f9fa" }}
              />
            </Form.Group>

            <Button 
              variant="primary" 
              type="submit" 
              className="w-100 py-2 fw-bold rounded-pill"
              style={{
                background: "linear-gradient(135deg, #6a11cb, #2575fc)",
                border: "none",
              }}
            >
              SEND MESSAGE
            </Button>
          </Form>
        </Col>
      </Row>

      {/* Success Modal */}
      <Modal show={showModal} centered>
        <Modal.Body className="text-center p-4">
          <h3 className="text-success fw-bold">🎉 Thank You!</h3>
          <p>Your message has been successfully sent. We will contact you soon.</p>
          <Button 
            variant="success" 
            onClick={() => setShowModal(false)}
            className="px-4 py-2 fw-bold"
          >
            OK
          </Button>
        </Modal.Body>
      </Modal>
    </Container>
    </>
  );
};

export default ContactSupport;