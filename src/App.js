import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '@pages/home/Home'
import PageWrapper from '@shared/PageWrapper'
import 'alertifyjs/build/css/alertify.css'
import 'src/styles/common.scss'

function App() {
  return <BrowserRouter>
    <Switch>
      <Route path={'/'}>
        <PageWrapper component={Home}/>
      </Route>
    </Switch>
  </BrowserRouter>
}

export default App
