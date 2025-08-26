import { Link } from "react-router";
import { FaPhoneVolume } from "react-icons/fa6";
import "./hero.scss";


function BannerHero(){
    return(
        <>
            <div className="banner">
                <div className="banner__hero">
                    <div className="banner__hero-left">
                        <h1>SộpPe.com</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="banner__hero-right">
                        <img src="/20250821_2212_Người Mẫu Thời Trang_simple_compose_01k36jz5z2et3vj7erq4cct9a5 (1).png" alt="Người mẫu ảnh"/>
                    </div>
                    <span className="banner__hero-span">Mega Sale</span>
                    <span className="banner__hero-span-2">20%</span>
                    <div className="banner__hero-contact">
                        <div className="banner__hero-contact--main">
                            <div className="banner__hero-contact--main---img">
                                <img src="/z6931555174132_8d672f929880ea8768143340fd4353c4-removebg-preview (1).png" alt="ảnh chủ shop" />
                            </div>
                            <div className="banner__hero-contact--main---a">
                                <Link to={"/contact"}>Lam Chi Loc</Link>
                                <FaPhoneVolume />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BannerHero;