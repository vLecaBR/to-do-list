import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateSelector = () => {
  const [date, setDate] = useState(null);

  return (
    <div>
      <h3>Data</h3>
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        placeholderText="Selecione uma data"
      />
    </div>
  );
};

export default DateSelector;
