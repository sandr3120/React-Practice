const deco = {
    color: 'firebrick'
}
function Props(props) {
    return <li className='list' style={deco}>{props.clr}</li>
}

export default Props