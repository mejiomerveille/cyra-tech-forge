import logo from "@/assets/hero-image.png";

export function TechVisual() {
  return (
    <div
      className="hero-visual relative mx-auto flex aspect-square w-full max-w-[610px] items-center justify-center"
      aria-label="Illustration Cyra Tech"
    >
      <img
        src={logo}
        alt="Cyra Tech — Software, Hardware and IoT"
        className="max-h-[550px] w-full object-contain"
      />
    </div>
  );
}