import './Footer.css'

export const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <img src="/images/fb.png" alt="logo facebook" />
                <img src="/images/tw.png" alt="logo twitter" />
                <img src="/images/ig.png" alt="logo instagram" />
            </div>
            <div>
                <img className='logo' src="/images/logo.png" alt="logo organo" />
            </div>
            <p>Desenvolvido por Alura.</p>
        </div>
    )
}