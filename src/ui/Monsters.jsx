import styled from 'styled-components';

const StyledMonsters = styled.div`
  position: fixed;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100vw;
  bottom: 0;
  z-index: -10;
  pointer-events: none;
`;

const MonsterImgContainerLeft = styled.div`
  width: 10vw;
  height: 100vh;
`;
const MonsterImgContainerRight = styled.div`
  width: 30vw;
  /* height: 100vh; */
  position: fixed;
  right: 0;
`;

const MonsterImg = styled.img`
  /* width: 100%; */
  height: 100%;
  object-fit: contain;
  object-position: bottom;
`;

function Monsters() {
  return (
    <StyledMonsters>
      <MonsterImgContainerLeft>
        <MonsterImg src='../../public/background2.png' />
      </MonsterImgContainerLeft>
      <MonsterImgContainerRight>
        <MonsterImg src='../../public/background3.png' />
      </MonsterImgContainerRight>
    </StyledMonsters>
  );
}

export default Monsters;
