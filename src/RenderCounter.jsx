import React from "react"

const RenderCounter = () => {
    const rerenderCounter = React.useRef(0)
    rerenderCounter.current += 1
    console.log(rerenderCounter.current)

    return <></>;
}

  export default RenderCounter