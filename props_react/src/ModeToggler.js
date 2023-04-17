function ModeToggler() {
    let darkModeOn = false;
    const darkMode = <h1>Dark Mode is on</h1>
    const lightMode = <h1>Ligh Mode is one</h1>

    function handleClick() {
        darkModeOn = !darkModeOn;
        if (darkModeOn) {
            console.log("Dark mode")
        } else {
            console.log("light mode");
        }
    }


    return (
        <div>
            {darkModeOn ? darkMode : lightMode}
            <button onClick={handleClick}>
                Click me
            </button>
        </div>
    )
}

export default ModeToggler;