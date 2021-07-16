import React from 'react';
import web from "../src/images/like.png";
import hexa from "../src/images/hexa.png";

const Contact = () => {
    return (
        <div>
            <section className="footer-section container-fluid">
                <h1>let's Connect!</h1>
                <div className="container">
                    <div className="card w-50 d-flex ms-auto me-auto">
                        <div className="card-body">
                            <form action="#">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Name</label>
                                    <input type="text" class="form-control" placeholder="Enter your name" required />
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Email</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" autoComplete="off" placeholder="Enter your email" required />
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Message</label>
                                    <textarea class="form-control" rows="3" placeholder="Your message here..."></textarea>
                                </div>
                                <div className="btn-design mt-3">
                                    <input type="submit" value="Submit" className="btn btn-info" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="	#F28C28" fill-opacity="1" d="M0,160L48,138.7C96,117,192,75,288,53.3C384,32,480,32,576,58.7C672,85,768,139,864,160C960,181,1056,171,1152,144C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <div className="footer-msg">
                <h5>Made with <img src={web} width="30px" height="28px" /> by Ashish Verma</h5>
            </div>
        </div>
    )
}

export default Contact;