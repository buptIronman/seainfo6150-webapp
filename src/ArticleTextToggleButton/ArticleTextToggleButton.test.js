import React from 'react';
import ArticleTextToggleButton from "./ArticleTextToggleButton";
import App from "../App";
import { fireEvent } from "@testing-library/react";


describe("ArticleListItem test", () => {
    it("click button to show more", () => {
        const { container} = render(<App/>);
        const button = container.getElementsByClassName("button");
        fireEvent.click(button);
        expect(button.innerText).toBe("show less");
    });

})