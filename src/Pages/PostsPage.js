import Header from '../Layouts/Header'
import profile from '../Assets/Images/profile.jpg'
import styled from 'styled-components'

export default function Posts() {
  return (
    <>
      <Header profile={profile} />
      <Main>
        <Container>
          <h2>timeline</h2>
        </Container>
      </Main>
    </>
  )
}

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  position: relative;
  top: 71px;
  background-color: #333333;
`

const Container = styled.section`
    position: absolute;

  h2 {
    margin-top: 78px;
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    font-size: 43px;
    color: #ffffff;
  }

  @media (max-width: 400px) {
    h2 {
        margin-top: 19px;
        font-size: 33px;
    }
  }
`
