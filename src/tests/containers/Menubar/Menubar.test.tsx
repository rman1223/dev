import React from "react";
import {render, screen} from "@testing-library/react";
import {HashRouter as Router} from 'react-router-dom';
import Menubar from "../../../containers/Menubar/Menubar";

const expectedMenuItems: string[] = [
    'Chmod Calculator',
    'Unix Timestamp Converter'
];

render(<Router><Menubar/></Router>);

test('shows the menu items', () => {
    expectedMenuItems.forEach((item) => {
        expect(screen.getByText(item)).toBeInTheDocument()
    });
});
