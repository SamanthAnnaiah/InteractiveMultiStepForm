import { useEffect } from "react";
import { MsButtons } from "./MsButtons";

export function Step4form({ sform4, s2, s3, s4, stepclick }) {

    useEffect(
        () => {
            switch (sform4.msuse.totaltype) {
                case "Arcade":
                    if (sform4.msuse.myr === "mo") {
                        sform4.msuse.settotalamount((k) => { k = 0; return (k + sform4.msuse.arcade) });
                    } else {
                        sform4.msuse.settotalamount((k) => { k = 0; return (k + sform4.msuse.arcade * 12) });
                    }
                    sform4.msuse.setcamount(sform4.msuse.totalamount);
                    break;
                case "Advanced":
                    if (sform4.msuse.myr === "mo") {
                        sform4.msuse.settotalamount((k) => { k = 0; return (k + sform4.msuse.advanced) });
                    } else {
                        sform4.msuse.settotalamount((k) => { k = 0; return (k + sform4.msuse.advanced * 12) });
                    }
                    sform4.msuse.setcamount(sform4.msuse.totalamount);
                    break;
                case "Pro":
                    if (sform4.msuse.myr === "mo") {
                        sform4.msuse.settotalamount((k) => { k = 0; return (k + sform4.msuse.pro) });
                    } else {
                        sform4.msuse.settotalamount((k) => { k = 0; return (k + sform4.msuse.pro * 12) });
                    }
                    sform4.msuse.setcamount(sform4.msuse.totalamount);
                    break;
                default:
                    break;
            }

            if (sform4.msuse.aone) {
                sform4.msuse.setcamount((k) => k + sform4.msuse.oservicecost)
            }
            if (sform4.msuse.bone) {
                sform4.msuse.setcamount((k) => k + sform4.msuse.lstorage)
            }
            if (sform4.msuse.cone) {
                sform4.msuse.setcamount((k) => k + sform4.msuse.profiletheme)
            }
            console.log("camount", sform4.msuse.camount);
        }
        ,
        [])

    return (
        <>
            <div className="form1">
                <div className="mt1 hs1">
                    {sform4.m1}
                </div>
                <div className="hs2">
                    {sform4.m2}
                </div>
                <div className="bg3 checkspace rounded1">
                    <div className="buttonspace p2 m3">
                        <div>
                            {sform4.msuse.totaltype} ({sform4.msuse.myr === "mo" ? 'monthly' : 'yearly'})
                            <p className="mt3 pointer fs2">
                                <u className="forbutton2 forbutton3 mt3 pointer fs2" onClick={(e) => stepclick(e, 1)}>Change</u>
                            </p>
                        </div>
                        <div>
                            ${sform4.msuse.totalamount}/<span>{sform4.msuse.myr}</span>
                        </div>
                    </div>
                    <hr />
                    {sform4.msuse.aone && <div className="buttonspace mt2 p2 m3">
                        <div>
                            Online service
                        </div>
                        <div>
                            +$<span>{sform4.msuse.oservicecost}</span>/<span>{sform4.msuse.myr}</span>
                        </div>
                    </div>}
                    {sform4.msuse.bone && <div className="buttonspace mt0 p2 m3">
                        <div>
                            Larger Storage
                        </div>
                        <div>
                            +$<span>{sform4.msuse.lstorage}</span>/<span>{sform4.msuse.myr}</span>
                        </div>
                    </div>}
                    {sform4.msuse.cone && <div className="buttonspace mt0 p2 m3">
                        <div>
                            Customizable profile
                        </div>
                        <div>
                            +$<span>{sform4.msuse.profiletheme}</span>/<span>{sform4.msuse.myr}</span>
                        </div>
                    </div>}
                </div>
                <div className="buttonspace mt2 p2  ">
                    <div>
                        Total (Per {sform4.msuse.myr === "mo" ? 'month' : 'year'})
                    </div>
                    <div>
                        +${sform4.msuse.totalamount +
                            (sform4.msuse.aone ? sform4.msuse.oservicecost : 0) +
                            (sform4.msuse.bone ? sform4.msuse.lstorage : 0) +
                            (sform4.msuse.cone ? sform4.msuse.profiletheme : 0)}
                        /<span>{sform4.msuse.myr}</span>
                    </div>
                </div>
            </div>
            <div>
                <MsButtons s2={s2} s3={s3} s4={s4} thisstep={4} stepclick={stepclick} />
            </div>
        </>
    )
}