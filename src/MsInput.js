import './msstyle.css';
export function MsInput({ intype, min = 0, max = 0, size, refer = null, msval, setmsval }) {

    function Handleinchanger(event) {
        inchanger(event.target.value, min, max, size)
    }

    function inchanger(val1, min, max, size) {
        if ((min === 0 && max === 0)) {
            if (val1.length > size) {
                setmsval('');
            } else {
                setmsval(val1);
            }
        }
    }

    function Handleinfocus(event) {
        infocuser(event.target.value, setmsval);
    }

    function infocuser(val, setmsval) {
        if (val.length === 0) {
            setmsval('');
        }
    }

    function Handleinblur(event) {
        inblurer(event.target.value, setmsval);
    }

    function inblurer(val, setmsval) {
        if (!(val.length)) {
            setmsval(' ');
        }
    }

    return (
        <input className='input-field' type={intype} value={msval} ref={refer} onChange={Handleinchanger} onFocus={Handleinfocus} onBlur={Handleinblur} />
    )
}

