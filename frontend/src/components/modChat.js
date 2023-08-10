import React, { Component } from "react";
// importing all of these classes from reactstrap module
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";

// build a class base component
class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem
    };
  }
  // changes handler to check if a checkbox is checed or not
  handleChange = e => {
    let { name, value } = e.target;
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }
    const activeItem = { ...this.state.activeItem, [name]: value };
    this.setState({ activeItem });
  };

  // rendering modal in the custommodal class received toggle and on save as props,
  render() {
    const { toggle, onSave } = this.props;
    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}> Start Chatting </ModalHeader>
        <ModalBody>
        
          <Form>


            {/* 4 username input */}
            <FormGroup>
              <Label for="input">Input</Label>
              <Input
                type="text"
                name="input"
                value={this.state.activeItem.input}
                onChange={this.handleChange}
                placeholder="Enter Question"
              />
            </FormGroup>

            {/* 5 password input */}
            <FormGroup>
              <Label for="output">Output</Label>
              <Input
                type="text"
                name="output"
                value={this.state.activeItem.output}
                // onChange={this.handleChange}
                // placeholder="Enter Password"
              />
            </FormGroup>


          </Form>
        </ModalBody>
        {/* create a modal footer */}
        <ModalFooter>
          <Button color="success" onClick={() => onSave(this.state.activeItem)}>
            Enter
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
export default CustomModal