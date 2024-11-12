import './Header.module.css'
export default function Header () {

    return (
        <header>
            <h1>
                <a href='/'>
                    <img src="/images/mainlogo.png" alt='main logo "megabox'></img>
                </a>
            </h1>

            <ul>
                <li><a href="/">영화</a></li>
                <li><a href="/">극장</a></li>
                <li><a href="/">예매</a></li>
                <li><a href="/">스토어</a></li>
                <li><a href="/">공지사항</a></li>
            </ul>

            <ul>
                <li><a href=''>로그인</a></li>
                <li><a href=''>회원가입</a></li>
            </ul>
        </header>
    );

}