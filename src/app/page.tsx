"use client";
import { useState } from "react";

export default function Home() {
  const [day, setDay] = useState<number | null>(null);
  const [month, setMonth] = useState<number | null>(null);
  const [year, setYear] = useState<number | null>(null);

  const [error, setError] = useState(false);
  const [dayError, setDayError] = useState<string | null>(null);
  const [monthError, setMonthError] = useState<string | null>(null);
  const [yearError, setYearError] = useState<string | null>(null);

  const updateForm = (e: any) => {
    e.preventDefault();

    const dayInput = document.getElementById("day") as HTMLInputElement;
    const monthInput = document.getElementById("month") as HTMLInputElement;
    const yearInput = document.getElementById("year") as HTMLInputElement;

    // Check if values are filled
    let error = false;

    if (!dayInput.value) {
      setDayError("This field is required");
      error = true;
    }
    if (!monthInput.value) {
      setMonthError("This field is required");
      error = true;
    }
    if (!yearInput.value) {
      setYearError("This field is required");
      error = true;
    }

    // Check if values are a number
    if (dayInput.value && isNaN(parseInt(dayInput.value))) {
      setDayError("This field must be a number");
      error = true;
    }
    if (monthInput.value && isNaN(parseInt(monthInput.value))) {
      setMonthError("This field must be a number");
      error = true;
    }
    if (yearInput.value && isNaN(parseInt(yearInput.value))) {
      setYearError("This field must be a number");
      error = true;
    }

    // Check if values are in range
    if (dayInput.value && parseInt(dayInput.value) > 31) {
      setDayError("Must be a valid day");
      error = true;
    }
    if (monthInput.value && parseInt(monthInput.value) > 12) {
      setMonthError("Must be a valid month");
      error = true;
    }

    if (error) {
      setDay(null);
      setMonth(null);
      setYear(null);
      return;
    }

    // Convert day month and year to date
    const date = new Date(
      parseInt(yearInput.value),
      parseInt(monthInput.value) - 1,
      parseInt(dayInput.value)
    );

    // Get the difference between the date and now
    const diff = Date.now() - date.getTime();
    console.log(date);

    // Get years from difference
    const _year = Math.floor(diff / 1000 / 60 / 60 / 24 / 365.25);
    const _month = Math.floor((diff / 1000 / 60 / 60 / 24 / 30.4375) % 12);
    const _day = Math.floor((diff / 1000 / 60 / 60 / 24) % 30.4375);

    // Date error checking
    if (_year < 0) {
      setYearError("Cannot be in the future");
      setError(true);
      error = true;
    }

    // Return if error
    if (error) {
      setDay(null);
      setMonth(null);
      setYear(null);
      return;
    }

    // Set values
    setDay(_day);
    setMonth(_month);
    setYear(_year);
    setDayError(null);
    setMonthError(null);
    setYearError(null);
  };

  return (
    <main className="flex flex-col justify-center items-center h-screen bg-neutral-200">
      <div className="flex flex-col w-1/2 justify-center items-center p-10 pr-14 rounded-t-xl rounded-bl-xl rounded-br-[10rem] bg-neutral-100">
        <form className="flex flex-col w-full" onSubmit={updateForm}>
          <div className="flex flex-row gap-5 w-[80%]">
            <div className="flex flex-col group w-1/4 gap-2">
              <label htmlFor="day" className="text-neutral-400 font-bold">
                DAY
              </label>
              <input
                type="number"
                placeholder="DD"
                id="day"
                className="rounded-md text-[2rem] font-bold pl-4 py-2 bg-neutral-100 border-2 border-solid border-neutral-300 active:border-primary transition-all duration-200"
              />
            </div>

            <div className="flex flex-col group w-1/4 gap-2">
              <label htmlFor="month" className="text-neutral-400 font-bold">
                MONTH
              </label>
              <input
                type="number"
                placeholder="MM"
                id="month"
                className="rounded-md text-[2rem] font-bold pl-4 py-2 bg-neutral-100 border-2 border-solid border-neutral-300 active:border-primary transition-all duration-200"
              />
            </div>

            <div className="flex flex-col group w-1/4 gap-2">
              <label htmlFor="year" className="text-neutral-400 font-bold">
                YEAR
              </label>
              <input
                type="number"
                placeholder="YYYY"
                id="year"
                className="rounded-md text-[2rem] font-bold pl-4 py-2 bg-neutral-100 border-2 border-solid border-neutral-300 active:border-primary transition-all duration-200"
              />
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center justify-end">
            <div className="w-full h-[2px] bg-neutral-300" />
            <button type="submit" className="flex-none w-20">
              <img
                src="/icon-arrow.svg"
                className="bg-primary rounded-full w-20 p-4"
              />
            </button>
          </div>
        </form>
        <div className="flex flex-col w-full items-start italic text-neutral-500 font-extrabold text-[4rem]">
          <p>
            <span className="text-primary text-[4.3rem] mr-1">
              {year ? year : "--"}
            </span>
            years
          </p>
          <p className="-mt-8">
            <span className="text-primary text-[4.3rem] mr-1">
              {month ? month : "--"}
            </span>
            months
          </p>
          <p className="-mt-8">
            <span className="text-primary text-[4.3rem] mr-1">
              {day ? day : "--"}
            </span>
            days
          </p>
        </div>
      </div>
    </main>
  );
}
