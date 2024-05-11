import Calendar from './components/common/Calendar.tsx';

function App() {
  return (
    <div>
      <header className="relative z-10">
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="navbar w-full">
              <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-6 w-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="flex-1 justify-end">
                <h1 className="min-w-40 rounded bg-base-200 p-2 text-center text-sm">개인 일정 캘린더</h1>
              </div>
            </div>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu min-h-full w-80 bg-base-200 p-4">
              {/* Sidebar content here */}
              <li>
                <a>그룹 일정 캘린더 1</a>
              </li>
              <li>
                <a>그룹 일정 캘린더 2</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main className="z-1 relative flex-grow">
        <div className="ml-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Calendar />
        </div>
      </main>
    </div>
  );
}

export default App;
