import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addCourse } from '../actions/courseActions';

class CourseModal extends Component {
    state = {
        modal: false,
        name: '',
        description: '',
        semester: null,
        major: ''
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        this.setState({ [e.target.description]: e.target.description });
        this.setState({ [e.target.semester]: e.target.semester });
        this.setState({ [e.target.major]: e.target.major });

    };

    onSubmit = e => {
        e.preventDefault();

        const newCourse = {
            name: this.state.name,
            description: this.state.description,
            semester: this.state.semester,
            major: this.state.major
        };

        // Add Course via addCourse action
        this.props.addCourse(newCourse);

        // Close modal
        this.toggle();
    };

    render() {
        return (
            <div>
                <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={this.toggle}
                >
                    Add Course
                </Button>

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add Course</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                    onChange={this.onChange}
                                />

                                <Label for="major">Major</Label>
                                <Input
                                    type="text"
                                    name="major"
                                    id="major"
                                    placeholder="Major"
                                    onChange={this.onChange}
                                />
                                <Label for="semester">Semester</Label>
                                <Input
                                    type="number"
                                    name="semester"
                                    id="semester"
                                    placeholder="Semester"
                                    onChange={this.onChange}
                                />
                                <Label for="description">Description</Label>
                                <Input
                                    type="text"
                                    name="description"
                                    id="description"
                                    placeholder="Description"
                                    onChange={this.onChange}
                                />
                                <Button color="dark" style={{ marginTop: '2rem' }} block>
                                    Add Course
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    course: state.course
});

export default connect(
    mapStateToProps,
    { addCourse }
)(CourseModal);