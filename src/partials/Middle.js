import { useState } from "react"

const link = "https://en.wikipedia.org/wiki/Cat"

function Middle() {
    const [num,setNum] = useState(0)
    return (
        <>
        <p>The cat (<em>Felis catus</em>), also referred to as domestic cat or house cat, is a small domesticated carnivorous mammal. 
        It is the only domesticated species of the family Felidae. 
        Advances in archaeology and genetics have shown that the domestication of the cat occurred in the Near East around 7500 BC.
        It was long thought that the domestication of the cat began in ancient Egypt, where cats were venerated from around 3100 BC.
        However, the earliest known indication for the taming of an African wildcat was excavated close by a human Neolithic grave 
        in Shillourokambos, southern Cyprus, dating to about 7500–7200 BC.</p>
        <figure>
        <figcaption className="blockquote-footer">
        Read more at: <cite title="Wikipedia">{link}</cite>
        </figcaption>
        </figure>
        <div class="card text-center">
            <div class="card-body">
                <p>Purr Counter: <span class="badge rounded-pill text-bg-warning">{num}</span></p>
                    <div class="card-footer btn-toolbar justify-content-center" role="toolbar" aria-label="Toolbar with button groups">
                        <div class="btn-group me-2" role="group" aria-label="First group">
                            <button type="button" className="btn btn-outline-success btn-sm" onClick={()=>setNum(num+1)}>+ Up</button>
                            </div>
                            <div class="btn-group me-2" role="group" aria-label="Second group">
                            <button type="button" className="btn btn-outline-danger btn-sm" onClick={()=>setNum(num-1)}>- Down</button>
                        </div>
                    </div>
            </div>
        </div>
        </>
    )
}

export default Middle