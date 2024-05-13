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
        <div className="text-sm font-normal">
          {formatOperand(previousOperand)} {operation}
        </div>
        <div>{formatOperand(currentOperand)}</div>
      </OutputDisplay>

      <div className="flex justify-end m-3">
        <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>
          <p className="hover:text-zinc-400">del</p>
        </button>
      </div>

      <div className="flex justify-center items-center">
        <hr className="w-[90%] border-t-zinc-800" />
      </div>

      <ButtonWrapper>
        <button
          className="rounded-full bg-emerald-400 hover:bg-emerald-600"
          onClick={() => dispatch({ type: ACTIONS.CLEAR })}
        >
          C
        </button>
        <button className="rounded-full bg-emerald-400 hover:bg-emerald-600">
          ()
        </button>
        <button className="rounded-full bg-emerald-400 hover:bg-emerald-600">
          %
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

        <button className="rounded-full border border-zinc-800 bg-zinc-950 hover:bg-zinc-800">
          +/-
        </button>
        <DigitButton
          digit="0"
          dispatch={dispatch}
        />
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
