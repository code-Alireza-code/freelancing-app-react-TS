import { useNavigate, useRouter } from "@tanstack/react-router";

function NotFound() {
  const navigate = useNavigate();
  const router = useRouter();

  const handleBackHome = () => navigate({ replace: true, to: "/" });
  const handleBack = () => {
    if (window.history.length > 1) {
      router.history.back();
    } else {
      navigate({ to: "/" });
    }
  };

  return (
    <div className="flex items-center h-screen justify-center bg-secondary-0 text-secondary-900">
      <div className="max-w-sm flex flex-col items-center justify-center">
        <h1 className="text-2xl sm:text-9xl text-center font-bold">404</h1>
        <h2 className="sm:text-xl font-bold text-secondary-500 mb-4">
          صفحه ای که دنبالش بودید پیدا نشد !
        </h2>
        <div className=" flex gap-x-4">
          <button
            onClick={handleBack}
            className="btn btn--secondary text-center hover:bg-secondary-500 transition-all duration-300"
          >
            برگشت
          </button>
          <button
            onClick={handleBackHome}
            className="btn btn--outline text-center hover:bg-secondary-200 transition-all duration-300"
          >
            خانه
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
