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
    Notification,
} from "rsuite";
import useAuth from "../hooks/useAuth.hook";
import userService from "../services/user.service";
function Login() {
    const auth = useAuth();
    const {
      
         control,
    
           handleSubmit,
  
             errors,
        formState: { isSubmitting },
   } = useForm();
    const history = useHistory();
    const onSubmit = async (data) => {
        try {
            const response = await userService.login(data);
            auth.login(response.accessToken);
            history.push("/home")
        } catch (error) {
            Notification.error({
                title: "Error",
                description: "Please check you username and password again",
            });
        }
    };

    return (
        <div className="h-full w-full bg-gray-100 flex justify-center items-center">
            <div className="mx-8 rounded-xl bg-white p-8 w-full md:w-1/2">
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
                        {errors.username && <span>This field is required</span>}
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
                        {errors.password && <span>This field is required</span>}
                    </FormGroup>
                    <FormGroup>
                        <ButtonToolbar className="flex justify-between">
                            <Button
                                onClick={() => {
                                    history.push("/home");
                                }}
                                appearance="ghost"
                            >
                                Back to home
                            </Button>
                            <Button
                                loading={isSubmitting}
                                type="primary"
                
                              
                              
                              
                              
                                                   appearance="primary"
                            
                            
                            
                            
                            
                            >
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
