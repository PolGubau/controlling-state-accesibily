// Main tests file for the App

import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App";
import { userEvent } from "@testing-library/user-event";

const newTodoName = "_._.";

describe("App End2End", () => {
  render(<App />);
  const user = userEvent.setup(); // we have to setup userEvent to use the tab function

  test("List should exist", () => {
    const list = screen.getByRole("list");
    expect(list).toBeDefined(); // check if the list is defined
  });

  test("Should have 3 items", () => {
    const items = screen.getAllByRole("listitem");
    expect(items.length).toBe(3); // check if the list has 3 items
  });

  test("Input should exist", () => {
    const input = screen.getByRole("textbox");
    expect(input).toBeDefined(); // check if the input is defined
  });

  test("Should add items on submit form and you can delete them", async () => {
    const input = screen.getByRole("textbox");
    const list = screen.getByRole("list");

    // Search form to submit the text

    const form = screen.getByRole("form");
    expect(form).toBeDefined(); // check if the form is defined

    const button = form.querySelector("button"); // select the button inside the form
    expect(button).toBeDefined(); // check if the button is defined
    await user.type(input, newTodoName); // write the text in the input

    // submit the form
    await user.click(button!); // click the button

    // check if the text is in the list
    expect(list.childNodes.length).toBe(4); // check if the list has 4 items (One more than before)

    // check if the text is in the list
    const newItem = screen.getByText(newTodoName);
    expect(newItem).toBeDefined(); // check if the new item is defined

    const deleteButton = newItem.querySelector("button"); // select the button inside the new item
    expect(deleteButton).toBeDefined(); // check if the button is defined

    await user.click(deleteButton!); // click the button

    expect(list.childNodes.length).toBe(3); // check if the list has 3 items (One less than before)
  });
});
