import React from "react";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";
import BlogForm from "../components/Blog/BlogForm";

describe("Should render BlogForm", () => {
    afterEach(cleanup);

    test("Should render BlogForm", async () => {
        const blogForm = render(<BlogForm isOpen url="/greeting" />);
        expect(blogForm).toBeTruthy();
    });

    test("BlogForm given not fill required field should not call onSubmit ", async () => {
        const handleSubmit = jest.fn();
        render(<BlogForm isOpen url="/greeting" onSubmit={handleSubmit} />);
        const nameInput = screen.getByTestId("name");
        fireEvent.change(nameInput, { target: { value: "hellow" } });
        const leftClick = { button: 1 };
        fireEvent.click(screen.getByTestId("submit"), leftClick);

        expect(handleSubmit).not.toHaveBeenCalled();
    });
});
