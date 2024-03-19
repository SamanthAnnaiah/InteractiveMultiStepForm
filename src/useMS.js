import { useState } from "react";

export function useMS() {

    let [s1, sets1] = useState(true);
    let [s2, sets2] = useState(false);
    let [s3, sets3] = useState(false);
    let [s4, sets4] = useState(false);
    let [s5, sets5] = useState(false);

    let [mname, setmname] = useState(" ");
    let [memail, setmemail] = useState(" ");
    let [mphone, setmphone] = useState(" ");

    let [myr, setmyr] = useState("mo");
    let [myrcheck, setmyrcheck] = useState(false);

    let [arcade, setarcade] = useState(8);
    let [advanced, setadvanced] = useState(14);
    let [pro, setpro] = useState(24);

    let [oservicecost, setoservicecost] = useState(2);
    let [lstorage, setlstorage] = useState(3);
    let [profiletheme, setprofiletheme] = useState(1);

    let [totaltype, settotaltype] = useState("Arcade");
    let [totalamount, settotalamount] = useState(0);

    let [aone, setaone] = useState(false);
    let [bone, setbone] = useState(false);
    let [cone, setcone] = useState(false);

    let [camount, setcamount] = useState(totalamount);

    let msuse = {
        s1, sets1,
        s2, sets2,
        s3, sets3,
        s4, sets4,
        s5, sets5,
        mname, setmname,
        memail, setmemail,
        mphone, setmphone,
        myr, setmyr,
        myrcheck, setmyrcheck,
        arcade, setarcade,
        advanced, setadvanced,
        pro, setpro,
        oservicecost, setoservicecost,
        lstorage, setlstorage,
        profiletheme, setprofiletheme,
        totaltype, settotaltype,
        totalamount, settotalamount,
        aone, setaone,
        bone, setbone,
        cone, setcone,
        camount, setcamount
    }

    return msuse;
}