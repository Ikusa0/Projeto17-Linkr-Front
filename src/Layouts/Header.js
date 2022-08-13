import styled from 'styled-components'

export default function Header({ profile }) {
  return (
    <Container>
      <h1>Linkr</h1>
      <img src={profile} alt="profile" />
    </Container>
  )
}

const Container = styled.header`
  width: 100vw;
  height: 72px;
  background-color: #151515;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 28px;
  padding-right: 28px;

  h1 {
    font-weight: 700;
    font-size: 49px;
    color: #ffffff;
    font-family: 'Passion One', cursive;
  }

  img {
    width: 53px;
    height: 53px;
    border-radius: 50%;
    object-fit: cover;
  }

  @media (max-width: 400px) {
    padding-left: 16px;
    padding-right: 16px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    h1 {
      font-size: 45px;
    }

    img {
      width: 44px;
      height: 44px;
    }
  }
`
