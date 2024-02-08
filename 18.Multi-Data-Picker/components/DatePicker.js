import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import transition from "react-element-popper/animations/transition";

function DatePickerComponent() {
  const [value, setValue] = useState(new Date());

  const changeHandler = (event) => {
    const date = new Date(event);
    console.log(date)
    setValue(date);
  };

  return (
    <DatePicker
      animations={[transition({ duration: 800, from: 35 })]}
      numberOfMonths={3}
      onChange={changeHandler}
      value={value}
      locale={persian_fa}
      calendar={persian}
    />
  );
}

export default DatePickerComponent;
