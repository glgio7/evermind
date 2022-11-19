import styled from "styled-components";



const StyledMeditation = styled.div`
  
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  section {
    min-width: 100%;
    min-height: calc(100vh - 88px);
    margin-top: 48px;
    padding-block: 12px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-image: url("/img/articlesbg.jpg");
    background-position: center;
    background-size: cover;
  }
  h1 {
    margin-top: 24px;
    font-size: 1.8rem;
    font-family: "Ubuntu";
    color: ${({theme}) => theme.navText};
    font-weight: 600;
  }
  h3 {
    text-decoration: none;
    font-family: "Ubuntu";
    color: ${({theme}) => theme.navText};
    font-weight: 600;
    font-size: 1.25rem;
    font-weight: bold;
  }
  .container {
    border-radius: 8px;
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 100%;
    min-height: 156px;
    background: rgb(106, 106, 106);
    background: ${({theme}) => theme.boxColor};
  }
  .channelsIcon {
    width: 120px;
    height: 120px;
  }

  @media screen and (max-width: 768px) {
    .container {
      min-height: 120px;
    }
  .channelsIcon {
    width: 96px;
    height: 96px;
  }
    h1 {
      font-size: 1.5rem;
    }
    h3 {
      font-size: 1.1rem;
    }
  }
`;

export default function Meditation() {
  return (<>
    <StyledMeditation>
      <section>
        <h1>Canais Recomendados</h1>
        <div className="container">
          <div className="channelsIcon">
            <a href="https://www.youtube.com/@CorvoSeco" target="_blank">
              <img src="/img/corvoseco.jpg" />
            </a>
          </div>
          <h3>Corvo Seco</h3>
        </div>
        <div className="container">
          <div className="channelsIcon">
            <a href="https://www.youtube.com/@MonjaCoen" target="_blank">
              <img src="/img/mova.jpg" />
            </a>
          </div>
          <h3>MOVA</h3>
        </div>
        <div className="container">
          <div className="channelsIcon">
            <a href="https://www.youtube.com/@caducassau" target="_blank">
              <img src="/img/cassau.jpg" />
            </a>
          </div>
          <h3>Cadu Cassau</h3>
        </div>
        <div className="container">
          <div className="channelsIcon">
            <a href="https://www.youtube.com/c/casadosaber" target="_blank">
              <img src="/img/casadosaber.jpg" />
            </a>
          </div>
          <h3>Casa do Saber</h3>
        </div>
      </section>
    </StyledMeditation>
    </>
  );
}
