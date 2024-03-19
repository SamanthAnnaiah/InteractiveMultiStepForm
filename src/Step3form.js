import { useEffect } from "react"
import { MsButtons } from "./MsButtons"

export function Step3form({ sform3, s2, s3, s4, stepclick }) {

    useEffect(
        () => {
            if (sform3.msuse.myr === "yr") {
                sform3.msuse.setoservicecost(2 * 12);
                sform3.msuse.setlstorage(3 * 12);
                sform3.msuse.setprofiletheme(1 * 12);
            }
            else {
                sform3.msuse.setoservicecost(2);
                sform3.msuse.setlstorage(3);
                sform3.msuse.setprofiletheme(1);
            }
        }
        ,
        [])

    return (
        <>
            <div className="form1">
                <div className="mt1 hs1">
                    {sform3.m1}
                </div>
                <div className="hs2">
                    {sform3.m2}
                </div>
                <div className="mt2 checkspace">
                    <div className="brd2 m3">
                        <div className="">
                            <input type="checkbox" name="addons" id="" className="step3check aon1"
                                checked={sform3.msuse.aone}
                                onChange={() => {
                                    sform3.msuse.setaone(!sform3.msuse.aone);
                                    console.log("checked");
                                }} />
                        </div>
                        <div className="gitem">
                            <p className="hs1 fs2">Online service</p>
                            <p className="hs2 fs2 mt0">Access to multiplayer games</p>
                        </div>
                        <div className="gitemr hs2 tlf">
                            +$<span>{sform3.msuse.oservicecost}</span>/<span>{sform3.msuse.myr}</span>
                        </div>
                    </div>
                    <div className="brd2 m3">
                        <div className="">
                            <input type="checkbox" name="addons" id="" className="step3check aon2"
                                checked={sform3.msuse.bone}
                                onChange={() => {
                                    sform3.msuse.setbone(!sform3.msuse.bone);
                                    console.log("checked");
                                }} />
                        </div>
                        <div className="gitem">
                            <p className="hs1 fs2">Larger Storage</p>
                            <p className="hs2 fs2 mt0">Extra 1TB of cloud save</p>
                        </div>
                        <div className="gitemr hs2 tlf">
                            +$<span>{sform3.msuse.lstorage}</span>/<span>{sform3.msuse.myr}</span>
                        </div>
                    </div>
                    <div className="brd2 m3">
                        <div className="">
                            <input type="checkbox" name="addons" id="" className="step3check aon3"
                                checked={sform3.msuse.cone}
                                onChange={() => {
                                    sform3.msuse.setcone(!sform3.msuse.cone);
                                    console.log("checked");
                                }} />
                        </div>
                        <div className="gitem">
                            <p className="hs1 fs2">Customizable profile</p>
                            <p className="hs2 fs2 mt0">Custom theme on your profile</p>
                        </div>
                        <div className="gitemr hs2 tlf">
                            +$<span>{sform3.msuse.profiletheme}</span>/<span>{sform3.msuse.myr}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <MsButtons s2={s2} s3={s3} s4={s4} thisstep={3} stepclick={stepclick} />
            </div>
        </>
    )
}