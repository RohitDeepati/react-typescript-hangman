type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
    reveal?: boolean
}

export const HangmanWord = ({ guessedLetters, wordToGuess, reveal = false }: HangmanWordProps) => {

    return (
        <div className="flex gap-1 text-8xl font-bold uppercase font-mono ">
            {wordToGuess.split("").map((letter, index) => (
                <span className="border-b-4 border-black border-solid" key={index}>
                    <span className={`${guessedLetters.includes(letter) || reveal ? "" : " invisible"}
                    ${!guessedLetters.includes(letter) && reveal ? "text-red-500" : "text-black"}`}
                    >
                        {letter}</span>

                </span>
            ))}
        </div>
    )
}