import MainGallery from "./MainGallery";
import SubGallery from "./SubGallery";
import Line from "./PropsLineUtil";

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="left-content-area">
        <img
          className="main-image"
          src="https://picsum.photos/600/600"
          alt="hi"
        />
        <img
          className="sub-image"
          src="https://picsum.photos/300/300"
          alt="hi"
        />
        <MainGallery
          img="https://picsum.photos/600/700"
          title="정기 세션 및 스터디"
          body={
            <Line
              text={
                "하이블록은 주 2회 정기 세션을 개최하고 있습니다. \n 분야에 맞게 커리큘럼을 운영하고 있으며, 자체 제작한 교보재를 통해 \n 블록체인 생태계에 대한 이해를 넓혀갈 수 있습니다. \n 블록체인에 대한 기초를 알아가고 이를 응용할 수 있는 지식까지 \n 체계적으로 알아갈 수 있습니다."
              }
            />
          }
        />
      </div>
      <div className="right-content-area">
        <SubGallery
          title="정기 세션 및 스터디"
          body={
            <Line
              text={
                "하이블록은 주 2회 정기 세션을 개최하고 있습니다. \n 분야에 맞게 커리큘럼을 운영하고 있으며, 자체 제작한 교보재를 통해 \n 블록체인 생태계에 대한 이해를 넓혀갈 수 있습니다. \n 블록체인에 대한 기초를 알아가고 이를 응용할 수 있는 지식까지 \n 체계적으로 알아갈 수 있습니다."
              }
            />
          }
        />
        <MainGallery
          img="https://picsum.photos/600/700"
          title="자율 프로젝트"
          body={
            <Line
              text={
                "HY-BLOCK은 회원들이 자율적으로 프로젝트들을 주도합니다. \n 원하는 주제에 관해 프로젝트를 기획하면, \n 팀원들을 모아서 프로젝트를 만들어 갈 수 있습니다."
              }
            />
          }
          needlink={true}
          linktext1="Project Information"
          linktext2="Project Github"
        />

        <MainGallery
          img="https://picsum.photos/600/800"
          title="네트워킹"
          body={
            <Line
              text={
                "HY-BLOCK의 가장 큰 자산은 회원들이라고 단언할 수 있습니다.\n 현재 블록체인 업계에서 직접 일하고 있는 회원들도 있고,\n 외부 활동이나 대회에 참여하고 있는 열정적인 회원들이 많습니다.\n 블록체인 업계를 지망하면 HY-BLOCK은 네트워킹을 위한 최적의 \n 장소일 것입니다."
              }
            />
          }
        />
      </div>
    </div>
  );
};

export default MainContent;
