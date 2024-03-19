import './msstyle.css';

export function MsButtons({ s2, s3, s4, s5 = false, thisstep = 1, stepclick = null }) {
    return (
        <div className="mt2 buttonspace">
            {(s2 || s3 || s4) ? (<div className="pointer forbutton1" onClick={(e) => stepclick(e, thisstep)}>
                Go Back
            </div>) : (
                <div>

                </div>
            )}
            {(!s5) ? <div className="pointer forbutton2" onClick={(e) => stepclick(e, thisstep)}>
                {s4 ? ('Confirm') : ('Next Step')}
            </div> : (
                <div>
                </div>
            )}
        </div>
    )
}