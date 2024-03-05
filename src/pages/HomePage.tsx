import { Button, IconButton, Input } from '@material-tailwind/react';

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col gap-4 p-5 font-sans">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="avatar"
              className="inline-block h-12 w-12 !rounded-full  object-cover object-center"
            />
            <div className="flex flex-col items-center">
              <span className="text-gray-600 text-sm">Good Morning!✋</span>
              <span className="font-bold">Andrew Ainsley</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              className="flex items-center justify-center select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20"
              type="button"
            >
              <span className="transform">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                  <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
                </svg>
              </span>
            </button>
            <button
              className="flex items-center justify-center select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20"
              type="button"
            >
              <span className="transform">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                  <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div className="w-full">
          <Input
            className="border-transparent rounded-3xl !bg-gray-200 focus:rounded-[7px]"
            label="Search"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path d="M440-120v-240h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160v-240h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z" />
              </svg>
            }
          />
        </div>
        <div className="">
          <img className="rounded-3xl w-full shadow-xl" src="add.png" alt="" />
        </div>
        <div className="flex justify-between">
          <span className="text-lg font-bold">Doctor Speciality</span>
          <button className="text-lg font-bold text-blue-700">See all</button>
        </div>
        <div className="flex flex-wrap gap-5 justify-center">
          <div className="flex flex-col gap-1 items-center justify-center">
            <IconButton className="rounded-full max-h-14 max-w-14 h-14 w-14 bg-gray-200 fill-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path d="M300-840q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 5-.5 10t-.5 10h-80q1-5 1-10v-10q0-60-40-100t-100-40q-47 0-87 26.5T518-666h-76q-15-41-55-67.5T300-760q-60 0-100 40t-40 100v10q0 5 1 10H81q0-5-.5-10t-.5-10q0-94 63-157t157-63Zm-88 480h112q32 31 70 67t86 79q48-43 86-79t70-67h113q-38 42-90 91T538-158l-58 52-58-52q-69-62-120.5-111T212-360Zm230 40q13 0 22.5-7.5T478-347l54-163 35 52q5 8 14 13t19 5h320v-80H623l-69-102q-6-9-15.5-13.5T518-640q-13 0-22.5 7.5T482-613l-54 162-34-51q-5-8-14-13t-19-5H40v80h297l69 102q6 9 15.5 13.5T442-320Zm38-167Z" />
              </svg>
            </IconButton>
            <span className="font-semibold text-xs">ECG</span>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center">
            <IconButton className="rounded-full max-h-14 max-w-14 h-14 w-14 bg-gray-200 fill-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path d="M300-840q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 5-.5 10t-.5 10h-80q1-5 1-10v-10q0-60-40-100t-100-40q-47 0-87 26.5T518-666h-76q-15-41-55-67.5T300-760q-60 0-100 40t-40 100v10q0 5 1 10H81q0-5-.5-10t-.5-10q0-94 63-157t157-63Zm-88 480h112q32 31 70 67t86 79q48-43 86-79t70-67h113q-38 42-90 91T538-158l-58 52-58-52q-69-62-120.5-111T212-360Zm230 40q13 0 22.5-7.5T478-347l54-163 35 52q5 8 14 13t19 5h320v-80H623l-69-102q-6-9-15.5-13.5T518-640q-13 0-22.5 7.5T482-613l-54 162-34-51q-5-8-14-13t-19-5H40v80h297l69 102q6 9 15.5 13.5T442-320Zm38-167Z" />
              </svg>
            </IconButton>
            <span className="font-semibold text-xs">ECG</span>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center">
            <IconButton className="rounded-full max-h-14 max-w-14 h-14 w-14 bg-gray-200 fill-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path d="M300-840q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 5-.5 10t-.5 10h-80q1-5 1-10v-10q0-60-40-100t-100-40q-47 0-87 26.5T518-666h-76q-15-41-55-67.5T300-760q-60 0-100 40t-40 100v10q0 5 1 10H81q0-5-.5-10t-.5-10q0-94 63-157t157-63Zm-88 480h112q32 31 70 67t86 79q48-43 86-79t70-67h113q-38 42-90 91T538-158l-58 52-58-52q-69-62-120.5-111T212-360Zm230 40q13 0 22.5-7.5T478-347l54-163 35 52q5 8 14 13t19 5h320v-80H623l-69-102q-6-9-15.5-13.5T518-640q-13 0-22.5 7.5T482-613l-54 162-34-51q-5-8-14-13t-19-5H40v80h297l69 102q6 9 15.5 13.5T442-320Zm38-167Z" />
              </svg>
            </IconButton>
            <span className="font-semibold text-xs">ECG</span>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center">
            <IconButton className="rounded-full max-h-14 max-w-14 h-14 w-14 bg-gray-200 fill-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path d="M300-840q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 5-.5 10t-.5 10h-80q1-5 1-10v-10q0-60-40-100t-100-40q-47 0-87 26.5T518-666h-76q-15-41-55-67.5T300-760q-60 0-100 40t-40 100v10q0 5 1 10H81q0-5-.5-10t-.5-10q0-94 63-157t157-63Zm-88 480h112q32 31 70 67t86 79q48-43 86-79t70-67h113q-38 42-90 91T538-158l-58 52-58-52q-69-62-120.5-111T212-360Zm230 40q13 0 22.5-7.5T478-347l54-163 35 52q5 8 14 13t19 5h320v-80H623l-69-102q-6-9-15.5-13.5T518-640q-13 0-22.5 7.5T482-613l-54 162-34-51q-5-8-14-13t-19-5H40v80h297l69 102q6 9 15.5 13.5T442-320Zm38-167Z" />
              </svg>
            </IconButton>
            <span className="font-semibold text-xs">ECG</span>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center">
            <IconButton className="rounded-full max-h-14 max-w-14 h-14 w-14 bg-gray-200 fill-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path d="M300-840q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 5-.5 10t-.5 10h-80q1-5 1-10v-10q0-60-40-100t-100-40q-47 0-87 26.5T518-666h-76q-15-41-55-67.5T300-760q-60 0-100 40t-40 100v10q0 5 1 10H81q0-5-.5-10t-.5-10q0-94 63-157t157-63Zm-88 480h112q32 31 70 67t86 79q48-43 86-79t70-67h113q-38 42-90 91T538-158l-58 52-58-52q-69-62-120.5-111T212-360Zm230 40q13 0 22.5-7.5T478-347l54-163 35 52q5 8 14 13t19 5h320v-80H623l-69-102q-6-9-15.5-13.5T518-640q-13 0-22.5 7.5T482-613l-54 162-34-51q-5-8-14-13t-19-5H40v80h297l69 102q6 9 15.5 13.5T442-320Zm38-167Z" />
              </svg>
            </IconButton>
            <span className="font-semibold text-xs">ECG</span>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center">
            <IconButton className="rounded-full max-h-14 max-w-14 h-14 w-14 bg-gray-200 fill-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path d="M300-840q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 5-.5 10t-.5 10h-80q1-5 1-10v-10q0-60-40-100t-100-40q-47 0-87 26.5T518-666h-76q-15-41-55-67.5T300-760q-60 0-100 40t-40 100v10q0 5 1 10H81q0-5-.5-10t-.5-10q0-94 63-157t157-63Zm-88 480h112q32 31 70 67t86 79q48-43 86-79t70-67h113q-38 42-90 91T538-158l-58 52-58-52q-69-62-120.5-111T212-360Zm230 40q13 0 22.5-7.5T478-347l54-163 35 52q5 8 14 13t19 5h320v-80H623l-69-102q-6-9-15.5-13.5T518-640q-13 0-22.5 7.5T482-613l-54 162-34-51q-5-8-14-13t-19-5H40v80h297l69 102q6 9 15.5 13.5T442-320Zm38-167Z" />
              </svg>
            </IconButton>
            <span className="font-semibold text-xs">ECG</span>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center">
            <IconButton className="rounded-full max-h-14 max-w-14 h-14 w-14 bg-gray-200 fill-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path d="M300-840q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 5-.5 10t-.5 10h-80q1-5 1-10v-10q0-60-40-100t-100-40q-47 0-87 26.5T518-666h-76q-15-41-55-67.5T300-760q-60 0-100 40t-40 100v10q0 5 1 10H81q0-5-.5-10t-.5-10q0-94 63-157t157-63Zm-88 480h112q32 31 70 67t86 79q48-43 86-79t70-67h113q-38 42-90 91T538-158l-58 52-58-52q-69-62-120.5-111T212-360Zm230 40q13 0 22.5-7.5T478-347l54-163 35 52q5 8 14 13t19 5h320v-80H623l-69-102q-6-9-15.5-13.5T518-640q-13 0-22.5 7.5T482-613l-54 162-34-51q-5-8-14-13t-19-5H40v80h297l69 102q6 9 15.5 13.5T442-320Zm38-167Z" />
              </svg>
            </IconButton>
            <span className="font-semibold text-xs">ECG</span>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center">
            <IconButton className="rounded-full max-h-14 max-w-14 h-14 w-14 bg-gray-200 fill-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path d="M300-840q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 5-.5 10t-.5 10h-80q1-5 1-10v-10q0-60-40-100t-100-40q-47 0-87 26.5T518-666h-76q-15-41-55-67.5T300-760q-60 0-100 40t-40 100v10q0 5 1 10H81q0-5-.5-10t-.5-10q0-94 63-157t157-63Zm-88 480h112q32 31 70 67t86 79q48-43 86-79t70-67h113q-38 42-90 91T538-158l-58 52-58-52q-69-62-120.5-111T212-360Zm230 40q13 0 22.5-7.5T478-347l54-163 35 52q5 8 14 13t19 5h320v-80H623l-69-102q-6-9-15.5-13.5T518-640q-13 0-22.5 7.5T482-613l-54 162-34-51q-5-8-14-13t-19-5H40v80h297l69 102q6 9 15.5 13.5T442-320Zm38-167Z" />
              </svg>
            </IconButton>
            <span className="font-semibold text-xs">ECG</span>
          </div>
        </div>
        <div className="flex justify-between">
          <span className="text-lg font-bold">Top Doctors</span>
          <button className="text-lg font-bold text-blue-700">See all</button>
        </div>
        <div className="font-bold flex gap-3 overflow-x-scroll ">
          <Button className="rounded-full bg-blue-700">All</Button>
          <Button variant="outlined" className="rounded-full border-blue-700 text-blue-700">
            General
          </Button>
          <Button variant="outlined" className="rounded-full border-blue-700 text-blue-700">
            Dentist
          </Button>
          <Button variant="outlined" className="rounded-full border-blue-700 text-blue-700">
            Nutritionist
          </Button>
        </div>
      </div>
    </>
  );
}
