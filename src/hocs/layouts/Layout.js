import { Connect } from "react-redux";

function Layout({ children }){
    return (
        <div>
            {children}
        </div>
    )
}
const mapStateToProps = state = ({

})

export default Connect(mapStateToProps,{})(Layout);