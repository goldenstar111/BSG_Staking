import { Header } from "../../components";
import images from "../../constants/images";
import { ThemeContext } from "../../utils/theme/ThemeContext";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <ThemeContext.Consumer>
            {({ isToggle, toggleTheme }) => (
                <main className=" overflow-y-hidden max-h-[100vh] dark:bg-[#1C203B]">
                    <Header />
                    <div style={!isToggle ? { backgroundImage: `url(${images.ErrBgDark})`, backgroundSize: "100% 80%", backgroundRepeat: "no-repeat" } : {}}>
                        <h3 className="text-3xl text-black font-bold pt-8 text-center dark:text-white">Look like you're lost in space</h3>
                        <div style={{ backgroundImage: `url(${images.ErrorBack})`, textAlign: "center" }}>
                            <h1 className="text-[40vh] text-black font-bold text-center w-full dark:text-white">404</h1>
                            <div className="flex w-full items-stretch justify-center">
                                <img src={!isToggle ? images.ErrorMan : images.ErrorWhiteMan} alt="" className="items-center h-[35vh] relative bottom-[43vh]" />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Link to="/" className="text-sm text-white py-3 px-20 relative bottom-[40vh] rounded-xl"
                                style={{ background: `url(${images.ErrBtnBack})` }}>
                                Go Back
                            </Link>
                        </div>
                    </div>
                </main>
            )}
        </ThemeContext.Consumer>
    )
}
export default ErrorPage;