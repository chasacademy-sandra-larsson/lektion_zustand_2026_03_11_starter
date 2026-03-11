

import { useCounterStore } from "../store/counterStore"

export default function Counter() {

// Selektor - hämtar bara den data som komponenten behöver
const count = useCounterStore((state) => state.count);
const increment = useCounterStore((state) => state.increment);
const decrement = useCounterStore((state) => state.decrement);
const reset = useCounterStore((state) => state.reset);


    return (
        <>
            <h2>{ count}</h2>
            <button onClick={increment}>Öka</button>
            <button onClick={decrement}>Minska</button>
            <button onClick={reset}>Nollställ</button>
        </>
    )

}