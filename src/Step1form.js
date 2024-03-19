import { MsButtons } from "./MsButtons";
import { MsInput } from "./MsInput";

export function Step1form({ sform1, s2, s3, s4, stepclick }) {
    return (
        <>
            <div className="form1">
                <div className="mt1 hs1">
                    {sform1.m1}
                </div>
                <div className="hs2">
                    {sform1.m2}
                </div>
                <div className="mt1">
                    <p className="hs3">{sform1.fn1}</p>
                    <p><MsInput intype={"text"} size={30} msval={sform1.mname} setmsval={sform1.setmname} /></p>
                </div>
                <div className="mt1">
                    <p className="hs3">{sform1.fn2}</p>
                    <p><MsInput intype={"text"} size={30} msval={sform1.memail} setmsval={sform1.setmemail} /></p>
                </div>
                <div className="mt1">
                    <p className="hs3">{sform1.fn3}</p>
                    <p><MsInput intype={"text"} size={10} msval={sform1.mphone} setmsval={sform1.setmphone} /></p>
                </div>
            </div>
            <MsButtons s2={s2} s3={s3} s4={s4} thisstep={1} stepclick={stepclick} />
        </>
    );
}