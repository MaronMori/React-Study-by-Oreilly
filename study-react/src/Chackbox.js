import {useEffect, useState} from "react";

export default function Checkbox() {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        // 次の描画サイクルにズラす
        setTimeout(() => {
            if (checked) {
                alert('チェックが入りました！');
            } else {
                alert('チェックが外れました！');
            }
        }, 50);
    }, [checked]);
    return (
        <div>
            <input type="checkbox" checked={checked} onChange={() => setChecked(checked => !checked)}/>
            {checked ? "checked" : "not checked"}
        </div>
    );
}