import * as React from "react"
import parse from "html-react-parser"
import styled from "styled-components"
import { Frame, addPropertyControls, ControlType } from "framer"

export function IconSingle(props) {
    const { stroke, fill, svg } = props
    const SvgWrapper = styled.div`
        height: 100%;
        width: 100%;

        svg {
            width: 100%;
            height: 100%;
        }

        path {
            stroke: ${stroke};
            fill: ${fill};
        }
    `

    return (
        <Frame background="none" size="100%">
            <SvgWrapper>{parse(svg)}</SvgWrapper>
        </Frame>
    )
}

IconSingle.defaultProps = {
    height: 24,
    width: 24,
}

addPropertyControls(IconSingle, {
    stroke: {
        title: "Stroke",
        type: ControlType.Color,
        defaultValue: "#000",
    },
    fill: {
        title: "Fill",
        type: ControlType.Color,
        defaultValue: "#00000000",
    },
    svg: {
        title: "SVG Code",
        placeholder: "Paste code here…",
        type: ControlType.String,
        displayTextArea: true,
        defaultValue: `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M5.28075 16.8435H12.2807M5.28075 16.8435V9.84353H19.2807V2.84353H5.28075L19.2807 16.8435H12.2807H5.28075ZM5.28075 16.8435L12.2807 23.8435V16.8435H5.28075Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0"><rect width="24" height="24" fill="white" transform="translate(0.280746 0.843529)"/></clipPath></defs></svg>`,
    },
})
