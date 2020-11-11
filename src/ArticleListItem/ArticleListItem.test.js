import React from 'react';
import ArticleListItem from "./ArticleListItem";
import App from "../App";

describe("ArticleListItem test", () => {
    it("no data", () => {
        const { container } = render(<ArticleListItem article={0} />);
        expect(container).toMatchSnapshot();
    });

    it("render correctly", () => {
        const ArticleListItem = render(<App />);
        expect(ArticleListItem).toMatchSnapshot();
    })

})