import React from "react";
import { useForm, Controller } from "react-hook-form";
import PropTypes from "prop-types";
import { statues } from "./constants";
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
        errors,
        formState: { isDirty, isSubmitting },
    } = useForm();

    return (
        <Modal size="xs" overflow show={isOpen} onHide={onClose}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Modal.Header>
                    <Modal.Title>
                        {initialValues.id ? "Update" : "Create"} Blog
                    </Modal.Title>
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
                                maxLength: {
                                    value: 99,
                                    message:
                                        "Please fill no longer than 99 characters",
                                },
                            }}
                            render={({ onChange, value }) => (
                                <Input
                                    data-testid="name"
                                    onChange={onChange}
                                    value={value}
                                />
                            )}
                        />
                        {errors.name && (
                            <span className="text-red-500">
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
                                maxLength: {
                                    value: 500,
                                    message:
                                        "Please fill no longer than 500 characters",
                                },
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
                                    data-testid="content"
                                    rows={5}
                                    name="content"
                                    componentClass="textarea"
                                />
                            )}
                        />
                        {errors.content && (
                            <span className="text-red-500">
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
                                    data-testid="category"
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
                        {errors.category && (
                            <span className="text-red-500">
                                This field is required
                            </span>
                        )}
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
                                    data-testid="status"
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
                        {errors.status && (
                            <span className="text-red-500">
                                This field is required
                            </span>
                        )}
                    </FormGroup>
                </Modal.Body>
                <Modal.Footer>
                    <FormGroup>
                        <ButtonToolbar>
                            <Button onClick={onClose} appearance="default">
                                Cancel
                            </Button>
                            <Button
                                disabled={!isDirty}
                                loading={isSubmitting}
                                type="submit"
                                data-testid="submit"
                                appearance="primary"
                            >
                                {initialValues.id ? "Update" : "Create"}
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
