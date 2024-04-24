import { BackgroundGradientAnimation } from "../../components/ui/background-gradient-animation";

export default function HomePage() {
  const user = localStorage.getItem("user");
  const data = JSON.parse(user as string);
  const name = data.displayName;
  const picture = data.photoURL;
  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };
  return (
    <>
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <img className="rounded w-36 h-36" src={picture} alt="Extra large avatar" />
          <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            Welcome {name}
          </p>
        </div>
      <button
        onClick={handleSignOut}
        className="mt-5 p-2 inline-flex animate-shimmer relative z-50 left-2 items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        SignOut
      </button>
      </BackgroundGradientAnimation>
    </>
  );
}
