import React from 'react';
import ArticleList from "../ArticleList/ArticleList";
import { fireEvent } from "@testing-library/react";
import App from "../App";

describe("ArticleList test", () => {
    it("no data", () => {
        const { container } = render(<ArticleList articles={0} />);
        expect(container).toMatchSnapshot();
    });


})