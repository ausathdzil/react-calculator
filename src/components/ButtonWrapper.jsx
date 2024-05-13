export default function ButtonWrapper({ children }) {
  return (
    <div className="text-lg mt-4 mb-2 p-2 w-full grid grid-cols-4 grid-rows-5 gap-1">
      {children}
    </div>
  );
}
