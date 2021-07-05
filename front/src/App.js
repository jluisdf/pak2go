import React from 'react';
import { useSelector } from 'react-redux';
import 'antd/dist/antd.css';
import Routes from './Routes';
import './App.css'
import Header from './components/structure/Header';
import Footer from './components/structure/Footer';
import Notification from './components/structure/Notification';
import Login from './pages/Login';
import { Layout} from 'antd';
const { Content } = Layout;


function App() {

    const isLoggedIn = useSelector(store => store.isLoggedIn);
    return (
        <Layout>
            <Notification />
            { isLoggedIn ?
                <>
                    <Header />
                    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                        <div style={{ margin: '2rem 0' }} />
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                            <Routes />
                        </div>

                    </Content>
                    <Footer />
                </>
            :
                <Login />
            }
        </Layout>
    );
}

export default App;
