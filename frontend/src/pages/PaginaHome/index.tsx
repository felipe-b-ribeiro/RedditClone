import Header from "../../components/Header";
import LeftMenu from "../../components/LeftMenu";
import MainContainer from "../../components/MainContainer";
import { SC_MainWrapper, SC_TermsWrapper } from './styles';

export default function PaginaHome() {
    return (
        <>
        <Header />
        <hr />
        <SC_MainWrapper>
            <LeftMenu />
            <MainContainer />
            <SC_TermsWrapper>
                <div className="flx a-center g-5">
                    <a href="https://www.linkedin.com/in/felipe-bitencourt-ribeiro-440398382/"  target="blank">
                        <img width="40" height="40" alt="Logo do Linkedin" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" />
                    </a>
                    <a id='github-icon' href="https://github.com/felipe-b-ribeiro" target="blank">
                        <i style={{fontSize: '42px'}} className="devicon-github-original"></i>
                    </a>
                    <p>© 2025 - Built by Felipe B. Ribeiro</p>
                </div>
                <div className='flx a-center g-10'>
                    <a href="https://redditinc.com/policies/reddit-rules" target="blank"><p>Reddit Rules</p></a>
                    <a href="https://redditinc.com/policies/user-agreement" target="blank"><p>User Agreement</p></a>
                </div>
                <a href="https://support.reddithelp.com/hc/en-us/sections/38303584022676-Accessibility" target="blank"><p>Accessibility</p></a>
                <a href="https://redditinc.com" target="blank"><p>Reddit, Inc. © 2025. All rights reserved.</p></a>
            </SC_TermsWrapper>
        </SC_MainWrapper>
        </>
    );
}