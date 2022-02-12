import { useContext } from "react"
import Sidebar from "../../components/sidebar/Sidebar"
import SideInfo from "../../components/sideInfo/SideInfo"
import { Context } from "../../context/Context"
import './resources.css'

const Resources = (props) => {
    const { user } = useContext(Context)
    return (
        <div className="resourcesWrapper">
            <div className="resourcesMain">
                <div className="resourcesInfo">
                    <h1 className="resourcesTitle">Resources</h1>
                    <h4 className="resourcesDesc">If you or someone you know is stuggling with their mental health, 
                        here are some resources to reach out to.
                    </h4>
                    <ul className="resourcesList">
                        <li className="resourcesListItem">
                            <a 
                            href="https://www.nami.org/Home" 
                            target="_blank"
                            rel="noreferrer">
                                National Alliance on Mental Illness
                            </a>
                        </li>
                        <li className="resourcesListItem">
                            <a 
                                href="https://suicidepreventionlifeline.org/" 
                                target="_blank" 
                                rel="noreferrer">
                                National Suicide Prevention Lifeline
                            </a>
                        </li>
                        <li className="resourcesListItem">
                            <a 
                                href="https://www.postpartum.net/" 
                                target="_blank" 
                                rel="noreferrer">
                                Postpartum Support International
                            </a>
                        </li>
                        <li className="resourcesListItem">
                            <a 
                                href="https://www.nimh.nih.gov/health/publications/depression-in-women" 
                                target="_blank" 
                                rel="noreferrer">
                                Depression in Women
                            </a>
                        </li>
                    </ul>
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

export default Resources