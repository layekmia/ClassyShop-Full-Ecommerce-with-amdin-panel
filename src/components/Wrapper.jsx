export default function Wrapper({ children, className = "" }) {
  return (
    <div className={`w-full max-w-[90%] mx-auto ${className}`}>{children}</div>
  );
}
