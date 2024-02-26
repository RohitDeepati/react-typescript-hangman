const HEAD = (
    <div
        // className="w-[50px] bg-black  h-[50px] rounded-full border-10  border-black absolute top-[50px] right-[-20px] "
        style={{
            width: "50px", height: "50px", borderRadius: "100%", border: "10px solid black", position: "absolute", top: "50px", right: "-20px"
        }}
    />
)

const BODY = (
    <div
        className="w-[10px] bg-black  h-[120px]  absolute top-[100px] right-0 "
    // style={{
    //     width: "10px", height: "100px", background: "black", position: "absolute", top: "100px", right: 0,
    // }}
    />
)

const RIGHT_ARM = (<div className="w-[100px] h-[10px] bg-black absolute top-[150px] right-[-100px] rotate-[-30deg] origin-bottom-left " />

)
const LEFT_ARM = (<div className="w-[100px] h-[10px] bg-black absolute top-[150px] right-[10px] rotate-[30deg] origin-bottom-right " />
)
const RIGHT_LEG = (<div className="w-[100px] h-[10px] bg-black absolute top-[210px] right-[-90px] rotate-[60deg] origin-bottom-left " />

)
const LEFT_LEG = (<div className="w-[100px] h-[10px] bg-black absolute top-[210px] right-0 rotate-[-60deg] origin-bottom-right " />

)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
    numberOfGuess: number
}

export const HangmanDrawing = ({ numberOfGuess }: HangmanDrawingProps) => {
    return (
        <div className="relative"
        >
            {BODY_PARTS.slice(0, numberOfGuess)}
            <div className="h-[50px] w-[10px] bg-black absolute top-0 right-0" />
            <div className="h-[10px] w-[210px] bg-black ml-[120px]"
            />
            <div className="h-[400px] w-[10px] bg-black ml-[120px]" />
            <div className="h-[10px] w-[250px] bg-black" />
        </div>
    )
}