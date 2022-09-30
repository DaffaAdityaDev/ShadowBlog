import style from './PostContainer.module.scss'
function index(props) {
  return (
    <div className={style.container}>
        {props.children}
    </div>
  )
}

export default index