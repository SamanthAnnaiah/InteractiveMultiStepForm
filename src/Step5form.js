import { MsButtons } from "./MsButtons";

export function Step5form({ sform5, s2, s3, s4, s5, stepclick }) {
    return (
        <>
            <div className="form2">
                <div>
                    <img src={process.env.PUBLIC_URL + "/icon-thank-you.svg"} alt="icon" height={"63px"} width={"63px"} />
                </div>
                <div className="mt2 hs1">
                    {sform5.m1}
                </div>
                <div className="mt1 hs2 tlc">
                    {sform5.m2}
                </div>
            </div>
            <div>
                <MsButtons s2={s2} s3={s3} s4={s4} s5={s5} thisstep={5} stepclick={stepclick} />
            </div>
        </>
    )
}