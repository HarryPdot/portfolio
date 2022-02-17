import './Home.css'

export default function Home() {


    return (
        <div className='home-container'>
            <div className='home-box'>
                <header className='home-header'>
                    <div className='home-name'>Harry Pham,</div>
                    <div className='home-prof'>Full stack</div>
                    <div className='home-prof-2'> developer</div>
                </header>
                <div className='home-description'>
                    My best days are when I am working with a computer in front of me.
                </div>
                <button className='home-contact'>
                    Contact me
                </button>
            </div>
        </div>
    )
}