import './Container.css'

const Container = (props) => {
    return (
        <div className={"myContainer " + props.className}>{props.children}</div>
    )
}
export default Container;