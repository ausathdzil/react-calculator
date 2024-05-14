import { useReducer } from "react";
import Wrapper from "./components/Wrapper";
import OutputDisplay from "./components/OutputDisplay";
import ButtonWrapper from "./components/ButtonWrapper";
import DigitButton from "./components/DigitButton";
import OperationButton from "./components/OperationButton";
import { ACTIONS } from "./lib/ACTIONS";
import { reducer, formatOperand } from "./lib/calc-functions";

export default function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <Wrapper>
      <OutputDisplay>
        {formatOperand(previousOperand)}
        {operation}
        {formatOperand(currentOperand)}
      </OutputDisplay>

      <div className="flex justify-end m-3"></div>

      <div className="flex justify-center items-center">
        <hr className="w-[90%] border-t-zinc-800" />
      </div>

      <ButtonWrapper>
        <button
          className="rounded-full bg-emerald-400 hover:bg-emerald-600 col-span-2"
          onClick={() => dispatch({ type: ACTIONS.CLEAR })}
        >
          C
        </button>

        <button
          className="rounded-full bg-rose-600 hover:bg-rose-00"
          onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>
          <p className="hover:text-zinc-400">del</p>
        </button>

        <OperationButton
          operation="÷"
          dispatch={dispatch}
        />

        <DigitButton
          digit="7"
          dispatch={dispatch}
        />
        <DigitButton
          digit="8"
          dispatch={dispatch}
        />
        <DigitButton
          digit="9"
          dispatch={dispatch}
        />
        <OperationButton
          operation="×"
          dispatch={dispatch}
        />

        <DigitButton
          digit="4"
          dispatch={dispatch}
        />
        <DigitButton
          digit="5"
          dispatch={dispatch}
        />
        <DigitButton
          digit="6"
          dispatch={dispatch}
        />
        <OperationButton
          operation="-"
          dispatch={dispatch}
        />

        <DigitButton
          digit="1"
          dispatch={dispatch}
        />
        <DigitButton
          digit="2"
          dispatch={dispatch}
        />
        <DigitButton
          digit="3"
          dispatch={dispatch}
        />
        <OperationButton
          operation="+"
          dispatch={dispatch}
        />

        <button
          className="rounded-full border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 col-span-2"
          onClick={() =>
            dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: "0" } })
          }
        >
          {"0"}
        </button>
        <DigitButton
          digit="."
          dispatch={dispatch}
        />
        <button
          className="rounded-full bg-cyan-400 hover:bg-cyan-600"
          onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
        >
          =
        </button>
      </ButtonWrapper>
    </Wrapper>
  );
}
