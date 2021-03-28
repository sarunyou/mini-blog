import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import {
    Button,
    ButtonToolbar,
    Form,
    FormGroup,
    ControlLabel,
    Input,
} from "rsuite";
function Login() {
    const { control, handleSubmit, errors } = useForm();
    const history = useHistory();
    const onSubmit = (data) => {
        console.log("onSubmit ~ data", data);
    };
    return (
        <div className="h-full w-full bg-gray-100 flex justify-center items-center">
            <div className="bg-white p-8">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <FormGroup>
                        <ControlLabel>Username</ControlLabel>
                        <Controller
                            name="username"
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ onChange, value }) => (
                                <Input onChange={onChange} value={value} />
                            )}
                        />
                        {errors.status && <span>This field is required</span>}
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Password</ControlLabel>
                        <Controller
                            name="password"
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ onChange, value }) => (
                                <Input
                                    type="password"
                                    onChange={onChange}
                                    value={value}
                                />
                            )}
                        />
                        {errors.status && <span>This field is required</span>}
                    </FormGroup>
                    <FormGroup>
                        <ButtonToolbar className="text-right">
                            <Button
                                onClick={() => {
                                    history.push("/home");
                                }}
                                appearance="ghost"
                            >
                                Back to home
                            </Button>
                            <Button type="primary" appearance="primary">
                                Login
                            </Button>
                        </ButtonToolbar>
                    </FormGroup>
                </Form>
            </div>
        </div>
    );
}

export default Login;
