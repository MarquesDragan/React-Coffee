import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Label, Col, div } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            isModalOpen: false
    };
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(event){
        alert(`Current State is:`+JSON.stringify(event));
        this.toggleModal();
    }

    render() {
        return (
            <React.Fragment>
                <Button outline onClick={this.toggleModal}><i className="fa fa-pencil" />Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={values=>this.handleSubmit(values)}>
                                <div className= "form-group">
                                <Label htmlFor="rating">Rating</Label>
                                <Col sm={12}>
                                    <Control.select model=".rating" name="rating"
                                    className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                    </Col>
                                </div>
                                <div className= "form-group">
                                <Label htmlFor="author">Your Name</Label>
                                <Col sm={12}>                                
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, 
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                                </div>
                                <div className= "form-group">
                                    <Col sm={12}>
                                    <Label htmlFor="text">Text</Label>                                    
                                    <Control.textarea model=".text" name="text"
                                    className="form-control">
                                    </Control.textarea>
                                    </Col>
                                </div>
                                <Button type="submit">Submit</Button>
                            </LocalForm>
                        </ModalBody>
                </Modal>
            </React.Fragment>
            );
        }
    }


function RenderCampsite({campsite}) {
    return (
        <div className = "col-md-5 and m-1">
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
    </div>
    );
}

function RenderComments({comments}) {
    if (comments) {
    return (
        <div className = "col-md-5 and m-1">
            <h4>Comments</h4>
            {comments.map(comment => {
                return (
            <div key={comment.id}>                
                <p>
                    {comment.text}<br></br>
                    --{comment.author},
                    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                </p>   
            </div>
                )
            }
            )}
            <CommentForm />
        </div>
    );
        }
        return <div />
}

function CampsiteInfo(props) {
    if (props.campsite) {
        return (
            <div className="container">
                <div className="div">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.campsite.name}</h2>
                        <hr />
                    </div>
                </div>                
                <div className = "row">
                    <RenderCampsite campsite = {props.campsite}/>
                    <RenderComments comments = {props.comments} />
                </div>
            </div>
        );
    }
        return <div />;
}

export default CampsiteInfo;