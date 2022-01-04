import { render } from "@testing-library/react";
import authContext from "../authentication/authContext";

const options = {
  coordinates: jest.fn(),
  results: jest.fn(),
  city: jest.fn(),
  handleLocation: jest.fn(),
  handleBooking: jest.fn(),
  bookingProps: jest.fn(),
  handleAdult: jest.fn(),
  handleKid: jest.fn(),
  adult: jest.fn(),
  kid: jest.fn(),
  room: jest.fn(),
  checkDate: jest.fn(),
  checkInDate: jest.fn(),
  handleRoom: jest.fn(),
  errors: jest.fn(),
  loading: jest.fn(),
  submitBooking: jest.fn(),
  catchErrors: jest.fn(),
  currency: jest.fn(),
  currencyCode: jest.fn(),
  exchangeRate: jest.fn(),
  open: jest.fn(),
  hotelOption: jest.fn(),
  isOpen: jest.fn(),
  isClose: jest.fn(),
  handleSortChange: jest.fn(),
  handleSort: jest.fn(),
  handleCurrency: jest.fn(),
  handleCheck: jest.fn(),
  drawer: jest.fn(),
  openDrawer: jest.fn(),
  closeDrawer: jest.fn(),
  limit: jest.fn(),
  loadMore: jest.fn(),
  isMobile: jest.fn(),
  smallScreen: jest.fn(),
  word: jest.fn(),
};

const AllProviders = ({ children }) => {
  return (
    <authContext.Provider value={options}>{children}</authContext.Provider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };
