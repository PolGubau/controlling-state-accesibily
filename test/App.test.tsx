// Main tests file for the App

import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

//

const title = "React Frontent Exercise🌿";
const sampleTodo = "Learn Nextjs";

describe("App", () => {
  test("Title is working", () => {
    render(<App />);
    expect(screen.getByText(title)).toBeDefined();
  });
  test("Sample todos are working", () => {
    render(<App />);
    screen.debug();
    expect(screen.getByText(sampleTodo)).toBeDefined();
  });
});
