import authImgBG from './assets/bg.png';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';

function App() {
  return (
    <div className="wrapper">
      <section className="sign-container">
        <div className="auth">
          <div className="auth-info">
            <Header />
            <Form />
            <Footer />
          </div>
          <div className="auth-img">
            <img src={authImgBG} alt="BG" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
