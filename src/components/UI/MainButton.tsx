import React, {HTMLProps} from 'react'

const MainButton = (props: HTMLProps<HTMLElement>) => {
    return (
        <button className={"mainBtn"}>
            {props.children}
        </button>
    )
}

export default MainButton
