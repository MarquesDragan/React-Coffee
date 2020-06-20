import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderPartner({partner}) {
    if(partner){
        return (
            <React.Fragment>
                <Media object src={partner.image} width="150" alt={partner.name} />
                <Media body className="ml-5 mb-4">
                    <Media heading>{partner.name}</Media>
                    {partner.description}
                </Media>
            </React.Fragment>
        );
    }
    return <div />
}

function About(props) {

    const partners = props.partners.map(partner => {
        return (
            <Media tag ="li" key={partner.Id}> <RenderPartner partner={partner} /></Media>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>About Us</h2>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-sm-6">
                    <h3>Food Makes People Happy</h3>
                    <p>Inspired by great fresh ingredients, our small neighborhood bakery on a corner in downtown Chicago began creating artisan breads and freshly baked sweets. And upon a little success, neighbors began to ask us for sandwiches made with that fabulous bread, followed by homemade soups and salads, and even made-to-order scramblers. Our guests’ requests continued to inspire us as our bakery’s menu and business grew.

Today, we continue to fulfill the needs and desires of our neighbors with a menu of ingredient-inspired, prepared-to-order food. When you visit our cafe, you’ll see real kitchens in place of assembly lines. You’ll hear the chopping of over 40 types of fresh herbs, fruits and vegetables, and the sizzle of our real panini grill. You’ll see the stove’s open flame and feel the warmth from our ovens working all day long. They’re the traditions we established years ago that we still passionately follow today.</p>
                </div>
                <div className="col-sm-6">
                    <Card>
                        <CardHeader className="bg-primary text-white"><h3>Facts At a Glance</h3></CardHeader>
                        <CardBody>
                            <dl className="row">
                                <dt className="col-6">Founded</dt>
                                <dd className="col-6">January 1, 2020</dd>
                                <dt className="col-6">No. of bakeries in 2020</dt>
                                <dd className="col-6">2</dd>
                                <dt className="col-6">No. of Reviews in 2020</dt>
                                <dd className="col-6">25</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">2</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col">
                    <Card className="bg-light mt-3">
                        <CardBody>
                            <blockquote className="blockquote">
                                <p className="mb-0">I never drink coffee at lunch. I find it keeps me up for the afternoon</p>
                                <footer className="blockquote-footer">Ronald Reagan,{' '}
                                    <cite title="Source Title">"Wind-Wafted Wild Flowers" -
                                    The Open Court, 1903</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Community Partners</h3>
                </div>
                <div className="col mt-4">
                    <Media list>
                        {partners}
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default About;