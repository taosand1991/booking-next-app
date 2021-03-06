/* eslint-disable react-hooks/exhaustive-deps */
import authContext from "./authContext";
import { useState, useEffect } from "react";
import apiRequest from "../utils/apiRequest";
import { useRouter } from "next/router";
import exchangeRequest from "./../utils/exchangeRequest";
import { useMediaQuery } from "@chakra-ui/react";

function Context({ children }) {
  const router = useRouter();
  const [state, setState] = useState({
    tempCoordinates: {},
    bookingOption: {
      checkInDate: "",
      checkOutDate: "",
    },
    adult: 1,
    word: "",
    kid: 0,
    room: 1,
    city: "",
    data: [],
    sortedValue: "",
    currencyCode: "",
    exchange: 0,
    limit: 5,
    currency: { value: "EUR", flag: "eu" },
    loading: false,
    open: false,
    drawer: false,
    hotelOptions: { hotel: false, hostel: false, breakFastInc: false },
    error: {},
  });

  const [mobileWidth, smallWidth] = useMediaQuery([
    "(max-width: 768px)",
    "(min-width: 300px) and (max-width: 600px)",
  ]);

  const [isMobile, setMobile] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    setMobile(mobileWidth);
    setSmallScreen(smallWidth);
  }, [mobileWidth]);

  const openDrawer = () => {
    setState({ ...state, drawer: true });
  };

  const closeDrawer = () => {
    setState({ ...state, drawer: false });
  };

  const handleSortingAscending = (e) => {
    const { value } = e.target;
    let data = [...state.data];
    if (value === "") return;
    if (value === "review_score") {
      data.sort((a, b) => {
        return a.review_score - b.review_score;
      });
      setState({ ...state, data, sortedValue: value });
    } else {
      data.sort((a, b) => {
        return (
          a.composite_price_breakdown["gross_amount_per_night"].value -
          b.composite_price_breakdown["gross_amount_per_night"].value
        );
      });
      setState({ ...state, data, sortedValue: value });
    }
  };

  const handleSortingChange = () => {
    let data = [...state.data];
    if (state.sortedValue === "review_score") {
      data.sort((a, b) => {
        return a.review_score - b.review_score ? -1 : 1;
      });
      setState({ ...state, data });
    } else {
      data.sort((a, b) => {
        return a.composite_price_breakdown["gross_amount_per_night"].value -
          b.composite_price_breakdown["gross_amount_per_night"].value
          ? -1
          : 1;
      });
      setState({ ...state, data });
    }
  };

  const handleChecked = (e) => {
    const { name, checked } = e.target;
    const hotelOptions = { ...state.hotelOptions };
    hotelOptions[name] = checked;
    setState({ ...state, hotelOptions });
  };

  const handleGooglePlace = (place) => {
    const latitude = place.geometry.location.lat();
    const city = place.address_components[2].long_name;
    const longitude = place.geometry.location.lng();
    let coordinates = { ...state.tempCoordinates };
    coordinates["longitude"] = longitude;
    coordinates["latitude"] = latitude;
    setState({ ...state, tempCoordinates: coordinates, city });
  };

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    const bookings = { ...state.bookingOption };
    bookings[name] = value;

    setState({ ...state, bookingOption: bookings });
  };

  const handleAdultChange = (value) => {
    setState({ ...state, adult: value });
  };

  const handleKidChange = (value) => {
    setState({ ...state, kid: value });
  };

  const handleRoomChange = (value) => {
    setState({ ...state, room: value });
  };

  const catchAllErrors = (error) => {
    const { data } = error.response;
    const errors = { ...state.error };
    errors[data["detail"][0].loc[1]] = data["detail"][0].msg;
    setState({ ...state, error: errors, loading: false });
  };

  const checkForInputFields = () => {
    let errors = {};
    const {
      bookingOption: { checkInDate, checkOutDate },
      tempCoordinates,
    } = state;
    if (
      checkInDate == "" ||
      checkOutDate == "" ||
      Object.keys(tempCoordinates).length < 2
    ) {
      errors["checkIn"] = "please enter a valid date";
      errors["date"] = "please enter a valid date";
      errors["input"] = "please enter a valid address";
      setState({ ...state, error: errors });
      return true;
    }
    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const checkError = checkForInputFields();
    if (checkError) return;
    if (Object.keys(state.error).length > 0) return;
    setState({ ...state, loading: true });
    const options = {
      checkoutDate: state.bookingOption.checkOutDate,
      checkinDate: state.bookingOption.checkInDate,
      latitude: state.tempCoordinates.latitude,
      longitude: state.tempCoordinates.longitude,
      adultNum: state.adult,
      roomNum: state.room,
    };
    try {
      const results = await apiRequest(options);
      const exchange = await exchangeRequest(
        results.data.result[0].currencycode.toUpperCase(),
        state.currency.value
      );

      setTimeout(() => {
        setState({
          ...state,
          loading: false,
          data: results.data["result"],
          exchange: exchange.conversion_rate,
          currencyCode: results.data.result[0].currencycode,
          limit: 5,
        });
        router.push("/hotels");
      }, 2000);
    } catch (error) {
      const { data } = error.response;
      const errors = { ...state.error };
      errors[data["detail"][0].loc[1]] = data["detail"][0].msg;
      setState({ ...state, error: errors, loading: false });
    }
  };

  const checkDate = () => {
    let error = {};
    const checkIn = new Date(state.bookingOption.checkInDate);
    const checkOut = new Date(state.bookingOption.checkOutDate);
    if (checkIn > checkOut) error["date"] = "checkout date must be greater";
    else if (checkOut <= new Date())
      error["date"] = "You can not choose a date in the past";
    setState({ ...state, error });
  };
  const checkInDate = () => {
    let error = {};
    const checkIn = new Date(state.bookingOption.checkInDate);
    if (checkIn < new Date())
      error["checkIn"] = "check-in date must be greater";
    setState({ ...state, error });
  };

  const handleCurrencyChange = async (currency) => {
    if (state.currencyCode) {
      const exchangeRate = await exchangeRequest(
        state.currencyCode,
        currency.value
      );
      setState({
        ...state,
        currency,
        exchange: exchangeRate.conversion_rate,
        open: false,
      });
    } else {
      setState({
        ...state,
        currency,
        open: false,
      });
    }
  };

  const isClose = () => {
    setState({ ...state, open: false });
  };

  const isOpen = () => {
    setState({ ...state, open: true });
  };

  const handleLoadMore = () => {
    setState({ ...state, loading: true });
    setTimeout(() => {
      setState({ ...state, limit: state.limit + 5 });
    }, 2000);
  };

  const options = {
    results: state.data,
    city: state.city,
    handleLocation: handleGooglePlace,
    handleBooking: handleBookingChange,
    bookingProps: state.bookingOption,
    handleAdult: handleAdultChange,
    handleKid: handleKidChange,
    adult: state.adult,
    kid: state.kid,
    room: state.room,
    checkDate,
    checkInDate,
    handleRoom: handleRoomChange,
    errors: state.error,
    loading: state.loading,
    submitBooking: handleSubmit,
    catchErrors: catchAllErrors,
    currency: state.currency,
    currencyCode: state.currencyCode,
    exchangeRate: state.exchange,
    open: state.open,
    hotelOption: state.hotelOptions,
    isOpen,
    isClose,
    handleSortChange: handleSortingChange,
    handleSort: handleSortingAscending,
    handleCurrency: handleCurrencyChange,
    handleCheck: handleChecked,
    drawer: state.drawer,
    openDrawer: openDrawer,
    closeDrawer: closeDrawer,
    limit: state.limit,
    loadMore: handleLoadMore,
    isMobile,
    smallScreen,
  };

  return (
    <authContext.Provider value={options}>{children}</authContext.Provider>
  );
}

export default Context;
