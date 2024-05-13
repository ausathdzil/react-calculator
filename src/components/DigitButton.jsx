import { ACTIONS } from "../lib/ACTIONS";

export default function DigitButton({ dispatch, digit }) {
  return (
    <button
      className="rounded-full border border-zinc-800 bg-zinc-950 hover:bg-zinc-900"
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
}
