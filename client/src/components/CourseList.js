import React, { Component } from 'react';
import {
    Container, ListGroup, ListGroupItem, Button, Card, CardHeader, CardFooter, CardBody,
    CardText, Collapse, Nav, NavItem, NavLink, TabContent, TabPane, Label, FormGroup, Input
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getCourses, deleteCourse, editCourse } from '../actions/courseActions';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class CourseList extends Component {
    state = {
        description: this.props.defaultInputValue,
        isOpen: false,
        isOpen2: false,
        isOpen3: false,
        isOpen4: false,
        isOpen5: false,
        isOpen6: false,
        toggle: false,
        isEdit: false,
        editid: ''
    };

    componentDidMount() {
        this.props.getCourses();
    }

    componentDidUpdate(prevProps) {
        if (this.props.id !== prevProps.id) {
            this.props.getCourses();
        }
    }

    onDeleteClick = id => {
        this.props.deleteCourse(id);
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };
    toggle2 = () => {
        this.setState({
            isOpen2: !this.state.isOpen2
        });
    };
    toggle3 = () => {
        this.setState({
            isOpen3: !this.state.isOpen3
        });
    };
    toggle4 = () => {
        this.setState({
            isOpen4: !this.state.isOpen4
        });
    };
    toggle5 = () => {
        this.setState({
            isOpen5: !this.state.isOpen5
        });
    };
    toggle6 = () => {
        this.setState({
            isOpen6: !this.state.isOpen6
        });
    };

    tabToggle = (tab) => {
        if (this.state.activeTab !== tab)
            this.setState({
                activeTab: tab
            });
    };

    tabToggle2 = (tab) => {
        if (this.state.activeTab2 !== tab)
            this.setState({
                activeTab2: tab
            });
    };

    tabToggle3 = (tab) => {
        if (this.state.activeTab3 !== tab)
            this.setState({
                activeTab3: tab
            });
    };

    tabToggle4 = (tab) => {
        if (this.state.activeTab4 !== tab)
            this.setState({
                activeTab4: tab
            });
    };

    EditCourse = (id) => {
        this.setState({
            isEdit: !this.state.isEdit,
            editid: id
        });
    };

    onChange = e => {
        this.setState({ description: e.target.value });
    };

    DoneEditCourse = (id) => {
        this.setState({
            isEdit: !this.state.isEdit
        });
        const CourseEdit = {
            description: this.state.description
        };
        this.props.editCourse(CourseEdit, id);
        window.location.reload(false);
    };

    render() {
        const { courses } = this.props.course;
        return (
            <Container>
                <ListGroup>
                    <ListGroupItem><Button color="primary" onClick={this.toggle} >Faculty of Media Engineering and Technology (MET)</Button>
                        <Collapse isOpen={this.state.isOpen}>
                            <ListGroup>
                                <ListGroupItem><Button color="primary" onClick={this.toggle2} >Computer Science and Engineering</Button>
                                    <Collapse isOpen={this.state.isOpen2}>
                                        <Nav tabs>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab === '1' })}
                                                    onClick={() => { this.tabToggle('1'); }}
                                                >
                                                    Semester 1
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab === '2' })}
                                                    onClick={() => { this.tabToggle('2'); }}
                                                >
                                                    Semester 2
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab === '3' })}
                                                    onClick={() => { this.tabToggle('3'); }}
                                                >
                                                    Semester 3
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab === '4' })}
                                                    onClick={() => { this.tabToggle('4'); }}
                                                >
                                                    Semester 4
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab === '5' })}
                                                    onClick={() => { this.tabToggle('5'); }}
                                                >
                                                    Semester 5
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab === '6' })}
                                                    onClick={() => { this.tabToggle('6'); }}
                                                >
                                                    Semester 6
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab === '7' })}
                                                    onClick={() => { this.tabToggle('7'); }}
                                                >
                                                    Semester 7
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab === '8' })}
                                                    onClick={() => { this.tabToggle('8'); }}
                                                >
                                                    Semester 8
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab === '9' })}
                                                    onClick={() => { this.tabToggle('9'); }}
                                                >
                                                    Semester 9
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab === '10' })}
                                                    onClick={() => { this.tabToggle('10'); }}
                                                >
                                                    Semester 10
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab === '11' })}
                                                    onClick={() => { this.tabToggle('11'); }}
                                                >
                                                    Electives
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                        <TabContent activeTab={this.state.activeTab}>
                                            <TabPane tabId="1">
                                                <ListGroup>
                                                    <TransitionGroup className="course-list">
                                                        {courses.map(({ _id, name, description, semester, major }) => (
                                                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                                                <Container>
                                                                    {major === "Computer Science and Engineering" && semester === 1 ? (
                                                                        <ListGroupItem>
                                                                            <Card>
                                                                                <CardHeader>{name}</CardHeader>
                                                                                <CardBody>
                                                                                    {(!this.state.isEdit) ? <CardText>{description}</CardText> :
                                                                                        (this.state.editid == _id) ?
                                                                                            <FormGroup>
                                                                                                <Label for="description">Description</Label>
                                                                                                <Input type="textarea" name="text" id="description" defaultValue={description} onChange={this.onChange} />
                                                                                            </FormGroup>
                                                                                            : <CardText>{description}</CardText>
                                                                                    }
                                                                                </CardBody>
                                                                                <CardFooter>
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button
                                                                                            className="remove-btn"
                                                                                            color="danger"
                                                                                            onClick={this.onDeleteClick.bind(this, _id)}
                                                                                        >
                                                                                            Delete Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            null : <Button
                                                                                                className="remove-btn"
                                                                                                color="danger"
                                                                                                onClick={this.onDeleteClick.bind(this, _id)}
                                                                                            >
                                                                                                Delete Course
                                                                                            </Button>
                                                                                    }
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                            Edit Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            <Button color="primary" onClick={this.DoneEditCourse.bind(this, _id)}>
                                                                                                Done
                                                                                            </Button> : <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                                Edit Course
                                                                                            </Button>
                                                                                    }
                                                                                </CardFooter>
                                                                            </Card>
                                                                        </ListGroupItem>
                                                                    ) : null}
                                                                </Container>
                                                            </CSSTransition>
                                                        ))}
                                                    </TransitionGroup>
                                                </ListGroup>
                                            </TabPane>
                                        </TabContent>
                                        <TabContent activeTab={this.state.activeTab}>
                                            <TabPane tabId="2">
                                                <ListGroup>
                                                    <TransitionGroup className="course-list">
                                                        {courses.map(({ _id, name, description, semester, major }) => (
                                                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                                                <Container>
                                                                    {major === "Computer Science and Engineering" && semester === 2 ? (
                                                                        <ListGroupItem>
                                                                            <Card>
                                                                                <CardHeader>{name}</CardHeader>
                                                                                <CardBody>
                                                                                    {(!this.state.isEdit) ? <CardText>{description}</CardText> :
                                                                                        (this.state.editid == _id) ?
                                                                                            <FormGroup>
                                                                                                <Label for="description">Description</Label>
                                                                                                <Input type="textarea" name="text" id="description" defaultValue={description} onChange={this.onChange} />
                                                                                            </FormGroup>
                                                                                            : <CardText>{description}</CardText>
                                                                                    }
                                                                                </CardBody>
                                                                                <CardFooter>
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button
                                                                                            className="remove-btn"
                                                                                            color="danger"
                                                                                            onClick={this.onDeleteClick.bind(this, _id)}
                                                                                        >
                                                                                            Delete Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            null : <Button
                                                                                                className="remove-btn"
                                                                                                color="danger"
                                                                                                onClick={this.onDeleteClick.bind(this, _id)}
                                                                                            >
                                                                                                Delete Course
                                                                                            </Button>
                                                                                    }
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                            Edit Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            <Button color="primary" onClick={this.DoneEditCourse.bind(this, _id)}>
                                                                                                Done
                                                                                            </Button> : <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                                Edit Course
                                                                                            </Button>
                                                                                    }
                                                                                </CardFooter>
                                                                            </Card>
                                                                        </ListGroupItem>
                                                                    ) : null}
                                                                </Container>
                                                            </CSSTransition>
                                                        ))}
                                                    </TransitionGroup>
                                                </ListGroup>
                                            </TabPane>
                                        </TabContent>
                                        <TabContent activeTab={this.state.activeTab}>
                                            <TabPane tabId="3">
                                                <ListGroup>
                                                    <TransitionGroup className="course-list">
                                                        {courses.map(({ _id, name, description, semester, major }) => (
                                                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                                                <Container>
                                                                    {major === "Computer Science and Engineering" && semester === 3 ? (
                                                                        <ListGroupItem>
                                                                            <Card>
                                                                                <CardHeader>{name}</CardHeader>
                                                                                <CardBody>
                                                                                    {(!this.state.isEdit) ? <CardText>{description}</CardText> :
                                                                                        (this.state.editid == _id) ?
                                                                                            <FormGroup>
                                                                                                <Label for="description">Description</Label>
                                                                                                <Input type="textarea" name="text" id="description" defaultValue={description} onChange={this.onChange} />
                                                                                            </FormGroup>
                                                                                            : <CardText>{description}</CardText>
                                                                                    }
                                                                                </CardBody>
                                                                                <CardFooter>
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button
                                                                                            className="remove-btn"
                                                                                            color="danger"
                                                                                            onClick={this.onDeleteClick.bind(this, _id)}
                                                                                        >
                                                                                            Delete Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            null : <Button
                                                                                                className="remove-btn"
                                                                                                color="danger"
                                                                                                onClick={this.onDeleteClick.bind(this, _id)}
                                                                                            >
                                                                                                Delete Course
                                                                                            </Button>
                                                                                    }
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                            Edit Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            <Button color="primary" onClick={this.DoneEditCourse.bind(this, _id)}>
                                                                                                Done
                                                                                            </Button> : <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                                Edit Course
                                                                                            </Button>
                                                                                    }
                                                                                </CardFooter>
                                                                            </Card>
                                                                        </ListGroupItem>
                                                                    ) : null}
                                                                </Container>
                                                            </CSSTransition>
                                                        ))}
                                                    </TransitionGroup>
                                                </ListGroup>
                                            </TabPane>
                                        </TabContent>
                                        <TabContent activeTab={this.state.activeTab}>
                                            <TabPane tabId="4">
                                                <ListGroup>
                                                    <TransitionGroup className="course-list">
                                                        {courses.map(({ _id, name, description, semester, major }) => (
                                                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                                                <Container>
                                                                    {major === "Computer Science and Engineering" && semester === 4 ? (
                                                                        <ListGroupItem>
                                                                            <Card>
                                                                                <CardHeader>{name}</CardHeader>
                                                                                <CardBody>
                                                                                    {(!this.state.isEdit) ? <CardText>{description}</CardText> :
                                                                                        (this.state.editid == _id) ?
                                                                                            <FormGroup>
                                                                                                <Label for="description">Description</Label>
                                                                                                <Input type="textarea" name="text" id="description" defaultValue={description} onChange={this.onChange} />
                                                                                            </FormGroup>
                                                                                            : <CardText>{description}</CardText>
                                                                                    }
                                                                                </CardBody>
                                                                                <CardFooter>
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button
                                                                                            className="remove-btn"
                                                                                            color="danger"
                                                                                            onClick={this.onDeleteClick.bind(this, _id)}
                                                                                        >
                                                                                            Delete Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            null : <Button
                                                                                                className="remove-btn"
                                                                                                color="danger"
                                                                                                onClick={this.onDeleteClick.bind(this, _id)}
                                                                                            >
                                                                                                Delete Course
                                                                                            </Button>
                                                                                    }
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                            Edit Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            <Button color="primary" onClick={this.DoneEditCourse.bind(this, _id)}>
                                                                                                Done
                                                                                            </Button> : <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                                Edit Course
                                                                                            </Button>
                                                                                    }
                                                                                </CardFooter>
                                                                            </Card>
                                                                        </ListGroupItem>
                                                                    ) : null}
                                                                </Container>
                                                            </CSSTransition>
                                                        ))}
                                                    </TransitionGroup>
                                                </ListGroup>
                                            </TabPane>
                                        </TabContent>
                                        <TabContent activeTab={this.state.activeTab}>
                                            <TabPane tabId="5">
                                                <ListGroup>
                                                    <TransitionGroup className="course-list">
                                                        {courses.map(({ _id, name, description, semester, major }) => (
                                                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                                                <Container>
                                                                    {major === "Computer Science and Engineering" && semester === 5 ? (
                                                                        <ListGroupItem>
                                                                            <Card>
                                                                                <CardHeader>{name}</CardHeader>
                                                                                <CardBody>
                                                                                    {(!this.state.isEdit) ? <CardText>{description}</CardText> :
                                                                                        (this.state.editid == _id) ?
                                                                                            <FormGroup>
                                                                                                <Label for="description">Description</Label>
                                                                                                <Input type="textarea" name="text" id="description" defaultValue={description} onChange={this.onChange} />
                                                                                            </FormGroup>
                                                                                            : <CardText>{description}</CardText>
                                                                                    }
                                                                                </CardBody>
                                                                                <CardFooter>
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button
                                                                                            className="remove-btn"
                                                                                            color="danger"
                                                                                            onClick={this.onDeleteClick.bind(this, _id)}
                                                                                        >
                                                                                            Delete Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            null : <Button
                                                                                                className="remove-btn"
                                                                                                color="danger"
                                                                                                onClick={this.onDeleteClick.bind(this, _id)}
                                                                                            >
                                                                                                Delete Course
                                                                                            </Button>
                                                                                    }
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                            Edit Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            <Button color="primary" onClick={this.DoneEditCourse.bind(this, _id)}>
                                                                                                Done
                                                                                            </Button> : <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                                Edit Course
                                                                                            </Button>
                                                                                    }
                                                                                </CardFooter>
                                                                            </Card>
                                                                        </ListGroupItem>
                                                                    ) : null}
                                                                </Container>
                                                            </CSSTransition>
                                                        ))}
                                                    </TransitionGroup>
                                                </ListGroup>
                                            </TabPane>
                                        </TabContent>
                                        <TabContent activeTab={this.state.activeTab}>
                                            <TabPane tabId="6">
                                                <ListGroup>
                                                    <TransitionGroup className="course-list">
                                                        {courses.map(({ _id, name, description, semester, major }) => (
                                                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                                                <Container>
                                                                    {major === "Computer Science and Engineering" && semester === 6 ? (
                                                                        <ListGroupItem>
                                                                            <Card>
                                                                                <CardHeader>{name}</CardHeader>
                                                                                <CardBody>
                                                                                    {(!this.state.isEdit) ? <CardText>{description}</CardText> :
                                                                                        (this.state.editid == _id) ?
                                                                                            <FormGroup>
                                                                                                <Label for="description">Description</Label>
                                                                                                <Input type="textarea" name="text" id="description" defaultValue={description} onChange={this.onChange} />
                                                                                            </FormGroup>
                                                                                            : <CardText>{description}</CardText>
                                                                                    }
                                                                                </CardBody>
                                                                                <CardFooter>
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button
                                                                                            className="remove-btn"
                                                                                            color="danger"
                                                                                            onClick={this.onDeleteClick.bind(this, _id)}
                                                                                        >
                                                                                            Delete Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            null : <Button
                                                                                                className="remove-btn"
                                                                                                color="danger"
                                                                                                onClick={this.onDeleteClick.bind(this, _id)}
                                                                                            >
                                                                                                Delete Course
                                                                                            </Button>
                                                                                    }
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                            Edit Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            <Button color="primary" onClick={this.DoneEditCourse.bind(this, _id)}>
                                                                                                Done
                                                                                            </Button> : <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                                Edit Course
                                                                                            </Button>
                                                                                    }
                                                                                </CardFooter>
                                                                            </Card>
                                                                        </ListGroupItem>
                                                                    ) : null}
                                                                </Container>
                                                            </CSSTransition>
                                                        ))}
                                                    </TransitionGroup>
                                                </ListGroup>
                                            </TabPane>
                                        </TabContent>
                                        <TabContent activeTab={this.state.activeTab}>
                                            <TabPane tabId="7">
                                                <ListGroup>
                                                    <TransitionGroup className="course-list">
                                                        {courses.map(({ _id, name, description, semester, major }) => (
                                                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                                                <Container>
                                                                    {major === "Computer Science and Engineering" && semester === 7 ? (
                                                                        <ListGroupItem>
                                                                            <Card>
                                                                                <CardHeader>{name}</CardHeader>
                                                                                <CardBody>
                                                                                    {(!this.state.isEdit) ? <CardText>{description}</CardText> :
                                                                                        (this.state.editid == _id) ?
                                                                                            <FormGroup>
                                                                                                <Label for="description">Description</Label>
                                                                                                <Input type="textarea" name="text" id="description" defaultValue={description} onChange={this.onChange} />
                                                                                            </FormGroup>
                                                                                            : <CardText>{description}</CardText>
                                                                                    }
                                                                                </CardBody>
                                                                                <CardFooter>
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button
                                                                                            className="remove-btn"
                                                                                            color="danger"
                                                                                            onClick={this.onDeleteClick.bind(this, _id)}
                                                                                        >
                                                                                            Delete Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            null : <Button
                                                                                                className="remove-btn"
                                                                                                color="danger"
                                                                                                onClick={this.onDeleteClick.bind(this, _id)}
                                                                                            >
                                                                                                Delete Course
                                                                                            </Button>
                                                                                    }
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                            Edit Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            <Button color="primary" onClick={this.DoneEditCourse.bind(this, _id)}>
                                                                                                Done
                                                                                            </Button> : <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                                Edit Course
                                                                                            </Button>
                                                                                    }
                                                                                </CardFooter>
                                                                            </Card>
                                                                        </ListGroupItem>
                                                                    ) : null}
                                                                </Container>
                                                            </CSSTransition>
                                                        ))}
                                                    </TransitionGroup>
                                                </ListGroup>
                                            </TabPane>
                                        </TabContent>
                                        <TabContent activeTab={this.state.activeTab}>
                                            <TabPane tabId="8">
                                                <ListGroup>
                                                    <TransitionGroup className="course-list">
                                                        {courses.map(({ _id, name, description, semester, major }) => (
                                                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                                                <Container>
                                                                    {major === "Computer Science and Engineering" && semester === 8 ? (
                                                                        <ListGroupItem>
                                                                            <Card>
                                                                                <CardHeader>{name}</CardHeader>
                                                                                <CardBody>
                                                                                    {(!this.state.isEdit) ? <CardText>{description}</CardText> :
                                                                                        (this.state.editid == _id) ?
                                                                                            <FormGroup>
                                                                                                <Label for="description">Description</Label>
                                                                                                <Input type="textarea" name="text" id="description" defaultValue={description} onChange={this.onChange} />
                                                                                            </FormGroup>
                                                                                            : <CardText>{description}</CardText>
                                                                                    }
                                                                                </CardBody>
                                                                                <CardFooter>
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button
                                                                                            className="remove-btn"
                                                                                            color="danger"
                                                                                            onClick={this.onDeleteClick.bind(this, _id)}
                                                                                        >
                                                                                            Delete Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            null : <Button
                                                                                                className="remove-btn"
                                                                                                color="danger"
                                                                                                onClick={this.onDeleteClick.bind(this, _id)}
                                                                                            >
                                                                                                Delete Course
                                                                                            </Button>
                                                                                    }
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                            Edit Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            <Button color="primary" onClick={this.DoneEditCourse.bind(this, _id)}>
                                                                                                Done
                                                                                            </Button> : <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                                Edit Course
                                                                                            </Button>
                                                                                    }
                                                                                </CardFooter>
                                                                            </Card>
                                                                        </ListGroupItem>
                                                                    ) : null}
                                                                </Container>
                                                            </CSSTransition>
                                                        ))}
                                                    </TransitionGroup>
                                                </ListGroup>
                                            </TabPane>
                                        </TabContent>
                                        <TabContent activeTab={this.state.activeTab}>
                                            <TabPane tabId="9">
                                                <ListGroup>
                                                    <TransitionGroup className="course-list">
                                                        {courses.map(({ _id, name, description, semester, major }) => (
                                                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                                                <Container>
                                                                    {major === "Computer Science and Engineering" && semester === 9 ? (
                                                                        <ListGroupItem>
                                                                            <Card>
                                                                                <CardHeader>{name}</CardHeader>
                                                                                <CardBody>
                                                                                    {(!this.state.isEdit) ? <CardText>{description}</CardText> :
                                                                                        (this.state.editid == _id) ?
                                                                                            <FormGroup>
                                                                                                <Label for="description">Description</Label>
                                                                                                <Input type="textarea" name="text" id="description" defaultValue={description} onChange={this.onChange} />
                                                                                            </FormGroup>
                                                                                            : <CardText>{description}</CardText>
                                                                                    }
                                                                                </CardBody>
                                                                                <CardFooter>
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button
                                                                                            className="remove-btn"
                                                                                            color="danger"
                                                                                            onClick={this.onDeleteClick.bind(this, _id)}
                                                                                        >
                                                                                            Delete Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            null : <Button
                                                                                                className="remove-btn"
                                                                                                color="danger"
                                                                                                onClick={this.onDeleteClick.bind(this, _id)}
                                                                                            >
                                                                                                Delete Course
                                                                                            </Button>
                                                                                    }
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                            Edit Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            <Button color="primary" onClick={this.DoneEditCourse.bind(this, _id)}>
                                                                                                Done
                                                                                            </Button> : <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                                Edit Course
                                                                                            </Button>
                                                                                    }
                                                                                </CardFooter>
                                                                            </Card>
                                                                        </ListGroupItem>
                                                                    ) : null}
                                                                </Container>
                                                            </CSSTransition>
                                                        ))}
                                                    </TransitionGroup>
                                                </ListGroup>
                                            </TabPane>
                                        </TabContent>
                                        <TabContent activeTab={this.state.activeTab}>
                                            <TabPane tabId="10">
                                                <ListGroup>
                                                    <TransitionGroup className="course-list">
                                                        {courses.map(({ _id, name, description, semester, major }) => (
                                                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                                                <Container>
                                                                    {major === "Computer Science and Engineering" && semester === 10 ? (
                                                                        <ListGroupItem>
                                                                            <Card>
                                                                                <CardHeader>{name}</CardHeader>
                                                                                <CardBody>
                                                                                    {(!this.state.isEdit) ? <CardText>{description}</CardText> :
                                                                                        (this.state.editid == _id) ?
                                                                                            <FormGroup>
                                                                                                <Label for="description">Description</Label>
                                                                                                <Input type="textarea" name="text" id="description" defaultValue={description} onChange={this.onChange} />
                                                                                            </FormGroup>
                                                                                            : <CardText>{description}</CardText>
                                                                                    }
                                                                                </CardBody>
                                                                                <CardFooter>
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button
                                                                                            className="remove-btn"
                                                                                            color="danger"
                                                                                            onClick={this.onDeleteClick.bind(this, _id)}
                                                                                        >
                                                                                            Delete Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            null : <Button
                                                                                                className="remove-btn"
                                                                                                color="danger"
                                                                                                onClick={this.onDeleteClick.bind(this, _id)}
                                                                                            >
                                                                                                Delete Course
                                                                                            </Button>
                                                                                    }
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                            Edit Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            <Button color="primary" onClick={this.DoneEditCourse.bind(this, _id)}>
                                                                                                Done
                                                                                            </Button> : <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                                Edit Course
                                                                                            </Button>
                                                                                    }
                                                                                </CardFooter>
                                                                            </Card>
                                                                        </ListGroupItem>
                                                                    ) : null}
                                                                </Container>
                                                            </CSSTransition>
                                                        ))}
                                                    </TransitionGroup>
                                                </ListGroup>
                                            </TabPane>
                                        </TabContent>
                                        <TabContent activeTab={this.state.activeTab}>
                                            <TabPane tabId="11">
                                                <ListGroup>
                                                    <TransitionGroup className="course-list">
                                                        {courses.map(({ _id, name, description, semester, major }) => (
                                                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                                                <Container>
                                                                    {major === "Computer Science and Engineering" && semester === 11 ? (
                                                                        <ListGroupItem>
                                                                            <Card>
                                                                                <CardHeader>{name}</CardHeader>
                                                                                <CardBody>
                                                                                    {(!this.state.isEdit) ? <CardText>{description}</CardText> :
                                                                                        (this.state.editid == _id) ?
                                                                                            <FormGroup>
                                                                                                <Label for="description">Description</Label>
                                                                                                <Input type="textarea" name="text" id="description" defaultValue={description} onChange={this.onChange} />
                                                                                            </FormGroup>
                                                                                            : <CardText>{description}</CardText>
                                                                                    }
                                                                                </CardBody>
                                                                                <CardFooter>
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button
                                                                                            className="remove-btn"
                                                                                            color="danger"
                                                                                            onClick={this.onDeleteClick.bind(this, _id)}
                                                                                        >
                                                                                            Delete Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            null : <Button
                                                                                                className="remove-btn"
                                                                                                color="danger"
                                                                                                onClick={this.onDeleteClick.bind(this, _id)}
                                                                                            >
                                                                                                Delete Course
                                                                                            </Button>
                                                                                    }
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                            Edit Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            <Button color="primary" onClick={this.DoneEditCourse.bind(this, _id)}>
                                                                                                Done
                                                                                            </Button> : <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                                Edit Course
                                                                                            </Button>
                                                                                    }
                                                                                </CardFooter>
                                                                            </Card>
                                                                        </ListGroupItem>
                                                                    ) : null}
                                                                </Container>
                                                            </CSSTransition>
                                                        ))}
                                                    </TransitionGroup>
                                                </ListGroup>
                                            </TabPane>
                                        </TabContent>
                                    </Collapse></ListGroupItem>
                                <ListGroupItem><Button color="primary" onClick={this.toggle3} >Digital Media Engineering and Technology</Button>
                                    <Collapse isOpen={this.state.isOpen3}>
                                        <Nav tabs>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab2 === '1' })}
                                                    onClick={() => { this.tabToggle2('1'); }}
                                                >
                                                    Semester 1
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab2 === '2' })}
                                                    onClick={() => { this.tabToggle2('2'); }}
                                                >
                                                    Semester 2
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab2 === '3' })}
                                                    onClick={() => { this.tabToggle2('3'); }}
                                                >
                                                    Semester 3
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab2 === '4' })}
                                                    onClick={() => { this.tabToggle2('4'); }}
                                                >
                                                    Semester 4
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab2 === '5' })}
                                                    onClick={() => { this.tabToggle2('5'); }}
                                                >
                                                    Semester 5
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab2 === '6' })}
                                                    onClick={() => { this.tabToggle2('6'); }}
                                                >
                                                    Semester 6
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab2 === '7' })}
                                                    onClick={() => { this.tabToggle2('7'); }}
                                                >
                                                    Semester 7
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab2 === '8' })}
                                                    onClick={() => { this.tabToggle2('8'); }}
                                                >
                                                    Semester 8
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab2 === '9' })}
                                                    onClick={() => { this.tabToggle2('9'); }}
                                                >
                                                    Semester 9
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab2 === '10' })}
                                                    onClick={() => { this.tabToggle2('10'); }}
                                                >
                                                    Semester 10
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab2 === '11' })}
                                                    onClick={() => { this.tabToggle2('11'); }}
                                                >
                                                    Electives
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                        <TabContent activeTab={this.state.activeTab2}>
                                            <TabPane tabId="1">
                                                <ListGroup>
                                                    <TransitionGroup className="course-list">
                                                        {courses.map(({ _id, name, description, semester, major }) => (
                                                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                                                <Container>
                                                                    {major === "Digital Media Engineering and Technology" && semester === 1 ? (
                                                                        <ListGroupItem>
                                                                            <Card>
                                                                                <CardHeader>  {name}</CardHeader>
                                                                                <CardBody>
                                                                                    <CardText>{description}</CardText>
                                                                                </CardBody>
                                                                                <CardFooter>  <Button
                                                                                    className="remove-btn"
                                                                                    color="danger"
                                                                                    onClick={this.onDeleteClick.bind(this, _id)}
                                                                                >
                                                                                    Delete Course
                                                                                </Button>
                                                                                    <Button color="primary" onClick={this.EditCourse}>
                                                                                        Edit Course
                                                                                    </Button>
                                                                                </CardFooter>
                                                                            </Card>
                                                                        </ListGroupItem>
                                                                    ) : null}
                                                                </Container>
                                                            </CSSTransition>
                                                        ))}
                                                    </TransitionGroup>
                                                </ListGroup>
                                            </TabPane>
                                        </TabContent>
                                        <TabContent activeTab={this.state.activeTab2}>
                                            <TabPane tabId="2">
                                                <ListGroup>
                                                    <TransitionGroup className="course-list">
                                                        {courses.map(({ _id, name, description, semester, major }) => (
                                                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                                                <Container>
                                                                    {major === "Digital Media Engineering and Technology" && semester === 2 ? (
                                                                        <ListGroupItem>
                                                                            <Card>
                                                                                <CardHeader>{name}</CardHeader>
                                                                                <CardBody>
                                                                                    {(!this.state.isEdit) ? <CardText>{description}</CardText> :
                                                                                        (this.state.editid == _id) ?
                                                                                            <FormGroup>
                                                                                                <Label for="description">Description</Label>
                                                                                                <Input type="textarea" name="text" id="description" defaultValue={description} onChange={this.onChange} />
                                                                                            </FormGroup>
                                                                                            : <CardText>{description}</CardText>
                                                                                    }
                                                                                </CardBody>
                                                                                <CardFooter>
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button
                                                                                            className="remove-btn"
                                                                                            color="danger"
                                                                                            onClick={this.onDeleteClick.bind(this, _id)}
                                                                                        >
                                                                                            Delete Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            null : <Button
                                                                                                className="remove-btn"
                                                                                                color="danger"
                                                                                                onClick={this.onDeleteClick.bind(this, _id)}
                                                                                            >
                                                                                                Delete Course
                                                                                            </Button>
                                                                                    }
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                            Edit Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            <Button color="primary" onClick={this.DoneEditCourse.bind(this, _id)}>
                                                                                                Done
                                                                                            </Button> : <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                                Edit Course
                                                                                            </Button>
                                                                                    }
                                                                                </CardFooter>
                                                                            </Card>
                                                                        </ListGroupItem>
                                                                    ) : null}
                                                                </Container>
                                                            </CSSTransition>
                                                        ))}
                                                    </TransitionGroup>
                                                </ListGroup>
                                            </TabPane>
                                        </TabContent>
                                        <TabContent activeTab={this.state.activeTab2}>
                                            <TabPane tabId="3">
                                                <ListGroup>
                                                    <TransitionGroup className="course-list">
                                                        {courses.map(({ _id, name, description, semester, major }) => (
                                                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                                                <Container>
                                                                    {major === "Digital Media Engineering and Technology" && semester === 3 ? (
                                                                        <ListGroupItem>
                                                                            <Card>
                                                                                <CardHeader>{name}</CardHeader>
                                                                                <CardBody>
                                                                                    {(!this.state.isEdit) ? <CardText>{description}</CardText> :
                                                                                        (this.state.editid == _id) ?
                                                                                            <FormGroup>
                                                                                                <Label for="description">Description</Label>
                                                                                                <Input type="textarea" name="text" id="description" defaultValue={description} onChange={this.onChange} />
                                                                                            </FormGroup>
                                                                                            : <CardText>{description}</CardText>
                                                                                    }
                                                                                </CardBody>
                                                                                <CardFooter>
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button
                                                                                            className="remove-btn"
                                                                                            color="danger"
                                                                                            onClick={this.onDeleteClick.bind(this, _id)}
                                                                                        >
                                                                                            Delete Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            null : <Button
                                                                                                className="remove-btn"
                                                                                                color="danger"
                                                                                                onClick={this.onDeleteClick.bind(this, _id)}
                                                                                            >
                                                                                                Delete Course
                                                                                            </Button>
                                                                                    }
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                            Edit Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            <Button color="primary" onClick={this.DoneEditCourse.bind(this, _id)}>
                                                                                                Done
                                                                                            </Button> : <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                                Edit Course
                                                                                            </Button>
                                                                                    }
                                                                                </CardFooter>
                                                                            </Card>
                                                                        </ListGroupItem>
                                                                    ) : null}
                                                                </Container>
                                                            </CSSTransition>
                                                        ))}
                                                    </TransitionGroup>
                                                </ListGroup>
                                            </TabPane>
                                        </TabContent>
                                        <TabContent activeTab={this.state.activeTab2}>
                                            <TabPane tabId="4">
                                                <ListGroup>
                                                    <TransitionGroup className="course-list">
                                                        {courses.map(({ _id, name, description, semester, major }) => (
                                                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                                                <Container>
                                                                    {major === "Digital Media Engineering and Technology" && semester === 4 ? (
                                                                        <ListGroupItem>
                                                                            <Card>
                                                                                <CardHeader>{name}</CardHeader>
                                                                                <CardBody>
                                                                                    {(!this.state.isEdit) ? <CardText>{description}</CardText> :
                                                                                        (this.state.editid == _id) ?
                                                                                            <FormGroup>
                                                                                                <Label for="description">Description</Label>
                                                                                                <Input type="textarea" name="text" id="description" defaultValue={description} onChange={this.onChange} />
                                                                                            </FormGroup>
                                                                                            : <CardText>{description}</CardText>
                                                                                    }
                                                                                </CardBody>
                                                                                <CardFooter>
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button
                                                                                            className="remove-btn"
                                                                                            color="danger"
                                                                                            onClick={this.onDeleteClick.bind(this, _id)}
                                                                                        >
                                                                                            Delete Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            null : <Button
                                                                                                className="remove-btn"
                                                                                                color="danger"
                                                                                                onClick={this.onDeleteClick.bind(this, _id)}
                                                                                            >
                                                                                                Delete Course
                                                                                            </Button>
                                                                                    }
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                            Edit Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            <Button color="primary" onClick={this.DoneEditCourse.bind(this, _id)}>
                                                                                                Done
                                                                                            </Button> : <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                                Edit Course
                                                                                            </Button>
                                                                                    }
                                                                                </CardFooter>
                                                                            </Card>
                                                                        </ListGroupItem>
                                                                    ) : null}
                                                                </Container>
                                                            </CSSTransition>
                                                        ))}
                                                    </TransitionGroup>
                                                </ListGroup>
                                            </TabPane>
                                        </TabContent>
                                        <TabContent activeTab={this.state.activeTab2}>
                                            <TabPane tabId="5">
                                                <ListGroup>
                                                    <TransitionGroup className="course-list">
                                                        {courses.map(({ _id, name, description, semester, major }) => (
                                                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                                                <Container>
                                                                    {major === "Digital Media Engineering and Technology" && semester === 5 ? (
                                                                        <ListGroupItem>
                                                                            <Card>
                                                                                <CardHeader>{name}</CardHeader>
                                                                                <CardBody>
                                                                                    {(!this.state.isEdit) ? <CardText>{description}</CardText> :
                                                                                        (this.state.editid == _id) ?
                                                                                            <FormGroup>
                                                                                                <Label for="description">Description</Label>
                                                                                                <Input type="textarea" name="text" id="description" defaultValue={description} onChange={this.onChange} />
                                                                                            </FormGroup>
                                                                                            : <CardText>{description}</CardText>
                                                                                    }
                                                                                </CardBody>
                                                                                <CardFooter>
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button
                                                                                            className="remove-btn"
                                                                                            color="danger"
                                                                                            onClick={this.onDeleteClick.bind(this, _id)}
                                                                                        >
                                                                                            Delete Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            null : <Button
                                                                                                className="remove-btn"
                                                                                                color="danger"
                                                                                                onClick={this.onDeleteClick.bind(this, _id)}
                                                                                            >
                                                                                                Delete Course
                                                                                            </Button>
                                                                                    }
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                            Edit Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            <Button color="primary" onClick={this.DoneEditCourse.bind(this, _id)}>
                                                                                                Done
                                                                                            </Button> : <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                                Edit Course
                                                                                            </Button>
                                                                                    }
                                                                                </CardFooter>
                                                                            </Card>
                                                                        </ListGroupItem>
                                                                    ) : null}
                                                                </Container>
                                                            </CSSTransition>
                                                        ))}
                                                    </TransitionGroup>
                                                </ListGroup>
                                            </TabPane>
                                        </TabContent>
                                        <TabContent activeTab={this.state.activeTab2}>
                                            <TabPane tabId="6">
                                                <ListGroup>
                                                    <TransitionGroup className="course-list">
                                                        {courses.map(({ _id, name, description, semester, major }) => (
                                                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                                                <Container>
                                                                    {major === "Digital Media Engineering and Technology" && semester === 6 ? (
                                                                        <ListGroupItem>
                                                                            <Card>
                                                                                <CardHeader>{name}</CardHeader>
                                                                                <CardBody>
                                                                                    {(!this.state.isEdit) ? <CardText>{description}</CardText> :
                                                                                        (this.state.editid == _id) ?
                                                                                            <FormGroup>
                                                                                                <Label for="description">Description</Label>
                                                                                                <Input type="textarea" name="text" id="description" defaultValue={description} onChange={this.onChange} />
                                                                                            </FormGroup>
                                                                                            : <CardText>{description}</CardText>
                                                                                    }
                                                                                </CardBody>
                                                                                <CardFooter>
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button
                                                                                            className="remove-btn"
                                                                                            color="danger"
                                                                                            onClick={this.onDeleteClick.bind(this, _id)}
                                                                                        >
                                                                                            Delete Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            null : <Button
                                                                                                className="remove-btn"
                                                                                                color="danger"
                                                                                                onClick={this.onDeleteClick.bind(this, _id)}
                                                                                            >
                                                                                                Delete Course
                                                                                            </Button>
                                                                                    }
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                            Edit Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            <Button color="primary" onClick={this.DoneEditCourse.bind(this, _id)}>
                                                                                                Done
                                                                                            </Button> : <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                                Edit Course
                                                                                            </Button>
                                                                                    }
                                                                                </CardFooter>
                                                                            </Card>
                                                                        </ListGroupItem>
                                                                    ) : null}
                                                                </Container>
                                                            </CSSTransition>
                                                        ))}
                                                    </TransitionGroup>
                                                </ListGroup>
                                            </TabPane>
                                        </TabContent>
                                        <TabContent activeTab={this.state.activeTab2}>
                                            <TabPane tabId="7">
                                                <ListGroup>
                                                    <TransitionGroup className="course-list">
                                                        {courses.map(({ _id, name, description, semester, major }) => (
                                                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                                                <Container>
                                                                    {major === "Digital Media Engineering and Technology" && semester === 7 ? (
                                                                        <ListGroupItem>
                                                                            <Card>
                                                                                <CardHeader>{name}</CardHeader>
                                                                                <CardBody>
                                                                                    {(!this.state.isEdit) ? <CardText>{description}</CardText> :
                                                                                        (this.state.editid == _id) ?
                                                                                            <FormGroup>
                                                                                                <Label for="description">Description</Label>
                                                                                                <Input type="textarea" name="text" id="description" defaultValue={description} onChange={this.onChange} />
                                                                                            </FormGroup>
                                                                                            : <CardText>{description}</CardText>
                                                                                    }
                                                                                </CardBody>
                                                                                <CardFooter>
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button
                                                                                            className="remove-btn"
                                                                                            color="danger"
                                                                                            onClick={this.onDeleteClick.bind(this, _id)}
                                                                                        >
                                                                                            Delete Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            null : <Button
                                                                                                className="remove-btn"
                                                                                                color="danger"
                                                                                                onClick={this.onDeleteClick.bind(this, _id)}
                                                                                            >
                                                                                                Delete Course
                                                                                            </Button>
                                                                                    }
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                            Edit Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            <Button color="primary" onClick={this.DoneEditCourse.bind(this, _id)}>
                                                                                                Done
                                                                                            </Button> : <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                                Edit Course
                                                                                            </Button>
                                                                                    }
                                                                                </CardFooter>
                                                                            </Card>
                                                                        </ListGroupItem>
                                                                    ) : null}
                                                                </Container>
                                                            </CSSTransition>
                                                        ))}
                                                    </TransitionGroup>
                                                </ListGroup>
                                            </TabPane>
                                        </TabContent>
                                        <TabContent activeTab={this.state.activeTab2}>
                                            <TabPane tabId="8">
                                                <ListGroup>
                                                    <TransitionGroup className="course-list">
                                                        {courses.map(({ _id, name, description, semester, major }) => (
                                                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                                                <Container>
                                                                    {major === "Digital Media Engineering and Technology" && semester === 8 ? (
                                                                        <ListGroupItem>
                                                                            <Card>
                                                                                <CardHeader>{name}</CardHeader>
                                                                                <CardBody>
                                                                                    {(!this.state.isEdit) ? <CardText>{description}</CardText> :
                                                                                        (this.state.editid == _id) ?
                                                                                            <FormGroup>
                                                                                                <Label for="description">Description</Label>
                                                                                                <Input type="textarea" name="text" id="description" defaultValue={description} onChange={this.onChange} />
                                                                                            </FormGroup>
                                                                                            : <CardText>{description}</CardText>
                                                                                    }
                                                                                </CardBody>
                                                                                <CardFooter>
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button
                                                                                            className="remove-btn"
                                                                                            color="danger"
                                                                                            onClick={this.onDeleteClick.bind(this, _id)}
                                                                                        >
                                                                                            Delete Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            null : <Button
                                                                                                className="remove-btn"
                                                                                                color="danger"
                                                                                                onClick={this.onDeleteClick.bind(this, _id)}
                                                                                            >
                                                                                                Delete Course
                                                                                            </Button>
                                                                                    }
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                            Edit Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            <Button color="primary" onClick={this.DoneEditCourse.bind(this, _id)}>
                                                                                                Done
                                                                                            </Button> : <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                                Edit Course
                                                                                            </Button>
                                                                                    }
                                                                                </CardFooter>
                                                                            </Card>
                                                                        </ListGroupItem>
                                                                    ) : null}
                                                                </Container>
                                                            </CSSTransition>
                                                        ))}
                                                    </TransitionGroup>
                                                </ListGroup>
                                            </TabPane>
                                        </TabContent>
                                        <TabContent activeTab={this.state.activeTab2}>
                                            <TabPane tabId="9">
                                                <ListGroup>
                                                    <TransitionGroup className="course-list">
                                                        {courses.map(({ _id, name, description, semester, major }) => (
                                                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                                                <Container>
                                                                    {major === "Digital Media Engineering and Technology" && semester === 9 ? (
                                                                        <ListGroupItem>
                                                                            <Card>
                                                                                <CardHeader>{name}</CardHeader>
                                                                                <CardBody>
                                                                                    {(!this.state.isEdit) ? <CardText>{description}</CardText> :
                                                                                        (this.state.editid == _id) ?
                                                                                            <FormGroup>
                                                                                                <Label for="description">Description</Label>
                                                                                                <Input type="textarea" name="text" id="description" defaultValue={description} onChange={this.onChange} />
                                                                                            </FormGroup>
                                                                                            : <CardText>{description}</CardText>
                                                                                    }
                                                                                </CardBody>
                                                                                <CardFooter>
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button
                                                                                            className="remove-btn"
                                                                                            color="danger"
                                                                                            onClick={this.onDeleteClick.bind(this, _id)}
                                                                                        >
                                                                                            Delete Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            null : <Button
                                                                                                className="remove-btn"
                                                                                                color="danger"
                                                                                                onClick={this.onDeleteClick.bind(this, _id)}
                                                                                            >
                                                                                                Delete Course
                                                                                            </Button>
                                                                                    }
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                            Edit Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            <Button color="primary" onClick={this.DoneEditCourse.bind(this, _id)}>
                                                                                                Done
                                                                                            </Button> : <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                                Edit Course
                                                                                            </Button>
                                                                                    }
                                                                                </CardFooter>
                                                                            </Card>
                                                                        </ListGroupItem>
                                                                    ) : null}
                                                                </Container>
                                                            </CSSTransition>
                                                        ))}
                                                    </TransitionGroup>
                                                </ListGroup>
                                            </TabPane>
                                        </TabContent>
                                        <TabContent activeTab={this.state.activeTab2}>
                                            <TabPane tabId="10">
                                                <ListGroup>
                                                    <TransitionGroup className="course-list">
                                                        {courses.map(({ _id, name, description, semester, major }) => (
                                                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                                                <Container>
                                                                    {major === "Digital Media Engineering and Technology" && semester === 10 ? (
                                                                        <ListGroupItem>
                                                                            <Card>
                                                                                <CardHeader>{name}</CardHeader>
                                                                                <CardBody>
                                                                                    {(!this.state.isEdit) ? <CardText>{description}</CardText> :
                                                                                        (this.state.editid == _id) ?
                                                                                            <FormGroup>
                                                                                                <Label for="description">Description</Label>
                                                                                                <Input type="textarea" name="text" id="description" defaultValue={description} onChange={this.onChange} />
                                                                                            </FormGroup>
                                                                                            : <CardText>{description}</CardText>
                                                                                    }
                                                                                </CardBody>
                                                                                <CardFooter>
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button
                                                                                            className="remove-btn"
                                                                                            color="danger"
                                                                                            onClick={this.onDeleteClick.bind(this, _id)}
                                                                                        >
                                                                                            Delete Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            null : <Button
                                                                                                className="remove-btn"
                                                                                                color="danger"
                                                                                                onClick={this.onDeleteClick.bind(this, _id)}
                                                                                            >
                                                                                                Delete Course
                                                                                            </Button>
                                                                                    }
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                            Edit Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            <Button color="primary" onClick={this.DoneEditCourse.bind(this, _id)}>
                                                                                                Done
                                                                                            </Button> : <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                                Edit Course
                                                                                            </Button>
                                                                                    }
                                                                                </CardFooter>
                                                                            </Card>
                                                                        </ListGroupItem>
                                                                    ) : null}
                                                                </Container>
                                                            </CSSTransition>
                                                        ))}
                                                    </TransitionGroup>
                                                </ListGroup>
                                            </TabPane>
                                        </TabContent>
                                        <TabContent activeTab={this.state.activeTab2}>
                                            <TabPane tabId="11">
                                                <ListGroup>
                                                    <TransitionGroup className="course-list">
                                                        {courses.map(({ _id, name, description, semester, major }) => (
                                                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                                                <Container>
                                                                    {major === "Digital Media Engineering and Technology" && semester === 11 ? (
                                                                        <ListGroupItem>
                                                                            <Card>
                                                                                <CardHeader>{name}</CardHeader>
                                                                                <CardBody>
                                                                                    {(!this.state.isEdit) ? <CardText>{description}</CardText> :
                                                                                        (this.state.editid == _id) ?
                                                                                            <FormGroup>
                                                                                                <Label for="description">Description</Label>
                                                                                                <Input type="textarea" name="text" id="description" defaultValue={description} onChange={this.onChange} />
                                                                                            </FormGroup>
                                                                                            : <CardText>{description}</CardText>
                                                                                    }
                                                                                </CardBody>
                                                                                <CardFooter>
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button
                                                                                            className="remove-btn"
                                                                                            color="danger"
                                                                                            onClick={this.onDeleteClick.bind(this, _id)}
                                                                                        >
                                                                                            Delete Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            null : <Button
                                                                                                className="remove-btn"
                                                                                                color="danger"
                                                                                                onClick={this.onDeleteClick.bind(this, _id)}
                                                                                            >
                                                                                                Delete Course
                                                                                            </Button>
                                                                                    }
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                            Edit Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            <Button color="primary" onClick={this.DoneEditCourse.bind(this, _id)}>
                                                                                                Done
                                                                                            </Button> : <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                                Edit Course
                                                                                            </Button>
                                                                                    }
                                                                                </CardFooter>
                                                                            </Card>
                                                                        </ListGroupItem>
                                                                    ) : null}
                                                                </Container>
                                                            </CSSTransition>
                                                        ))}
                                                    </TransitionGroup>
                                                </ListGroup>
                                            </TabPane>
                                        </TabContent>
                                    </Collapse></ListGroupItem>
                            </ListGroup>
                        </Collapse></ListGroupItem>
                    <ListGroupItem><Button color="primary" onClick={this.toggle4} >Faculty of Pharmacy and Biotechnology (PBT)</Button>
                        <Collapse isOpen={this.state.isOpen4}>
                            <ListGroup>
                                <ListGroupItem><Button color="primary" onClick={this.toggle5} >Pharmacy & Biotechnology</Button>
                                    <Collapse isOpen={this.state.isOpen5}>
                                        <Nav tabs>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab3 === '1' })}
                                                    onClick={() => { this.tabToggle3('1'); }}
                                                >
                                                    Semester 1
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab3 === '2' })}
                                                    onClick={() => { this.tabToggle3('2'); }}
                                                >
                                                    Semester 2
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab3 === '3' })}
                                                    onClick={() => { this.tabToggle3('3'); }}
                                                >
                                                    Semester 3
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab3 === '4' })}
                                                    onClick={() => { this.tabToggle3('4'); }}
                                                >
                                                    Semester 4
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab3 === '5' })}
                                                    onClick={() => { this.tabToggle3('5'); }}
                                                >
                                                    Semester 5
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab3 === '6' })}
                                                    onClick={() => { this.tabToggle3('6'); }}
                                                >
                                                    Semester 6
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab3 === '7' })}
                                                    onClick={() => { this.tabToggle3('7'); }}
                                                >
                                                    Semester 7
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab3 === '8' })}
                                                    onClick={() => { this.tabToggle3('8'); }}
                                                >
                                                    Semester 8
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab3 === '9' })}
                                                    onClick={() => { this.tabToggle3('9'); }}
                                                >
                                                    Semester 9
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab3 === '10' })}
                                                    onClick={() => { this.tabToggle3('10'); }}
                                                >
                                                    Semester 10
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                        <TabContent activeTab={this.state.activeTab3}>
                                            <TabPane tabId="1">
                                                <ListGroup>
                                                    <TransitionGroup className="course-list">
                                                        {courses.map(({ _id, name, description, semester, major }) => (
                                                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                                                <Container>
                                                                    {major === "Pharmacy & Biotechnology" && semester === 1 ? (
                                                                        <ListGroupItem>
                                                                            <Card>
                                                                                <CardHeader>{name}</CardHeader>
                                                                                <CardBody>
                                                                                    {(!this.state.isEdit) ? <CardText>{description}</CardText> :
                                                                                        (this.state.editid == _id) ?
                                                                                            <FormGroup>
                                                                                                <Label for="description">Description</Label>
                                                                                                <Input type="textarea" name="text" id="description" defaultValue={description} onChange={this.onChange} />
                                                                                            </FormGroup>
                                                                                            : <CardText>{description}</CardText>
                                                                                    }
                                                                                </CardBody>
                                                                                <CardFooter>
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button
                                                                                            className="remove-btn"
                                                                                            color="danger"
                                                                                            onClick={this.onDeleteClick.bind(this, _id)}
                                                                                        >
                                                                                            Delete Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            null : <Button
                                                                                                className="remove-btn"
                                                                                                color="danger"
                                                                                                onClick={this.onDeleteClick.bind(this, _id)}
                                                                                            >
                                                                                                Delete Course
                                                                                            </Button>
                                                                                    }
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                            Edit Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            <Button color="primary" onClick={this.DoneEditCourse.bind(this, _id)}>
                                                                                                Done
                                                                                            </Button> : <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                                Edit Course
                                                                                            </Button>
                                                                                    }
                                                                                </CardFooter>
                                                                            </Card>
                                                                        </ListGroupItem>
                                                                    ) : null}
                                                                </Container>
                                                            </CSSTransition>
                                                        ))}
                                                    </TransitionGroup>
                                                </ListGroup>
                                            </TabPane>
                                        </TabContent>
                                        <TabContent activeTab={this.state.activeTab3}>
                                            <TabPane tabId="2">
                                                <ListGroup>
                                                    <TransitionGroup className="course-list">
                                                        {courses.map(({ _id, name, description, semester, major }) => (
                                                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                                                <Container>
                                                                    {major === "Pharmacy & Biotechnology" && semester === 2 ? (
                                                                        <ListGroupItem>
                                                                            <Card>
                                                                                <CardHeader>{name}</CardHeader>
                                                                                <CardBody>
                                                                                    {(!this.state.isEdit) ? <CardText>{description}</CardText> :
                                                                                        (this.state.editid == _id) ?
                                                                                            <FormGroup>
                                                                                                <Label for="description">Description</Label>
                                                                                                <Input type="textarea" name="text" id="description" defaultValue={description} onChange={this.onChange} />
                                                                                            </FormGroup>
                                                                                            : <CardText>{description}</CardText>
                                                                                    }
                                                                                </CardBody>
                                                                                <CardFooter>
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button
                                                                                            className="remove-btn"
                                                                                            color="danger"
                                                                                            onClick={this.onDeleteClick.bind(this, _id)}
                                                                                        >
                                                                                            Delete Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            null : <Button
                                                                                                className="remove-btn"
                                                                                                color="danger"
                                                                                                onClick={this.onDeleteClick.bind(this, _id)}
                                                                                            >
                                                                                                Delete Course
                                                                                            </Button>
                                                                                    }
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                            Edit Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            <Button color="primary" onClick={this.DoneEditCourse.bind(this, _id)}>
                                                                                                Done
                                                                                            </Button> : <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                                Edit Course
                                                                                            </Button>
                                                                                    }
                                                                                </CardFooter>
                                                                            </Card>
                                                                        </ListGroupItem>
                                                                    ) : null}
                                                                </Container>
                                                            </CSSTransition>
                                                        ))}
                                                    </TransitionGroup>
                                                </ListGroup>
                                            </TabPane>
                                        </TabContent>
                                        <TabContent activeTab={this.state.activeTab3}>
                                            <TabPane tabId="3">
                                                <ListGroup>
                                                    <TransitionGroup className="course-list">
                                                        {courses.map(({ _id, name, description, semester, major }) => (
                                                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                                                <Container>
                                                                    {major === "Pharmacy & Biotechnology" && semester === 3 ? (
                                                                        <ListGroupItem>
                                                                            <Card>
                                                                                <CardHeader>{name}</CardHeader>
                                                                                <CardBody>
                                                                                    {(!this.state.isEdit) ? <CardText>{description}</CardText> :
                                                                                        (this.state.editid == _id) ?
                                                                                            <FormGroup>
                                                                                                <Label for="description">Description</Label>
                                                                                                <Input type="textarea" name="text" id="description" defaultValue={description} onChange={this.onChange} />
                                                                                            </FormGroup>
                                                                                            : <CardText>{description}</CardText>
                                                                                    }
                                                                                </CardBody>
                                                                                <CardFooter>
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button
                                                                                            className="remove-btn"
                                                                                            color="danger"
                                                                                            onClick={this.onDeleteClick.bind(this, _id)}
                                                                                        >
                                                                                            Delete Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            null : <Button
                                                                                                className="remove-btn"
                                                                                                color="danger"
                                                                                                onClick={this.onDeleteClick.bind(this, _id)}
                                                                                            >
                                                                                                Delete Course
                                                                                            </Button>
                                                                                    }
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                            Edit Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            <Button color="primary" onClick={this.DoneEditCourse.bind(this, _id)}>
                                                                                                Done
                                                                                            </Button> : <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                                Edit Course
                                                                                            </Button>
                                                                                    }
                                                                                </CardFooter>
                                                                            </Card>
                                                                        </ListGroupItem>
                                                                    ) : null}
                                                                </Container>
                                                            </CSSTransition>
                                                        ))}
                                                    </TransitionGroup>
                                                </ListGroup>
                                            </TabPane>
                                        </TabContent>
                                        <TabContent activeTab={this.state.activeTab3}>
                                            <TabPane tabId="4">
                                                <ListGroup>
                                                    <TransitionGroup className="course-list">
                                                        {courses.map(({ _id, name, description, semester, major }) => (
                                                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                                                <Container>
                                                                    {major === "Pharmacy & Biotechnology" && semester === 4 ? (
                                                                        <ListGroupItem>
                                                                            <Card>
                                                                                <CardHeader>{name}</CardHeader>
                                                                                <CardBody>
                                                                                    {(!this.state.isEdit) ? <CardText>{description}</CardText> :
                                                                                        (this.state.editid == _id) ?
                                                                                            <FormGroup>
                                                                                                <Label for="description">Description</Label>
                                                                                                <Input type="textarea" name="text" id="description" defaultValue={description} onChange={this.onChange} />
                                                                                            </FormGroup>
                                                                                            : <CardText>{description}</CardText>
                                                                                    }
                                                                                </CardBody>
                                                                                <CardFooter>
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button
                                                                                            className="remove-btn"
                                                                                            color="danger"
                                                                                            onClick={this.onDeleteClick.bind(this, _id)}
                                                                                        >
                                                                                            Delete Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            null : <Button
                                                                                                className="remove-btn"
                                                                                                color="danger"
                                                                                                onClick={this.onDeleteClick.bind(this, _id)}
                                                                                            >
                                                                                                Delete Course
                                                                                            </Button>
                                                                                    }
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                            Edit Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            <Button color="primary" onClick={this.DoneEditCourse.bind(this, _id)}>
                                                                                                Done
                                                                                            </Button> : <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                                Edit Course
                                                                                            </Button>
                                                                                    }
                                                                                </CardFooter>
                                                                            </Card>
                                                                        </ListGroupItem>
                                                                    ) : null}
                                                                </Container>
                                                            </CSSTransition>
                                                        ))}
                                                    </TransitionGroup>
                                                </ListGroup>
                                            </TabPane>
                                        </TabContent>
                                        <TabContent activeTab={this.state.activeTab3}>
                                            <TabPane tabId="5">
                                                <ListGroup>
                                                    <TransitionGroup className="course-list">
                                                        {courses.map(({ _id, name, description, semester, major }) => (
                                                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                                                <Container>
                                                                    {major === "Pharmacy & Biotechnology" && semester === 5 ? (
                                                                        <ListGroupItem>
                                                                            <Card>
                                                                                <CardHeader>{name}</CardHeader>
                                                                                <CardBody>
                                                                                    {(!this.state.isEdit) ? <CardText>{description}</CardText> :
                                                                                        (this.state.editid == _id) ?
                                                                                            <FormGroup>
                                                                                                <Label for="description">Description</Label>
                                                                                                <Input type="textarea" name="text" id="description" defaultValue={description} onChange={this.onChange} />
                                                                                            </FormGroup>
                                                                                            : <CardText>{description}</CardText>
                                                                                    }
                                                                                </CardBody>
                                                                                <CardFooter>
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button
                                                                                            className="remove-btn"
                                                                                            color="danger"
                                                                                            onClick={this.onDeleteClick.bind(this, _id)}
                                                                                        >
                                                                                            Delete Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            null : <Button
                                                                                                className="remove-btn"
                                                                                                color="danger"
                                                                                                onClick={this.onDeleteClick.bind(this, _id)}
                                                                                            >
                                                                                                Delete Course
                                                                                            </Button>
                                                                                    }
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                            Edit Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            <Button color="primary" onClick={this.DoneEditCourse.bind(this, _id)}>
                                                                                                Done
                                                                                            </Button> : <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                                Edit Course
                                                                                            </Button>
                                                                                    }
                                                                                </CardFooter>
                                                                            </Card>
                                                                        </ListGroupItem>
                                                                    ) : null}
                                                                </Container>
                                                            </CSSTransition>
                                                        ))}
                                                    </TransitionGroup>
                                                </ListGroup>
                                            </TabPane>
                                        </TabContent>
                                        <TabContent activeTab={this.state.activeTab3}>
                                            <TabPane tabId="6">
                                                <ListGroup>
                                                    <TransitionGroup className="course-list">
                                                        {courses.map(({ _id, name, description, semester, major }) => (
                                                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                                                <Container>
                                                                    {major === "Pharmacy & Biotechnology" && semester === 6 ? (
                                                                        <ListGroupItem>
                                                                            <Card>
                                                                                <CardHeader>{name}</CardHeader>
                                                                                <CardBody>
                                                                                    {(!this.state.isEdit) ? <CardText>{description}</CardText> :
                                                                                        (this.state.editid == _id) ?
                                                                                            <FormGroup>
                                                                                                <Label for="description">Description</Label>
                                                                                                <Input type="textarea" name="text" id="description" defaultValue={description} onChange={this.onChange} />
                                                                                            </FormGroup>
                                                                                            : <CardText>{description}</CardText>
                                                                                    }
                                                                                </CardBody>
                                                                                <CardFooter>
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button
                                                                                            className="remove-btn"
                                                                                            color="danger"
                                                                                            onClick={this.onDeleteClick.bind(this, _id)}
                                                                                        >
                                                                                            Delete Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            null : <Button
                                                                                                className="remove-btn"
                                                                                                color="danger"
                                                                                                onClick={this.onDeleteClick.bind(this, _id)}
                                                                                            >
                                                                                                Delete Course
                                                                                            </Button>
                                                                                    }
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                            Edit Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            <Button color="primary" onClick={this.DoneEditCourse.bind(this, _id)}>
                                                                                                Done
                                                                                            </Button> : <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                                Edit Course
                                                                                            </Button>
                                                                                    }
                                                                                </CardFooter>
                                                                            </Card>
                                                                        </ListGroupItem>
                                                                    ) : null}
                                                                </Container>
                                                            </CSSTransition>
                                                        ))}
                                                    </TransitionGroup>
                                                </ListGroup>
                                            </TabPane>
                                        </TabContent>
                                        <TabContent activeTab={this.state.activeTab3}>
                                            <TabPane tabId="7">
                                                <ListGroup>
                                                    <TransitionGroup className="course-list">
                                                        {courses.map(({ _id, name, description, semester, major }) => (
                                                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                                                <Container>
                                                                    {major === "Pharmacy & Biotechnology" && semester === 7 ? (
                                                                        <ListGroupItem>
                                                                            <Card>
                                                                                <CardHeader>{name}</CardHeader>
                                                                                <CardBody>
                                                                                    {(!this.state.isEdit) ? <CardText>{description}</CardText> :
                                                                                        (this.state.editid == _id) ?
                                                                                            <FormGroup>
                                                                                                <Label for="description">Description</Label>
                                                                                                <Input type="textarea" name="text" id="description" defaultValue={description} onChange={this.onChange} />
                                                                                            </FormGroup>
                                                                                            : <CardText>{description}</CardText>
                                                                                    }
                                                                                </CardBody>
                                                                                <CardFooter>
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button
                                                                                            className="remove-btn"
                                                                                            color="danger"
                                                                                            onClick={this.onDeleteClick.bind(this, _id)}
                                                                                        >
                                                                                            Delete Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            null : <Button
                                                                                                className="remove-btn"
                                                                                                color="danger"
                                                                                                onClick={this.onDeleteClick.bind(this, _id)}
                                                                                            >
                                                                                                Delete Course
                                                                                            </Button>
                                                                                    }
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                            Edit Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            <Button color="primary" onClick={this.DoneEditCourse.bind(this, _id)}>
                                                                                                Done
                                                                                            </Button> : <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                                Edit Course
                                                                                            </Button>
                                                                                    }
                                                                                </CardFooter>
                                                                            </Card>
                                                                        </ListGroupItem>
                                                                    ) : null}
                                                                </Container>
                                                            </CSSTransition>
                                                        ))}
                                                    </TransitionGroup>
                                                </ListGroup>
                                            </TabPane>
                                        </TabContent>
                                        <TabContent activeTab={this.state.activeTab3}>
                                            <TabPane tabId="8">
                                                <ListGroup>
                                                    <TransitionGroup className="course-list">
                                                        {courses.map(({ _id, name, description, semester, major }) => (
                                                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                                                <Container>
                                                                    {major === "Pharmacy & Biotechnology" && semester === 8 ? (
                                                                        <ListGroupItem>
                                                                            <Card>
                                                                                <CardHeader>{name}</CardHeader>
                                                                                <CardBody>
                                                                                    {(!this.state.isEdit) ? <CardText>{description}</CardText> :
                                                                                        (this.state.editid == _id) ?
                                                                                            <FormGroup>
                                                                                                <Label for="description">Description</Label>
                                                                                                <Input type="textarea" name="text" id="description" defaultValue={description} onChange={this.onChange} />
                                                                                            </FormGroup>
                                                                                            : <CardText>{description}</CardText>
                                                                                    }
                                                                                </CardBody>
                                                                                <CardFooter>
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button
                                                                                            className="remove-btn"
                                                                                            color="danger"
                                                                                            onClick={this.onDeleteClick.bind(this, _id)}
                                                                                        >
                                                                                            Delete Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            null : <Button
                                                                                                className="remove-btn"
                                                                                                color="danger"
                                                                                                onClick={this.onDeleteClick.bind(this, _id)}
                                                                                            >
                                                                                                Delete Course
                                                                                            </Button>
                                                                                    }
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                            Edit Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            <Button color="primary" onClick={this.DoneEditCourse.bind(this, _id)}>
                                                                                                Done
                                                                                            </Button> : <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                                Edit Course
                                                                                            </Button>
                                                                                    }
                                                                                </CardFooter>
                                                                            </Card>
                                                                        </ListGroupItem>
                                                                    ) : null}
                                                                </Container>
                                                            </CSSTransition>
                                                        ))}
                                                    </TransitionGroup>
                                                </ListGroup>
                                            </TabPane>
                                        </TabContent>
                                        <TabContent activeTab={this.state.activeTab3}>
                                            <TabPane tabId="9">
                                                <ListGroup>
                                                    <TransitionGroup className="course-list">
                                                        {courses.map(({ _id, name, description, semester, major }) => (
                                                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                                                <Container>
                                                                    {major === "Pharmacy & Biotechnology" && semester === 9 ? (
                                                                        <ListGroupItem>
                                                                            <Card>
                                                                                <CardHeader>{name}</CardHeader>
                                                                                <CardBody>
                                                                                    {(!this.state.isEdit) ? <CardText>{description}</CardText> :
                                                                                        (this.state.editid == _id) ?
                                                                                            <FormGroup>
                                                                                                <Label for="description">Description</Label>
                                                                                                <Input type="textarea" name="text" id="description" defaultValue={description} onChange={this.onChange} />
                                                                                            </FormGroup>
                                                                                            : <CardText>{description}</CardText>
                                                                                    }
                                                                                </CardBody>
                                                                                <CardFooter>
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button
                                                                                            className="remove-btn"
                                                                                            color="danger"
                                                                                            onClick={this.onDeleteClick.bind(this, _id)}
                                                                                        >
                                                                                            Delete Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            null : <Button
                                                                                                className="remove-btn"
                                                                                                color="danger"
                                                                                                onClick={this.onDeleteClick.bind(this, _id)}
                                                                                            >
                                                                                                Delete Course
                                                                                            </Button>
                                                                                    }
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                            Edit Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            <Button color="primary" onClick={this.DoneEditCourse.bind(this, _id)}>
                                                                                                Done
                                                                                            </Button> : <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                                Edit Course
                                                                                            </Button>
                                                                                    }
                                                                                </CardFooter>
                                                                            </Card>
                                                                        </ListGroupItem>
                                                                    ) : null}
                                                                </Container>
                                                            </CSSTransition>
                                                        ))}
                                                    </TransitionGroup>
                                                </ListGroup>
                                            </TabPane>
                                        </TabContent>
                                        <TabContent activeTab={this.state.activeTab3}>
                                            <TabPane tabId="10">
                                                <ListGroup>
                                                    <TransitionGroup className="course-list">
                                                        {courses.map(({ _id, name, description, semester, major }) => (
                                                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                                                <Container>
                                                                    {major === "Pharmacy & Biotechnology" && semester === 10 ? (
                                                                        <ListGroupItem>
                                                                            <Card>
                                                                                <CardHeader>{name}</CardHeader>
                                                                                <CardBody>
                                                                                    {(!this.state.isEdit) ? <CardText>{description}</CardText> :
                                                                                        (this.state.editid == _id) ?
                                                                                            <FormGroup>
                                                                                                <Label for="description">Description</Label>
                                                                                                <Input type="textarea" name="text" id="description" defaultValue={description} onChange={this.onChange} />
                                                                                            </FormGroup>
                                                                                            : <CardText>{description}</CardText>
                                                                                    }
                                                                                </CardBody>
                                                                                <CardFooter>
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button
                                                                                            className="remove-btn"
                                                                                            color="danger"
                                                                                            onClick={this.onDeleteClick.bind(this, _id)}
                                                                                        >
                                                                                            Delete Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            null : <Button
                                                                                                className="remove-btn"
                                                                                                color="danger"
                                                                                                onClick={this.onDeleteClick.bind(this, _id)}
                                                                                            >
                                                                                                Delete Course
                                                                                            </Button>
                                                                                    }
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                            Edit Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            <Button color="primary" onClick={this.DoneEditCourse.bind(this, _id)}>
                                                                                                Done
                                                                                            </Button> : <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                                Edit Course
                                                                                            </Button>
                                                                                    }
                                                                                </CardFooter>
                                                                            </Card>
                                                                        </ListGroupItem>
                                                                    ) : null}
                                                                </Container>
                                                            </CSSTransition>
                                                        ))}
                                                    </TransitionGroup>
                                                </ListGroup>
                                            </TabPane>
                                        </TabContent>
                                    </Collapse></ListGroupItem>
                                <ListGroupItem><Button color="primary" onClick={this.toggle6} >Biotechnology</Button>
                                    <Collapse isOpen={this.state.isOpen6}>
                                        <Nav tabs>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab4 === '1' })}
                                                    onClick={() => { this.tabToggle4('1'); }}
                                                >
                                                    Semester 1
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab4 === '2' })}
                                                    onClick={() => { this.tabToggle4('2'); }}
                                                >
                                                    Semester 2
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab4 === '3' })}
                                                    onClick={() => { this.tabToggle4('3'); }}
                                                >
                                                    Semester 3
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab4 === '4' })}
                                                    onClick={() => { this.tabToggle4('4'); }}
                                                >
                                                    Semester 4
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab4 === '5' })}
                                                    onClick={() => { this.tabToggle4('5'); }}
                                                >
                                                    Semester 5
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab4 === '6' })}
                                                    onClick={() => { this.tabToggle4('6'); }}
                                                >
                                                    Semester 6
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab4 === '7' })}
                                                    onClick={() => { this.tabToggle4('7'); }}
                                                >
                                                    Semester 7
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab4 === '8' })}
                                                    onClick={() => { this.tabToggle4('8'); }}
                                                >
                                                    Semester 8
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab4 === '9' })}
                                                    onClick={() => { this.tabToggle4('9'); }}
                                                >
                                                    Electives
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                        <TabContent activeTab={this.state.activeTab4}>
                                            <TabPane tabId="1">
                                                <ListGroup>
                                                    <TransitionGroup className="course-list">
                                                        {courses.map(({ _id, name, description, semester, major }) => (
                                                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                                                <Container>
                                                                    {major === "Biotechnology" && semester === 1 ? (
                                                                        <ListGroupItem>
                                                                            <Card>
                                                                                <CardHeader>{name}</CardHeader>
                                                                                <CardBody>
                                                                                    {(!this.state.isEdit) ? <CardText>{description}</CardText> :
                                                                                        (this.state.editid == _id) ?
                                                                                            <FormGroup>
                                                                                                <Label for="description">Description</Label>
                                                                                                <Input type="textarea" name="text" id="description" defaultValue={description} onChange={this.onChange} />
                                                                                            </FormGroup>
                                                                                            : <CardText>{description}</CardText>
                                                                                    }
                                                                                </CardBody>
                                                                                <CardFooter>
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button
                                                                                            className="remove-btn"
                                                                                            color="danger"
                                                                                            onClick={this.onDeleteClick.bind(this, _id)}
                                                                                        >
                                                                                            Delete Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            null : <Button
                                                                                                className="remove-btn"
                                                                                                color="danger"
                                                                                                onClick={this.onDeleteClick.bind(this, _id)}
                                                                                            >
                                                                                                Delete Course
                                                                                            </Button>
                                                                                    }
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                            Edit Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            <Button color="primary" onClick={this.DoneEditCourse.bind(this, _id)}>
                                                                                                Done
                                                                                            </Button> : <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                                Edit Course
                                                                                            </Button>
                                                                                    }
                                                                                </CardFooter>
                                                                            </Card>
                                                                        </ListGroupItem>
                                                                    ) : null}
                                                                </Container>
                                                            </CSSTransition>
                                                        ))}
                                                    </TransitionGroup>
                                                </ListGroup>
                                            </TabPane>
                                        </TabContent>
                                        <TabContent activeTab={this.state.activeTab4}>
                                            <TabPane tabId="2">
                                                <ListGroup>
                                                    <TransitionGroup className="course-list">
                                                        {courses.map(({ _id, name, description, semester, major }) => (
                                                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                                                <Container>
                                                                    {major === "Biotechnology" && semester === 2 ? (
                                                                        <ListGroupItem>
                                                                            <Card>
                                                                                <CardHeader>{name}</CardHeader>
                                                                                <CardBody>
                                                                                    {(!this.state.isEdit) ? <CardText>{description}</CardText> :
                                                                                        (this.state.editid == _id) ?
                                                                                            <FormGroup>
                                                                                                <Label for="description">Description</Label>
                                                                                                <Input type="textarea" name="text" id="description" defaultValue={description} onChange={this.onChange} />
                                                                                            </FormGroup>
                                                                                            : <CardText>{description}</CardText>
                                                                                    }
                                                                                </CardBody>
                                                                                <CardFooter>
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button
                                                                                            className="remove-btn"
                                                                                            color="danger"
                                                                                            onClick={this.onDeleteClick.bind(this, _id)}
                                                                                        >
                                                                                            Delete Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            null : <Button
                                                                                                className="remove-btn"
                                                                                                color="danger"
                                                                                                onClick={this.onDeleteClick.bind(this, _id)}
                                                                                            >
                                                                                                Delete Course
                                                                                            </Button>
                                                                                    }
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                            Edit Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            <Button color="primary" onClick={this.DoneEditCourse.bind(this, _id)}>
                                                                                                Done
                                                                                            </Button> : <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                                Edit Course
                                                                                            </Button>
                                                                                    }
                                                                                </CardFooter>
                                                                            </Card>
                                                                        </ListGroupItem>
                                                                    ) : null}
                                                                </Container>
                                                            </CSSTransition>
                                                        ))}
                                                    </TransitionGroup>
                                                </ListGroup>
                                            </TabPane>
                                        </TabContent>
                                        <TabContent activeTab={this.state.activeTab4}>
                                            <TabPane tabId="3">
                                                <ListGroup>
                                                    <TransitionGroup className="course-list">
                                                        {courses.map(({ _id, name, description, semester, major }) => (
                                                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                                                <Container>
                                                                    {major === "Biotechnology" && semester === 3 ? (
                                                                        <ListGroupItem>
                                                                            <Card>
                                                                                <CardHeader>{name}</CardHeader>
                                                                                <CardBody>
                                                                                    {(!this.state.isEdit) ? <CardText>{description}</CardText> :
                                                                                        (this.state.editid == _id) ?
                                                                                            <FormGroup>
                                                                                                <Label for="description">Description</Label>
                                                                                                <Input type="textarea" name="text" id="description" defaultValue={description} onChange={this.onChange} />
                                                                                            </FormGroup>
                                                                                            : <CardText>{description}</CardText>
                                                                                    }
                                                                                </CardBody>
                                                                                <CardFooter>
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button
                                                                                            className="remove-btn"
                                                                                            color="danger"
                                                                                            onClick={this.onDeleteClick.bind(this, _id)}
                                                                                        >
                                                                                            Delete Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            null : <Button
                                                                                                className="remove-btn"
                                                                                                color="danger"
                                                                                                onClick={this.onDeleteClick.bind(this, _id)}
                                                                                            >
                                                                                                Delete Course
                                                                                            </Button>
                                                                                    }
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                            Edit Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            <Button color="primary" onClick={this.DoneEditCourse.bind(this, _id)}>
                                                                                                Done
                                                                                            </Button> : <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                                Edit Course
                                                                                            </Button>
                                                                                    }
                                                                                </CardFooter>
                                                                            </Card>
                                                                        </ListGroupItem>
                                                                    ) : null}
                                                                </Container>
                                                            </CSSTransition>
                                                        ))}
                                                    </TransitionGroup>
                                                </ListGroup>
                                            </TabPane>
                                        </TabContent>
                                        <TabContent activeTab={this.state.activeTab4}>
                                            <TabPane tabId="4">
                                                <ListGroup>
                                                    <TransitionGroup className="course-list">
                                                        {courses.map(({ _id, name, description, semester, major }) => (
                                                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                                                <Container>
                                                                    {major === "Biotechnology" && semester === 4 ? (
                                                                        <ListGroupItem>
                                                                            <Card>
                                                                                <CardHeader>{name}</CardHeader>
                                                                                <CardBody>
                                                                                    {(!this.state.isEdit) ? <CardText>{description}</CardText> :
                                                                                        (this.state.editid == _id) ?
                                                                                            <FormGroup>
                                                                                                <Label for="description">Description</Label>
                                                                                                <Input type="textarea" name="text" id="description" defaultValue={description} onChange={this.onChange} />
                                                                                            </FormGroup>
                                                                                            : <CardText>{description}</CardText>
                                                                                    }
                                                                                </CardBody>
                                                                                <CardFooter>
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button
                                                                                            className="remove-btn"
                                                                                            color="danger"
                                                                                            onClick={this.onDeleteClick.bind(this, _id)}
                                                                                        >
                                                                                            Delete Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            null : <Button
                                                                                                className="remove-btn"
                                                                                                color="danger"
                                                                                                onClick={this.onDeleteClick.bind(this, _id)}
                                                                                            >
                                                                                                Delete Course
                                                                                            </Button>
                                                                                    }
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                            Edit Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            <Button color="primary" onClick={this.DoneEditCourse.bind(this, _id)}>
                                                                                                Done
                                                                                            </Button> : <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                                Edit Course
                                                                                            </Button>
                                                                                    }
                                                                                </CardFooter>
                                                                            </Card>
                                                                        </ListGroupItem>
                                                                    ) : null}
                                                                </Container>
                                                            </CSSTransition>
                                                        ))}
                                                    </TransitionGroup>
                                                </ListGroup>
                                            </TabPane>
                                        </TabContent>
                                        <TabContent activeTab={this.state.activeTab4}>
                                            <TabPane tabId="5">
                                                <ListGroup>
                                                    <TransitionGroup className="course-list">
                                                        {courses.map(({ _id, name, description, semester, major }) => (
                                                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                                                <Container>
                                                                    {major === "Biotechnology" && semester === 5 ? (
                                                                        <ListGroupItem>
                                                                            <Card>
                                                                                <CardHeader>{name}</CardHeader>
                                                                                <CardBody>
                                                                                    {(!this.state.isEdit) ? <CardText>{description}</CardText> :
                                                                                        (this.state.editid == _id) ?
                                                                                            <FormGroup>
                                                                                                <Label for="description">Description</Label>
                                                                                                <Input type="textarea" name="text" id="description" defaultValue={description} onChange={this.onChange} />
                                                                                            </FormGroup>
                                                                                            : <CardText>{description}</CardText>
                                                                                    }
                                                                                </CardBody>
                                                                                <CardFooter>
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button
                                                                                            className="remove-btn"
                                                                                            color="danger"
                                                                                            onClick={this.onDeleteClick.bind(this, _id)}
                                                                                        >
                                                                                            Delete Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            null : <Button
                                                                                                className="remove-btn"
                                                                                                color="danger"
                                                                                                onClick={this.onDeleteClick.bind(this, _id)}
                                                                                            >
                                                                                                Delete Course
                                                                                            </Button>
                                                                                    }
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                            Edit Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            <Button color="primary" onClick={this.DoneEditCourse.bind(this, _id)}>
                                                                                                Done
                                                                                            </Button> : <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                                Edit Course
                                                                                            </Button>
                                                                                    }
                                                                                </CardFooter>
                                                                            </Card>
                                                                        </ListGroupItem>
                                                                    ) : null}
                                                                </Container>
                                                            </CSSTransition>
                                                        ))}
                                                    </TransitionGroup>
                                                </ListGroup>
                                            </TabPane>
                                        </TabContent>
                                        <TabContent activeTab={this.state.activeTab4}>
                                            <TabPane tabId="6">
                                                <ListGroup>
                                                    <TransitionGroup className="course-list">
                                                        {courses.map(({ _id, name, description, semester, major }) => (
                                                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                                                <Container>
                                                                    {major === "Biotechnology" && semester === 6 ? (
                                                                        <ListGroupItem>
                                                                            <Card>
                                                                                <CardHeader>{name}</CardHeader>
                                                                                <CardBody>
                                                                                    {(!this.state.isEdit) ? <CardText>{description}</CardText> :
                                                                                        (this.state.editid == _id) ?
                                                                                            <FormGroup>
                                                                                                <Label for="description">Description</Label>
                                                                                                <Input type="textarea" name="text" id="description" defaultValue={description} onChange={this.onChange} />
                                                                                            </FormGroup>
                                                                                            : <CardText>{description}</CardText>
                                                                                    }
                                                                                </CardBody>
                                                                                <CardFooter>
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button
                                                                                            className="remove-btn"
                                                                                            color="danger"
                                                                                            onClick={this.onDeleteClick.bind(this, _id)}
                                                                                        >
                                                                                            Delete Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            null : <Button
                                                                                                className="remove-btn"
                                                                                                color="danger"
                                                                                                onClick={this.onDeleteClick.bind(this, _id)}
                                                                                            >
                                                                                                Delete Course
                                                                                            </Button>
                                                                                    }
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                            Edit Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            <Button color="primary" onClick={this.DoneEditCourse.bind(this, _id)}>
                                                                                                Done
                                                                                            </Button> : <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                                Edit Course
                                                                                            </Button>
                                                                                    }
                                                                                </CardFooter>
                                                                            </Card>
                                                                        </ListGroupItem>
                                                                    ) : null}
                                                                </Container>
                                                            </CSSTransition>
                                                        ))}
                                                    </TransitionGroup>
                                                </ListGroup>
                                            </TabPane>
                                        </TabContent>
                                        <TabContent activeTab={this.state.activeTab4}>
                                            <TabPane tabId="7">
                                                <ListGroup>
                                                    <TransitionGroup className="course-list">
                                                        {courses.map(({ _id, name, description, semester, major }) => (
                                                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                                                <Container>
                                                                    {major === "Biotechnology" && semester === 7 ? (
                                                                        <ListGroupItem>
                                                                            <Card>
                                                                                <CardHeader>{name}</CardHeader>
                                                                                <CardBody>
                                                                                    {(!this.state.isEdit) ? <CardText>{description}</CardText> :
                                                                                        (this.state.editid == _id) ?
                                                                                            <FormGroup>
                                                                                                <Label for="description">Description</Label>
                                                                                                <Input type="textarea" name="text" id="description" defaultValue={description} onChange={this.onChange} />
                                                                                            </FormGroup>
                                                                                            : <CardText>{description}</CardText>
                                                                                    }
                                                                                </CardBody>
                                                                                <CardFooter>
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button
                                                                                            className="remove-btn"
                                                                                            color="danger"
                                                                                            onClick={this.onDeleteClick.bind(this, _id)}
                                                                                        >
                                                                                            Delete Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            null : <Button
                                                                                                className="remove-btn"
                                                                                                color="danger"
                                                                                                onClick={this.onDeleteClick.bind(this, _id)}
                                                                                            >
                                                                                                Delete Course
                                                                                            </Button>
                                                                                    }
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                            Edit Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            <Button color="primary" onClick={this.DoneEditCourse.bind(this, _id)}>
                                                                                                Done
                                                                                            </Button> : <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                                Edit Course
                                                                                            </Button>
                                                                                    }
                                                                                </CardFooter>
                                                                            </Card>
                                                                        </ListGroupItem>
                                                                    ) : null}
                                                                </Container>
                                                            </CSSTransition>
                                                        ))}
                                                    </TransitionGroup>
                                                </ListGroup>
                                            </TabPane>
                                        </TabContent>
                                        <TabContent activeTab={this.state.activeTab4}>
                                            <TabPane tabId="8">
                                                <ListGroup>
                                                    <TransitionGroup className="course-list">
                                                        {courses.map(({ _id, name, description, semester, major }) => (
                                                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                                                <Container>
                                                                    {major === "Biotechnology" && semester === 8 ? (
                                                                        <ListGroupItem>
                                                                            <Card>
                                                                                <CardHeader>{name}</CardHeader>
                                                                                <CardBody>
                                                                                    {(!this.state.isEdit) ? <CardText>{description}</CardText> :
                                                                                        (this.state.editid == _id) ?
                                                                                            <FormGroup>
                                                                                                <Label for="description">Description</Label>
                                                                                                <Input type="textarea" name="text" id="description" defaultValue={description} onChange={this.onChange} />
                                                                                            </FormGroup>
                                                                                            : <CardText>{description}</CardText>
                                                                                    }
                                                                                </CardBody>
                                                                                <CardFooter>
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button
                                                                                            className="remove-btn"
                                                                                            color="danger"
                                                                                            onClick={this.onDeleteClick.bind(this, _id)}
                                                                                        >
                                                                                            Delete Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            null : <Button
                                                                                                className="remove-btn"
                                                                                                color="danger"
                                                                                                onClick={this.onDeleteClick.bind(this, _id)}
                                                                                            >
                                                                                                Delete Course
                                                                                            </Button>
                                                                                    }
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                            Edit Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            <Button color="primary" onClick={this.DoneEditCourse.bind(this, _id)}>
                                                                                                Done
                                                                                            </Button> : <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                                Edit Course
                                                                                            </Button>
                                                                                    }
                                                                                </CardFooter>
                                                                            </Card>
                                                                        </ListGroupItem>
                                                                    ) : null}
                                                                </Container>
                                                            </CSSTransition>
                                                        ))}
                                                    </TransitionGroup>
                                                </ListGroup>
                                            </TabPane>
                                        </TabContent>
                                        <TabContent activeTab={this.state.activeTab4}>
                                            <TabPane tabId="9">
                                                <ListGroup>
                                                    <TransitionGroup className="course-list">
                                                        {courses.map(({ _id, name, description, semester, major }) => (
                                                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                                                <Container>
                                                                    {major === "Biotechnology" && semester === 9 ? (
                                                                        <ListGroupItem>
                                                                            <Card>
                                                                                <CardHeader>{name}</CardHeader>
                                                                                <CardBody>
                                                                                    {(!this.state.isEdit) ? <CardText>{description}</CardText> :
                                                                                        (this.state.editid == _id) ?
                                                                                            <FormGroup>
                                                                                                <Label for="description">Description</Label>
                                                                                                <Input type="textarea" name="text" id="description" defaultValue={description} onChange={this.onChange} />
                                                                                            </FormGroup>
                                                                                            : <CardText>{description}</CardText>
                                                                                    }
                                                                                </CardBody>
                                                                                <CardFooter>
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button
                                                                                            className="remove-btn"
                                                                                            color="danger"
                                                                                            onClick={this.onDeleteClick.bind(this, _id)}
                                                                                        >
                                                                                            Delete Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            null : <Button
                                                                                                className="remove-btn"
                                                                                                color="danger"
                                                                                                onClick={this.onDeleteClick.bind(this, _id)}
                                                                                            >
                                                                                                Delete Course
                                                                                            </Button>
                                                                                    }
                                                                                    {(!this.state.isEdit) ?
                                                                                        <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                            Edit Course
                                                                                        </Button>
                                                                                        :
                                                                                        (this.state.editid == _id) ?
                                                                                            <Button color="primary" onClick={this.DoneEditCourse.bind(this, _id)}>
                                                                                                Done
                                                                                            </Button> : <Button color="primary" onClick={this.EditCourse.bind(this, _id)}>
                                                                                                Edit Course
                                                                                            </Button>
                                                                                    }
                                                                                </CardFooter>
                                                                            </Card>
                                                                        </ListGroupItem>
                                                                    ) : null}
                                                                </Container>
                                                            </CSSTransition>
                                                        ))}
                                                    </TransitionGroup>
                                                </ListGroup>
                                            </TabPane>
                                        </TabContent>
                                    </Collapse></ListGroupItem>
                            </ListGroup>
                        </Collapse></ListGroupItem>
                </ListGroup>
            </Container >
        );
    }
}

CourseList.propTypes = {
    getCourses: PropTypes.func.isRequired,
    editCourse: PropTypes.func.isRequired,
    course: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    course: state.course
});

export default connect(
    mapStateToProps,
    { getCourses, deleteCourse, editCourse }
)(CourseList);