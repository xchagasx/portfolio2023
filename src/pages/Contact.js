import React from "react";
import '../styles/Contact.css';

function Contact() {
  return (
    <div>
      <form>
        <label>Nome</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          ></input>
          <br />
          <label>Email</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your Email.."
          ></input>
          <br />
          <label>Escreva sua Mensagem.</label>
          <br />
          <textarea placeholder="Messagem...">
          </textarea>
          <br />
          <input type="submit" value="Submit"></input>
      </form>
    </div>
    // <Container>
    //   <Row className="mb-5 mt-3">
    //     <Col lg='8'>
    //       <h1 className="display-4 mb4">
    //         Contact me
    //       </h1>
    //     </Col>
    //   </Row>

    //   <Row className="sec_sp">
    //     <Col ld='5' className="mb-5">
    //       <h3 className="color_sec py-4">Get in touch</h3>
    //       <address>
    //         <strong>Email : email@email.com.br</strong>
    //         <br />
    //         <p>
    //           <strong>Phone : +55 98765 4321</strong>
    //         </p>
    //       </address>
    //       <p>{contactConfig.description}</p>
    //     </Col>
    //     <Col lg='7' className="d-flex align-items-center">
    //       <form className="contact__form w-100">
    //         <Row>
    //           <Col lg='6' className="form-group">
    //             <input
    //               className="form-control"
    //               id="name"
    //               name="name"
    //               placeholder="Name"
    //               type='text'
    //             />
    //           </Col>
    //           <Col lg='6' className="form-group">
    //             <input
    //               className="form-control rounded-0"
    //               id="email"
    //               name="email"
    //               placeholder="Email"
    //               type='email'
    //             />
    //           </Col>
    //         </Row>
    //         <textarea
    //           className="form-control rounded-0"
    //           id="message"
    //           name="message"
    //           placeholder="Message"
    //           rows='5'
    //           ></textarea>
    //           <br />
    //           <Row>
    //             <Col lg='12' className="form-group">
    //               <button className="btn ac_btn" type="submit">
    //                 Send
    //               </button>
    //             </Col>
    //           </Row>
    //       </form>
    //     </Col>
    //   </Row>
    // </Container>
  )
}

export default Contact;