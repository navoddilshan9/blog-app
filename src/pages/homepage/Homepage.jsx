import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
// import Sidebar from '../../components/sidebar/Sidebar'
// import './homepage.css'

export default function Homepage() {
  return (
    <div style={{ marginBottom: '100px' }}>
      <Header />
      <div>
        <Posts />
      </div>
    </div>
  )
}
