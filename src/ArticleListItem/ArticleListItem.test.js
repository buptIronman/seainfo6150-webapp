import React from 'react';
import ArticleListItem from "./ArticleListItem";
import AddingMachineHooks from "../component-examples/AddingMachine/AddingMachineHooks";

describe("ArticleListItem test", () => {
    it("no data", () => {
        const { container } = render(<ArticleListItem article={0} />);
        expect(container).toMatchSnapshot();
    });

    it("renders correctly when currentNum is 10", () => {
        const { container } = render(<AddingMachineHooks startNum={10} />);
        expect(container).toMatchSnapshot();
    });

    it("renders correctly after button is clicked", () => {
        const { container, getByText } = render(
            <AddingMachineHooks startNum={0} />
        );
        const button = getByText("Click me to add 1");
        fireEvent.click(button);
        expect(container).toMatchSnapshot();
    });
})