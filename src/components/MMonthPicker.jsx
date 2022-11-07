import React from "react";
import MonthPicker from "react-month-picker";
import "react-month-picker/scss/month-picker.scss";

export default function MMonthPicker() {
  const [value, setValue] = React.useState({ year: 2020, month: 9 });
  const monthPickerRef = React.useRef(null);

  const showPicker = () => {
    if (monthPickerRef && monthPickerRef.current) {
      // console.log(monthPickerRef.current);
      monthPickerRef.current.show();
    }
  };

  const hidePicker = () => {
    if (monthPickerRef && monthPickerRef.current) {
      monthPickerRef.current.dismiss();
    }
  };

  const handlePickerChange = (...args) => {
    // console.log(args);
    setValue({ year: args[0], month: args[1] });
    hidePicker(); // this works!
  };

  const lang = {
    months: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    from: "From",
    to: "To"
  };

  return (
    <MonthPicker
      lang={lang.months}
      ref={monthPickerRef}
      value={value}
      onChange={handlePickerChange}
    >
      <span onClick={showPicker} className="dark:text-white xs:text-xs sm:text-xs border-b">{lang.months[value.month]}, {value.year}</span>
    </MonthPicker>
  );
}
