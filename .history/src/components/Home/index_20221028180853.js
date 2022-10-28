import LogoTitle from '../../assets/images/logo-s.png'
const Home = () => {

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br/> I'm
                <img src={LogoTitle} alt="developer" />
                Sachindra
                <br />
                Developer
                </h1>
                <h2>Frontend/Backend Developer</h2>
                <Link to="/contact" >Contact Me</Link>
            </div>

        </div>
    )
};

export default Home