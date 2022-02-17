import { useContext } from "react"
import Sidebar from "../../components/sidebar/Sidebar"
import SideInfo from "../../components/sideInfo/SideInfo"
import { Context } from "../../context/Context"
import './about.css'

const About = (props) => {
    const { user } = useContext(Context)
    return (
        <div className="aboutWrapper">
            <div className="aboutText">
                <h1 className="aboutTitle">About Brighter</h1>
                <div className="aboutStatement">
                    <p className="aboutParagraph">
                        We all need someone to lean on every now and then. 
                        Some of us may not have the support system that we need.
                    </p>
                    <p className="aboutParagraph">
                        That's what Brighter is for. 
                        Brighter is a place for people to share.
                        A user can share their feelings, thoughts, hesitations. 
                    </p>  
                </div>
            </div>
        <div>
            {user ? (
                <Sidebar />

                ) : (
                <SideInfo />
            )}
        </div>
            
        </div>
    )
}

export default About