export default function OutputDisplay({ children }) {
  return (
    <div className="text-3xl font-bold w-full h-20 p-2 mb-4 flex flex-col justify-end items-end">
      {children}
    </div>
  )
}
