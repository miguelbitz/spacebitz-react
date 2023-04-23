import { FooterStyle, IconDiv } from "./FooterStyle"
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";



export default function Footer(props) {

    const [isFooterVisible, setIsFooterVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const fullHeight = document.body.offsetHeight;
            const scrollHeight = window.pageYOffset;
            if (windowHeight + scrollHeight >= fullHeight) {
                setIsFooterVisible(true);
            } else {
                setIsFooterVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])


    console.log(isFooterVisible)
    const renderList = () => {
        switch (props.screen) {
            case 1:
                return <>
                    <FooterStyle height={'10vw'} position={'sticky'} bottom={'none'}>
                        <h6>Conteúdo criado por Miguel Alves</h6>

                        <IconDiv>
                            <a href="https://www.linkedin.com/in/miguelbitz/" target={"blank"}>
                                <FontAwesomeIcon beat size="2xl" icon={faLinkedin} style={{ color: "#ffffff" }} />
                            </a>

                            <a href="https://github.com/miguelbitz" target={"blank"}>
                                <FontAwesomeIcon beat size="2xl" icon={faGithub} style={{ color: "#ffffff" }} />
                            </a>
                        </IconDiv>
                    </FooterStyle>

                </>
            case 2:
                return (
                        {isFooterVisible} ?
                        <>
                        <FooterStyle height={'5vw'} position={'fixed'} bottom={0}>
                            <h6>Conteúdo criado por Miguel Alves</h6>

                            <IconDiv>
                                <a href="https://www.linkedin.com/in/miguelbitz/" target={"blank"}>
                                    <FontAwesomeIcon beat size="2xl" icon={faLinkedin} style={{ color: "#ffffff" }} />
                                </a>

                                <a href="https://github.com/miguelbitz" target={"blank"}>
                                    <FontAwesomeIcon beat size="2xl" icon={faGithub} style={{ color: "#ffffff" }} />
                                </a>
                            </IconDiv>
                        </FooterStyle>
                        </> : null
                    )
            default:
        }
    }

    return (
        <>
            {renderList()}
        </>
    )
};

