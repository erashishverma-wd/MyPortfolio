import React from 'react';

import { NavLink } from 'react-router-dom';

const Page = (p) => {
    return (
        <>
            <section id="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>{p.pre}<strong className="brand-name">{p.name}</strong> </h1>
                                    <h2 className="my-3">{p.tagLine}</h2>
                                    <div className="mt-3">
                                        <NavLink to={p.visit} className="btn btn-outline-primary btn-lg btn-design" id="myBtn" role="button">{p.btn}</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={p.webimg} className="img-fluid animated" alt="Hovering Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Page;