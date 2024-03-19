export default function Menuitemsform({ menuitems, s1, s2, s3, s4 }) {
    let mitems = menuitems.map(
        (item, index) => {
            return (
                <div className="menuitem" key={index}>
                    <p className={`col1 f1 m3 rounded 
                    ${index === 0 ? (s1 && 'bg1') : (index === 1 ? (s2 && 'bg1') : (index === 2 ? s3 && 'bg1' : s4 && 'bg1'))}`}>
                        {item.mnumber}
                    </p>
                    <div>
                        <p className="col1 f2 p1 m2 fs1">{item.mstepnum}</p>
                        <p className="col1 f3 p1 m2 fs2">{item.mstepname}</p>
                    </div>
                </div>
            )
        }
    )
    return (
        mitems
    )
}