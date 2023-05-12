export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-center items-center bg-neutral-200">
      <div>
        <form>
          <label htmlFor="day">DAY</label>
          <input type="number" placeholder="DD" id="day" />

          <label htmlFor="month">MONTH</label>
          <input type="number" placeholder="MM" id="month" />

          <label htmlFor="year">YEAR</label>
          <input type="number" placeholder="YYYY" id="year" />

          <button type="submit">
            <img src="/icon-arrow.svg" />
          </button>
        </form>
        <div>
          <p>
            <span>--</span>years
          </p>
          <p>
            <span>--</span>months
          </p>
          <p>
            <span>--</span>days
          </p>
        </div>
      </div>
    </main>
  );
}
