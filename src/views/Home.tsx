import './Home.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Home() {

  return (
    <div className='home-view'>
      <section className='container-home-view'>
        <header className='home-header'>
          <Navbar />
        </header>

        <main>
          <section className='container-main-home'>
            <div className='container-hello'>
              <span className='span-hello'>Hello World. I am</span>
              <h1 className='title-home'>Andre Navas</h1>
              <span className='span-frontend'>  &gt; Frontend Developer</span>
            </div>
            <div className='container-github-profile'>
              <p className='titleGithubProfile'>//Find my profile on Github:</p>
              <div className='containerGithubLink'>
                <p>
                  <span className='githubLinkCode'>const </span>
                  <span className='githubLinkVariable'>githubLink </span>
                  <span className='githubLinkOperator'>= </span>
                  <a className='githubLinkURL' href='https://github.com/andrenavas'>'https://github.com/andrenavas'</a>
                  <span className='githubLinkOperator'>;</span>
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </section>
    </div>
  )
}

export default Home
