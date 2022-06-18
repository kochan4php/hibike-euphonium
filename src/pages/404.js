import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  return (
    <section className="min-h-screen bg-slate-800">
      <div className="min-h-screen flex-col flex items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-medium mb-4">
          404 Not Found this URL :(
        </h1>
        <button
          className="px-7 py-1.5 rounded bg-slate-900 text-slate-5 focus:ring focus:ring-sky-500 hover:border-sky-500 border-2 border-transparent transition-all duration-300 selection:bg-orange-500 selection:text-orange-900"
          onClick={() => router.push("/")}
        >
          Back to Home
        </button>
      </div>
    </section>
  );
};

export default NotFound;
