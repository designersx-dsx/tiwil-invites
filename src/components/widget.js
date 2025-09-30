
import { useEffect, useRef } from "react";

const ElevenLabsWidget = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Custom element add karna
    const widget = document.createElement("elevenlabs-convai");
    widget.setAttribute("agent-id", "agent_0301k6d4tchgfntbp1v4zy6cekd0");

    if (containerRef.current) {
      containerRef.current.appendChild(widget);
    }

    // Script inject karna
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
    script.async = true;
    script.type = "text/javascript";

    document.body.appendChild(script);

    return () => {
      // cleanup jab component unmount ho
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
      document.body.removeChild(script);
    };
  }, []);

  return <div ref={containerRef}></div>;
};

export default ElevenLabsWidget;