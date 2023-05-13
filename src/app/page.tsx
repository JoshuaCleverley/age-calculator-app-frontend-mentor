export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-screen bg-neutral-200">
      <div className="flex flex-col w-1/2 justify-center items-center p-10 pr-14 rounded-t-xl rounded-bl-xl rounded-br-[10rem] bg-neutral-100">
        <form className="flex flex-col w-full">
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
            <span className="text-primary text-[4.3rem] mr-1">38</span>
            years
          </p>
          <p className="-mt-8">
            <span className="text-primary text-[4.3rem] mr-1">3</span>
            months
          </p>
          <p className="-mt-8">
            <span className="text-primary text-[4.3rem] mr-1">26</span>
            days
          </p>
        </div>
      </div>
    </main>
  );
}
