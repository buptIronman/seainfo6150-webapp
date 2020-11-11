import React from 'react';
import ArticleTextToggleButton from "./ArticleTextToggleButton";
import App from "../App";
import {fireEvent} from "@testing-library/dom";


describe("ArticleListItem test", () => {
    it("click button to show more", () => {
        const { container, getByText } = render(<App/>);
        const button = getByText("show more")
        fireEvent.click(button);
        expect(container).toMatchSnapshot();

    });

})