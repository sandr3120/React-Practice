const sty2 = { backgroundColor: 'rgba(0, 0, 0, 0.05)' }
const link = "https://en.wikipedia.org/wiki/Cat"

function Footer() {
    return (
        <>
            <div className="push">
                <div className="text-center p-3" style={sty2}> © Copyright 2024: <a class="text-reset fw-bold" href={link}>Wikipedia.org</a>
                </div>
            </div>
        </>)
}

export default Footer