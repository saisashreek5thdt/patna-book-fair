import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";

function App() {
  useEffect(() => {
    // List of scripts to include
    const scripts = [
      "assets/vendor/swiper/swiper-bundle.min.js",
      "assets/vendor/splide/splide.min.js",
      "assets/vendor/slim-select/slimselect.min.js",
      "assets/vendor/fslightbox/fslightbox.js",
      "assets/vendor/splide/splide-extension-auto-scroll.min.js",
      "assets/vendor/lenis/lenis.min.js",
      "assets/vendor/splittype/index.min.js",
      "assets/vendor/gsap/gsap.min.js",
      "assets/vendor/gsap/gsap-scroll-trigger.min.js",
      "assets/js/mainEvent.js",
      "assets/js/countdown.js",
    ];

    // Function to dynamically load a script
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () =>
          reject(new Error(`Failed to load script: ${src}`));
        document.body.appendChild(script);
      });
    };

    // Load all scripts sequentially
    const loadScripts = async () => {
      try {
        for (const src of scripts) {
          await loadScript(src);
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadScripts();

    // Cleanup function
    return () => {
      scripts.forEach((src) => {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
