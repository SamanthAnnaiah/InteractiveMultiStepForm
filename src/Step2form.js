import { MsButtons } from "./MsButtons"

export function Step2form({ sform2, s2, s3, s4, stepclick }) {
    function Handlemyrcheck(e) {
        let slider = document.querySelector(".slider");
        const rect = slider.getBoundingClientRect();
        console.log(rect);
        if (sform2.msuse.myr === "mo") {
            sform2.msuse.setmyr(() => "yr");
        } else {
            sform2.msuse.setmyr(() => "mo");
        }
    }

    function Handleplan(e, sform2) {
        e.stopPropagation();
        let elm = e.target;
        let ele = elm.closest('.brd1');
        let aplan = document.querySelector(".Arcade");
        let bplan = document.querySelector(".Advanced");
        let cplan = document.querySelector(".Pro");
        console.log(ele);
        switch (true) {
            case (ele.classList.contains("Arcade")):
                sform2.msuse.settotaltype(cback("Arcade"));
                // ele.classList.add("bg4");
                // bplan.classList.remove("bg4");
                // cplan.classList.remove("bg4");
                sform2.msuse.myr === "mo" ? sform2.msuse.settotalamount(sform2.msuse.arcade) : sform2.msuse.settotalamount(sform2.msuse.arcade * 12);
                break;
            case (ele.classList.contains("Advanced")):
                sform2.msuse.settotaltype(cback("Advanced"));
                // ele.classList.add("bg4");
                // aplan.classList.remove("bg4");
                // cplan.classList.remove("bg4");
                sform2.msuse.myr === "mo" ? sform2.msuse.settotalamount(sform2.msuse.advanced) : sform2.msuse.settotalamount(sform2.msuse.advanced * 12);
                break;
            case (ele.classList.contains("Pro")):
                sform2.msuse.settotaltype(cback("Pro"));
                // ele.classList.add("bg4");
                // aplan.classList.remove("bg4");
                // bplan.classList.remove("bg4");
                sform2.msuse.myr === "mo" ? sform2.msuse.settotalamount(sform2.msuse.pro) : sform2.msuse.settotalamount(sform2.msuse.pro * 12);
                break;
            default:
                break;
        }
        console.log(sform2.msuse.totaltype);

        function cback(namesake) {
            return namesake;
        }
    }

    return (
        <>
            <div className="form1">
                <div className="mt1 hs1">
                    {sform2.m1}
                </div>
                <div className="hs2">
                    {sform2.m2}
                </div>
                <div className="mt2 buttonspace" onClick={(e) => Handleplan(e, sform2)}>
                    <div className={`brd1 w1 pointer h1 Arcade ${sform2.msuse.totaltype === "Arcade" ? 'bg4' : ''}`}>
                        <div>
                            <img src={process.env.PUBLIC_URL + "/icon-arcade.svg"} alt="icon" />
                        </div>
                        <div className="mt2 hs4">
                            Arcade
                        </div>
                        <div className="col3">
                            $<span>{sform2.msuse.myr === "mo" ? sform2.msuse.arcade : sform2.msuse.arcade * 12}</span>/<span>{sform2.msuse.myr}</span>
                        </div>
                        <div className="hs2">
                            2 mths free
                        </div>
                    </div>
                    <div className={`brd1 w1 pointer h1 Advanced ${sform2.msuse.totaltype === "Advanced" ? 'bg4' : ''}`}>
                        <div>
                            <img src={process.env.PUBLIC_URL + "/icon-advanced.svg"} alt="icon" />
                        </div>
                        <div className="mt2 hs4">
                            Advanced
                        </div>
                        <div className="col3">
                            $<span>{sform2.msuse.myr === "mo" ? sform2.msuse.advanced : sform2.msuse.advanced * 12}</span>/<span>{sform2.msuse.myr}</span>
                        </div>
                        <div className="hs2">
                            2 mths free
                        </div>
                    </div>
                    <div className={`brd1 w1 pointer h1 Pro ${sform2.msuse.totaltype === "Pro" ? 'bg4' : ''}`}>
                        <div>
                            <img src={process.env.PUBLIC_URL + "/icon-pro.svg"} alt="icon" />
                        </div>
                        <div className="mt2 hs4">
                            Pro
                        </div>
                        <div className="col3">
                            $<span>{sform2.msuse.myr === "mo" ? sform2.msuse.pro : sform2.msuse.pro * 12}</span>/<span>{sform2.msuse.myr}</span>
                        </div>
                        <div className="hs2">
                            2 mths free
                        </div>
                    </div>
                </div>
                <div className="gridmiddle mt2">
                    <label className="switch" >
                        <input type="checkbox" onClick={(e) => Handlemyrcheck(e)} />
                        <span className="slider"></span>
                    </label>
                    <span className={`p2 hs3 bg1`}>${sform2.msuse.myr === "yr" ? 'Yearly' : 'Monthly'}</span>
                </div>
            </div>
            <div>
                <MsButtons s2={s2} s3={s3} s4={s4} thisstep={2} stepclick={stepclick} />
            </div>
        </>
    )
}
