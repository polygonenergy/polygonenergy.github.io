import { useEffect } from "react";

const Work = () => {
  useEffect(() => {
    // Redirect to the Market Research Typeform
    window.location.replace("https://lungelo1.typeform.com/report/AYeION/VssGK9eMldImEgc5");
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <p className="text-muted-foreground">Redirecting to Market Research…</p>
    </main>
  );
};

export default Work;
