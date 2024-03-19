export function step1logic(cbutton, thisstep, msuse) {
    if (cbutton.classList.contains("forbutton2") && thisstep === 1) {

        msuse.sets1(false);
        msuse.sets2(true);
        msuse.sets3(false);
        msuse.sets4(false);
        msuse.sets5(false);
    }
}

export function step2logic(cbutton, thisstep, msuse) {
    if (thisstep === 2) {
        if (cbutton.classList.contains("forbutton2")) {
            msuse.sets1(false);
            msuse.sets2(false);
            msuse.sets3(true);
            msuse.sets4(false);
            msuse.sets5(false);
        }
        else {
            if (cbutton.classList.contains("forbutton1")) {
                msuse.sets1(true);
                msuse.sets2(false);
                msuse.sets3(false);
                msuse.sets4(false);
                msuse.sets5(false);
            }
        }
    }
}

export function step3logic(cbutton, thisstep, msuse) {
    if (thisstep === 3) {
        if (cbutton.classList.contains("forbutton2")) {
            msuse.sets1(false);
            msuse.sets2(false);
            msuse.sets3(false);
            msuse.sets4(true);
            msuse.sets5(false);
        }
        else {
            if (cbutton.classList.contains("forbutton1")) {
                msuse.sets1(false);
                msuse.sets2(true);
                msuse.sets3(false);
                msuse.sets4(false);
                msuse.sets5(false);
            }
        }
    }
}

export function step4logic(cbutton, thisstep, msuse) {
    if (thisstep === 4) {
        if (cbutton.classList.contains("forbutton2")) {
            msuse.sets1(false);
            msuse.sets2(false);
            msuse.sets3(false);
            msuse.sets4(false);
            msuse.sets5(true);
        }
        else {
            if (cbutton.classList.contains("forbutton1")) {
                msuse.sets1(false);
                msuse.sets2(false);
                msuse.sets3(true);
                msuse.sets4(false);
                msuse.sets5(false);
            }
        }
    }
}

export function step5logic(cbutton, thisstep, msuse) {
    if (thisstep === 2) {
        if (cbutton.classList.contains("forbutton2")) {
            msuse.sets1(false);
            msuse.sets2(false);
            msuse.sets3(false);
            msuse.sets4(false);
            msuse.sets5(true);
        }
        else {
            if (cbutton.classList.contains("forbutton1")) {
                msuse.sets1(false);
                msuse.sets2(false);
                msuse.sets3(false);
                msuse.sets4(false);
                msuse.sets5(false);
            }
        }
    }
}