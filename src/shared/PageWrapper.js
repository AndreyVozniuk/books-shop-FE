import Header from './header/Header'
import Footer from './footer/Footer'
import 'src/styles/common.scss'

function PageWrapper(props) {
  return <div className={'container'}>
    <Header />
    { <props.component /> }
    <Footer />
  </div>
}

export default PageWrapper
