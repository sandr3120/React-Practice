const deco = {
    color: 'firebrick'
}
function App(props) {
    return <li style={deco}>{props.clr}</li>
}

export default App