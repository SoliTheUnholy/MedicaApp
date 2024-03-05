import { Spinner } from '@material-tailwind/react';
export default function LoadingPage() {
  return (
    <>
      <div className="font-black text-3xl w-screen h-screen flex flex-col gap-20 justify-center items-center">
        <div className="flex gap-4 justify-center items-center">
          <img className="h-12" src="logo.png" alt="Logo" />
          <h1>Medica</h1>
        </div>
        <Spinner className="block h-12 w-12" color="blue" />
      </div>
    </>
  );
}
