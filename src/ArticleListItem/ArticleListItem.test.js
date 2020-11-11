import React from 'react';
import ArticleListItem from "./ArticleListItem";
import AddingMachineHooks from "../component-examples/AddingMachine/AddingMachineHooks";

describe("ArticleListItem test", () => {
    it("no data", () => {
        const { container } = render(<ArticleListItem article={0} />);
        expect(container).toMatchSnapshot();
    });

})