import Context from "../authentication/context";
import "@testing-library/jest-dom";
import { fireEvent, cleanup, render } from "@testing-library/react";
import Home from "../pages/index";
import Navbar from "./../components/header/Navbar";
import Hotels from "../pages/hotels";

afterEach(() => {
  cleanup();
});

describe("testing for the actual DOM", () => {
  test("checking for elements", () => {
    const { getByTestId, getByLabelText, queryByTestId } = render(
      <Context>
        <Home />
      </Context>
    );
    expect(getByTestId("home-element")).toBeInTheDocument();
    expect(getByLabelText("Check-in date")).toBeInTheDocument();
    expect(getByLabelText("Check-out date")).toBeInTheDocument();
    expect(getByTestId("search")).toBeInTheDocument();
    expect(getByTestId("search")).not.toBeDisabled();
    expect(queryByTestId("checkin-error")).toBeNull();
    expect(queryByTestId("checkout-error")).toBeNull();
  });
});

describe("testing for the submission", () => {
  test("check for errors when submitting", async () => {
    const {
      getByTestId,
      getByLabelText,
      getByPlaceholderText,
      queryByTestId,
      getByText,
      getByRole,
      findByTestId,
    } = render(
      <Context>
        <Navbar />
        <Home />
      </Context>
    );
    const date = "2021-12-31";
    const text = getByPlaceholderText("Enter your city");
    const input = getByLabelText(/Check-in date/i);
    const button = getByRole("button", { name: /Search/i, type: "submit" });
    fireEvent.change(input, { target: { value: "2021-12-31" } });
    expect(input.value).toEqual(date);
    expect(button).toBeInTheDocument();
    expect(getByText("Hotelinus")).toBeInTheDocument();
    expect(queryByTestId("input-error")).not.toBeInTheDocument();
    expect(text).toBeInTheDocument();
    fireEvent.click(button);
    const error = queryByTestId("input-error");
    expect(error).toBeInTheDocument();
    expect(queryByTestId("checkin-error")).toBeInTheDocument();
  });

  test("check it has submitted with data", async () => {
    const {
      getByTestId,
      getByLabelText,
      getByPlaceholderText,
      queryByTestId,
      getByText,
      getByRole,
      findByTestId,
    } = render(
      <Context>
        <Home />
        <Hotels />
      </Context>
    );
    const input = getByPlaceholderText(/Enter your city/i);
    const checkIn = getByLabelText(/Check-in date/i);
    const checkOut = getByLabelText(/Check-out date/i);
    const button = getByRole("button", { name: /Search/i });
    fireEvent.change(input, { target: { value: "vilnius, Lithuania" } });
    fireEvent.change(checkIn, { target: { value: "2021-12-28" } });
    fireEvent.change(checkOut, { target: { value: "2021-12-31" } });
  });
});

cleanup();
