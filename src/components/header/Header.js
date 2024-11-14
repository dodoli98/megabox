import mainLogo from "../../images/mainlogo.png";
import './Header.module.css'
export default function Header () {

    return (
        <header>
            <h1>
                <a href='#home'>
                    <img src={mainLogo} alt="main logo 'megabox'" />
                </a>
            </h1>

            <ul>
                <li><a href="#movie">영화</a></li>
                <li><a href="#t1">극장</a></li>
                <li><a href="#3">예매</a></li>
                <li><a href="#4">스토어</a></li>
                <li><a href="#4">공지사항</a></li>
            </ul>

            <ul>
                <li><a href='#Login'>로그인</a></li>
                <li><a href='#rigiter'>회원가입</a></li>
            </ul>
        </header>
    );

}