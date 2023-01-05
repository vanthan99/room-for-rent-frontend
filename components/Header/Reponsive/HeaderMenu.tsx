import { CloseOutlined } from "@ant-design/icons";
import { Button, Col, Row, Space } from "antd";
import Link from "next/link";
import React, { FunctionComponent } from "react";
import styled from "styled-components";
import styles from './HeaderMenu.module.css';

export interface IHeaderMenu {
    isShow: boolean;
    closeHeaderMenu: any
}

const HeaderMenu = (iHeaderMenu:IHeaderMenu) => {
    const {isShow, closeHeaderMenu} = iHeaderMenu

    let headerMenuClasses = ["headerMenu"];

    if(isShow) {
        headerMenuClasses = ["headerMenu","open"];
    }
    
    return (
        <div id="headerMenu" className={headerMenuClasses.join(' ')}>
            <Row justify='center' align='middle'>
                <Col xs={23}>
                    <Row justify='end' align='middle'>
                        <Col>
                            <StyledCloseButton onClick={closeHeaderMenu}>
                                <CloseOutlined />
                            </StyledCloseButton>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24}>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginBottom: '20px',
                            }}>

                                <div style={{
                                    width: 'calc(50% - 8px)',
                                }}>
                                    <Button style={{width:'100%'}} size="large" type="primary" ghost>Đăng Nhập</Button>
                                </div>
                                <div style={{
                                    width: 'calc(50% - 8px)',
                                }}>
                                    <Button style={{width:'100%'}}  size="large" type="primary">Đăng Ký</Button>
                                </div>
                            </div>
                        </Col>
                        <Col xs={24}>
                            <StyledUl>
                                <StyledLi>
                                    <StyledHeaderMenuItem>
                                        <div>
                                            <div>icon</div>
                                            <div>text</div>
                                        </div>
                                    </StyledHeaderMenuItem>
                                </StyledLi>
                                <StyledLi>
                                    <StyledHeaderMenuItem>
                                        <div>
                                            <div>icon</div>
                                            <div>text</div>
                                        </div>
                                    </StyledHeaderMenuItem>
                                </StyledLi>
                                <StyledLi>
                                    <StyledHeaderMenuItem>
                                        <div>
                                            <div>icon</div>
                                            <div>text</div>
                                        </div>
                                    </StyledHeaderMenuItem>
                                </StyledLi>
                            </StyledUl>
                        </Col>
                    </Row>
                </Col>
            </Row>
           
        </div>
    );
}



const StyledHeaderMenuItem = styled.div`
    
`

const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const StyledLi = styled.li`
    width: calc(50% - 8px);
    background-color: #fff;
    border-radius: 8px;
    margin: 4px 0;
    box-shadow: 0 2px 6px rgb(70 80 110 / 30%);

    padding: 8px;
    min-height: 70px;
    display: flex;
    justify-content: start;
    align-items: center;
`

const StyledCloseButton = styled.div`
    padding: 10px 0;
    font-size: 20px;
`

export default HeaderMenu;