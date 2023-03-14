import "./AppHeader.styles.css"
import logo from '../../../assets/images/logo.png'

const AppHeader: React.FC = () => {
    return (
        <header className="app-header">
            <div className="container">
                <img onClick={() => {}} src={logo} alt={"logo"} />
                <div className="app-description">
                    Movie application that allows users to easily add and share movies with friends, family, and other movie enthusiasts
                </div>
            </div>
        </header>
    )
}

export default AppHeader