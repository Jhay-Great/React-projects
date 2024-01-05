import Nav from "./Nav"

const TopComponents = function({tools}) {
    const {randomNumber, reset, h1, inputValue, changeGame} = tools;

    return (
        <section className="top-component">
            <Nav handleClick={{reset, changeGame}} />
            <h1> {h1} </h1>
        </section>
    )
}

export default TopComponents