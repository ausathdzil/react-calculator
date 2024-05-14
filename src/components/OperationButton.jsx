import { ACTIONS } from "../lib/ACTIONS";

export default function DigitButton({ dispatch, operation }) {
  return (
    <button
      className="pt-1 pb-1 rounded-full bg-cyan-400 hover:bg-cyan-600"
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
}
