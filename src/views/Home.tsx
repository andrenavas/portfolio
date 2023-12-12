import './Home.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import blue from '../assets/img/blue.png'
// import green from '../assets/img/green.png'
import Button from '../components/Button'

function Home() {

  return (
    <section className='home-view'>
      <div className='container-home-view'>
        <header className='home-header'>
          <Navbar />
        </header>

        <main>
          <section className='container-main-home'>
            <div className='box'>

              <div className='container-hello'>
                <span className='span-hello'>Hello World. I'm</span>
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
                    <a className='githubLinkURL' href='https://github.com/andrenavas' target='_blank'>'https://github.com/andrenavas'</a>
                    <span className='githubLinkOperator'>;</span>
                  </p>
                </div>
              </div>
            </div>
            <Button linkTo='./projects' descriptionButton='view-projects'/>
          </section>

        </main>

        <Footer />

      </div>
    </section>
  )
}

export default Home