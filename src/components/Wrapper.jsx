export default function Wrapper({ children }) {
  return (
    <div className="w-52 mt-4 p-2 rounded-3xl border border-zinc-800 bg-zinc-950">
      {children}
    </div>
  )
}
