import { Button, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

interface CategoryItem {
    link: string,
    component: any
}

export interface IHeaderMenu {
    isShowHeaderMenu: boolean,
}

interface IHeaderCategories {
    
}

function Header() {

    const router = useRouter();
    const [pathName,setPathName] = useState(router.pathname)

    return (
        <StyledHeader>
            {/* navigation for mobile */}
            {/* <HeaderNavigation /> */}

            <Row justify={"center"} align={"middle"}>
                <Col sm={23}>
                    <Row justify={"space-between"}>
                        <Col sm={10}>
                            <ImageSwapper>
                                <Image width={100} height={50} src='https://mogi.vn/content/Images/logo.svg' alt="logo" />
                            </ImageSwapper>
                        </Col>
                        <Col sm={14}>
                            <StyledCategories>
                                <StyledCategoryItem>
                                    <StyledLink href={'/a'}>Tìm mua</StyledLink>
                                </StyledCategoryItem>
                                <StyledCategoryItem>
                                    <StyledLink href={'/b'}>Tìm thuê</StyledLink>
                                </StyledCategoryItem>
                                <StyledCategoryItem>
                                    <StyledLink href={'/c'}>Giá nhà đất</StyledLink>
                                </StyledCategoryItem>
                                <StyledCategoryItem>
                                    <StyledLink href={'/d'}>Hỏi đáp</StyledLink>
                                </StyledCategoryItem>
                                <StyledCategoryItem>
                                    <StyledLink href={'/e'}>Môi giới</StyledLink>
                                </StyledCategoryItem>
                                <StyledCategoryItem>
                                    <StyledLink href={'/f'}>Dự án</StyledLink>
                                </StyledCategoryItem>
                                <StyledCategoryItem>
                                    <StyledLink href={'/login'}>Đăng nhập</StyledLink>
                                </StyledCategoryItem>
                                <StyledCategoryItem>
                                    <StyledButton type="primary" ghost size="large">Đăng tin</StyledButton>
                                </StyledCategoryItem>
                            </StyledCategories>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </StyledHeader>
    );
}

const ImageSwapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`

const StyledHeader = styled.div`
    box-shadow: 0 0px 6px 0 rgb(70 80 110 / 30%);
`

const StyledCategories = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    justify-content: end;
`

const StyledCategoryItem = styled.li`
    display: flex;
    align-items: center;
`

const StyledLink = styled(Link)`
    margin: 15px 0 15px 15px;
    display: block;
`
const StyledButton = styled(Button)`
    margin: 15px 0 15px 15px;
    display: block;
`
export default Header;