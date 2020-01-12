function Joiner(csstype, val1,val2, props){
    return csstype + ":" + ((props.toggle) ? val1: val2) + ";";
}



export {
    Joiner
}