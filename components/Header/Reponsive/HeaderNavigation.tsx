import { Col, Row } from "antd";
import { useState } from "react";
import styled from "styled-components";
import HeaderMenu, { IHeaderMenu } from "./HeaderMenu";



function HeaderNavigation() {
    
    const [isHeaderMenuOpen, setIsHeaderMenuOpen] = useState(true)

    const closeHeaderMenu = () => {
        setIsHeaderMenuOpen(false)
    }

    const openHeaderMenu = () => {
        setIsHeaderMenuOpen(true)
    }

    const toggleHeaderMenu = () => {
        setIsHeaderMenuOpen(!isHeaderMenuOpen)
    }

    const iHeaderMenu:IHeaderMenu = {
        isShow: isHeaderMenuOpen,
        closeHeaderMenu: closeHeaderMenu
    }
    return (
        <>
            <Row justify='center' align='middle'>
                <Col xs={23}>
                    <Row justify={"space-between"}>
                        <Col xs={5}> image</Col>
                        <Col xs={15}> search</Col>
                        <Col xs={4}>
                            <div onClick={toggleHeaderMenu}>x</div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {isHeaderMenuOpen && <StyledOverlay onClick={closeHeaderMenu}></StyledOverlay> }
            <HeaderMenu {...iHeaderMenu} />
        </>
    );
}
const StyledOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0000004f;
`

export default HeaderNavigation;