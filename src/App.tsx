import { Calendar } from './components/common/Calendar.tsx'; 

function App() {
  return (
    <div>
      <header className="relative z-10">
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
              <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar">
                  <div className="flex-none lg:hidden">
                    <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                  </div> 
                  <div className="flex-1">
                    <h1 className="p-2 min-w-40 text-center base-200">개인 일정 캘린더</h1>
                  </div>
                </div>
              </div> 
              <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80 min-h-full bg-base-200">
                  {/* Sidebar content here */}
                  <li><a>그룹 일정 캘린더 1</a></li>
                  <li><a>그룹 일정 캘린더 2</a></li>
                </ul>
              </div>
        </div>
      </header>
      <main className="flex-grow relative z-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded px-4 p-6 sm:px-0">
              <Calendar />
          </div>
        </div>
      </main>
    </div>
    
  );
}

export default App;
