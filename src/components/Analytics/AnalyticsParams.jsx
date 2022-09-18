import React from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import DateRangePicker from "react-date-range/dist/components/DateRangePicker";
import {
  addDays,
  addWeeks,
  addYears,
  endOfWeek,
  startOfMonth,
  startOfWeek,
  startOfYear,
} from "date-fns";

export const genStaticRange = (label, startDate, endDate) => {
  return {
    label: label,
    range: () => ({
      startDate: startDate,
      endDate: endDate,
    }),
    isSelected() {
      return false;
    },
  };
};

export const getWeekStart = (date) => {
  return startOfWeek(date, { weekStartsOn: 1 });
};

export const getWeekEnd = (date) => {
  return endOfWeek(date, { weekStartsOn: 1 });
};

const AnalyticsParams = ({ startDate, endDate, handleChange }) => {
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const staticRanges = [
    genStaticRange("Today", new Date(), new Date()),
    genStaticRange(
      "Yesterday",
      addDays(new Date(), -1),
      addDays(new Date(), -1)
    ),
    genStaticRange("This week", getWeekStart(new Date()), new Date()),
    genStaticRange("Week", addDays(new Date(), -7), new Date()),
    genStaticRange(
      "Previous week",
      getWeekStart(addWeeks(new Date(), -1)),
      getWeekEnd(addWeeks(new Date(), -1))
    ),
    genStaticRange("Previous month", new Date(), addDays(new Date(), -14)),
    genStaticRange("This month", startOfMonth(new Date()), new Date()),
    genStaticRange("Year", startOfYear(new Date()), new Date()),
  ];

  return (
    <DateRangePicker
      shownDate={startDate}
      weekStartsOn={1}
      maxDate={new Date()}
      minDate={addYears(new Date(), -2)}
      onChange={(range) => handleChange(range)}
      showSelectionPreview={true}
      moveRangeOnFirstSelection={false}
      ranges={[selectionRange]}
      direction="horizontal"
      preventSnapRefocus={true}
      calendarFocus="backwards"
      staticRanges={staticRanges}
    />
  );
};

export default AnalyticsParams;
