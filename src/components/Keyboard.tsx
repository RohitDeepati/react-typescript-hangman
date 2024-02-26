const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]

type HangmanKeyboardProps = {
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
    disabled?: boolean
}

export const Keyboard = ({ activeLetters, inactiveLetters, addGuessedLetter, disabled = false }: HangmanKeyboardProps) => {
    return (
        <div style={{ display: "grid", gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))', gap: '.5rem' }}>
            {KEYS.map((key) => {
                const isActive = activeLetters.includes(key)
                const isInactive = inactiveLetters.includes(key)
                return <button
                    onClick={() => addGuessedLetter(key)}
                    className={`w-full border-2 border-black rounded-md aspect-square text-3xl uppercase p-2 font-bold cursor-pointer text-black hover:bg-blue-500 hover:text-white hover:border-white focus:bg-blue-600 focus:text-bl focus:border-gray-500 active:bg-blue-600 acitive:text-white 
                            ${isActive ? 'bg-red-500 text-white' : ''} 
                            ${isInactive ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={isActive || isInactive || disabled}
                    key={key}
                >
                    {key}
                </button>
            })}
        </div>
    )
}
