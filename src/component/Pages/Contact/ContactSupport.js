import { useState } from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
const ContactSupport = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add form submission logic (API call, etc.) here
  };
  return (
    // <article className="container mb-5 p-4 rounded shadow-lg" style={{marginTop:"80px"}}>
    //   <header className="mb-4 text-center ">
    //     <h1 className="h3">Contact Support</h1>
    //   </header>
    //   <div className="entry-content">
    //     <p>
    //       If you are facing any issues with the Finunique Small Private Limites app, we’re here to help you out. Your query might already be answered in our FAQ sections. Check out specific FAQs on
    //       <Link href="#" className="mx-1">KYC / Withdrawal</Link>,
    //       <Link href="#" className="mx-1">Fantasy FAQs</Link>,
    //       <Link href="#" className="mx-1">Games</Link>, and
    //       <Link href="#" className="mx-1">Sharing</Link>.
    //     </p>
    //     <p>
    //       You can also reach out to customer support from Finunique Small Private Limites Helpdesk at
    //       <Link href="mailto:community@Finunique Small Private Limitesgaming.com" className="mx-1">@Finuniquerummy.com</Link>
    //       or connect to an Finunique Small Private Limites executive via In-App chat and have your queries resolved.
    //     </p>
    //   </div>
    // </article>
    <>
     <Container>
      <Row className="justify-content-center py-5 mt-5 text-left">
        <Col md={6} className="text-left">
          <h4 className="text-uppercase text-primary">Information</h4>
          <h1>Contact Us</h1>
          <p>
            As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.
          </p>
          <h3>Find Us</h3>
          <p>
            PLOT NO 97, DAKSHINPURI-I, SHRIKISHANPURA, SANGANER, Jagatpura, Jaipur, Jaipur- 302017, Rajasthan <br />
            <strong >+91  72970 26119</strong>
          </p>
          <h3>Mail</h3>
          <p>
            <strong>info@FinUniquerummy.com</strong>
          </p>
        </Col>

        <Col md={6}>
          <Form onSubmit={handleSubmit} className="p-4 shadow rounded bg-light">
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                name="message"
                rows={5}
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              SEND MESSAGE
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default ContactSupport;
