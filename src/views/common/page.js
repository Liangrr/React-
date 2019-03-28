import React from 'react';
import Hello from '../base/helloword'
import Install from '../base/install'
import JsxIntroduce from '../base/jsxIntroduce'

//props接受传值
const page = (props) => {
    let obj = props.obj;
    return (
    <div>
        {obj.hello ? <Hello/> : null}
        {obj.install ? <Install/> : null}
        {obj.jsxIntroduce ? <JsxIntroduce/> : null}
    </div>)
}

export default page;