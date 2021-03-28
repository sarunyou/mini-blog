import React from "react";
import { useForm, Controller } from "react-hook-form";
import PropTypes from "prop-types";
import {
    Button,
    ButtonToolbar,
    Modal,
    Form,
    FormGroup,
    ControlLabel,
    Icon,
    Input,
    SelectPicker,
} from "rsuite";

const categories = [
    "PHYSICS",
    "TECHNOLOGY",
    "CHEMISTRY",
    "SOCIOLOGY",
    "ENGINEERING",
    "FINANCE",
    "BIOLOGY",
    "HEALTH",
    "SPACE",
    "ART",
];

const statues = [
    {
        label: "Beginner",
        value: 1,
        color: "blue",
    },
    {
        label: "Intermediate",
        value: 2,
        color: "purple",
    },
    {
        label: "Advance",
        value: 3,
        color: "yellow",
    },
];

function BlogForm(props) {
    const {
        isOpen,
        onClose = () => {},
        initialValues = {},
        onSubmit = () => {},
    } = props;
    const {
        control,
        handleSubmit,
        watch,
        errors,
        formState: { isDirty, isSubmitting },
    } = useForm();
    console.log(watch("category")); // watch input value by passing the name of it

    return (
        <Modal
            // dialogClassName="w-full sm:w-96"
            size="xs"
            overflow
            show={isOpen}
            onHide={onClose}
        >
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Modal.Header>
                    <Modal.Title>Create Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormGroup>
                        <ControlLabel>Name</ControlLabel>
                        <Controller
                            name="name"
                            control={control}
                            defaultValue={initialValues.name}
                            rules={{
                                required: true,
                                minLength: {
                                    value: 5,
                                    message:
                                        "Please fill at least 5 characters",
                                },
                            }}
                            render={({ onChange, value }) => (
                                <Input onChange={onChange} value={value} />
                            )}
                        />
                        {errors.name && (
                            <span>
                                {errors.name.message ||
                                    "This field is required"}
                            </span>
                        )}
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Content</ControlLabel>
                        <Controller
                            name="content"
                            control={control}
                            rules={{
                                required: true,
                                minLength: {
                                    value: 5,
                                    message:
                                        "Please fill at least 5 characters",
                                },
                            }}
                            defaultValue={initialValues.content}
                            render={({ onChange, value }) => (
                                <Input
                                    onChange={onChange}
                                    value={value}
                                    rows={5}
                                    name="content"
                                    componentClass="textarea"
                                />
                            )}
                        />
                        {errors.content && (
                            <span>
                                {errors.content.message ||
                                    "This field is required"}
                            </span>
                        )}
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Category</ControlLabel>
                        <Controller
                            name="category"
                            rules={{ required: true }}
                            control={control}
                            defaultValue={initialValues.category}
                            render={({ onChange, value }) => (
                                <SelectPicker
                                    className="w-full"
                                    data={categories.map((category) => ({
                                        value: category,
                                        label: category,
                                    }))}
                                    onChange={onChange}
                                    value={value}
                                />
                            )}
                        />
                        {errors.category && <span>This field is required</span>}
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Status</ControlLabel>
                        <Controller
                            name="status"
                            rules={{ required: true }}
                            control={control}
                            defaultValue={initialValues.status}
                            render={({ onChange, value }) => (
                                <SelectPicker
                                    className="w-full"
                                    data={statues}
                                    onChange={onChange}
                                    value={value}
                                    renderMenuItem={(label) => {
                                        const status = statues.find(
                                            (status) => status.label === label
                                        );
                                        return (
                                            <div>
                                                <Icon
                                                    className={`mr-4 text-${status.color}-500`}
                                                    icon="circle-o"
                                                />
                                                {label}
                                            </div>
                                        );
                                    }}
                                />
                            )}
                        />
                        {errors.status && <span>This field is required</span>}
                    </FormGroup>
                </Modal.Body>
                <Modal.Footer>
                    <FormGroup>
                        <ButtonToolbar>
                            <Button onClick={onClose} appearance="default">
                                Cancel
                            </Button>
                            <Button
                                disabled={!isDirty || isSubmitting}
                                type="submit"
                                appearance="primary"
                            >
                                Create
                            </Button>
                        </ButtonToolbar>
                    </FormGroup>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

BlogForm.propTypes = {
    onClose: PropTypes.func,
    isOpen: PropTypes.bool,
    initialValues: PropTypes.object,
    onSubmit: PropTypes.func,
};
export default BlogForm;