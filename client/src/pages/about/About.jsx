import { useContext } from "react"
import Sidebar from "../../components/sidebar/Sidebar"
import SideInfo from "../../components/sideInfo/SideInfo"
import { Context } from "../../context/Context"

const About = (props) => {
    const { user } = useContext(Context)
    return (
        <div>
            <h1>About Brighter</h1>
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