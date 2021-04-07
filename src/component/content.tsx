import React, { FC, useCallback, useState } from 'react';
import { FaCode, FaLink, FaGithub } from 'react-icons/fa';
import { MdAccountCircle, MdWork, MdFreeBreakfast } from 'react-icons/md';
import { RiProfileLine, RiFlutterLine } from 'react-icons/ri';

import { MainMenu, FocusedMainMenu } from './common/main_menu.jsx';
import { SubMenu, FocusedSubMenu } from './common/sub_menu.jsx';

import Profile from './contents/profile';
import WorkExperience from './contents/work_experience';
import Hobby from './contents/hobby';
import InfoStudyRecordApp from './contents/products/info_study_record_app';
import InfoFFQuizApp from './contents/products/info_ff_quiz_app';
import InfoMarvelApp from './contents/products/info_marvel_app';
import InfoOtherProducts from './contents/products/info_other_products';
// import './content.scss';

type SubMenuType = {
  icon: JSX.Element,
  name: string,
  content: JSX.Element,
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
type MainMenuType = {
  icon: JSX.Element,
  name: string,
  subMenuList: SubMenuType[]
}
const sub_profile: SubMenuType = {
  icon: <RiProfileLine size="100%"/>,
  name: "Profile",
  content: <Profile/>,
};
const sub_work_experience: SubMenuType = {
  icon: <MdWork size="100%"/>,
  name: "Work Experience",
  content: <WorkExperience/>,
};
const sub_hobby: SubMenuType = {
  icon: <MdFreeBreakfast size="100%"/>,
  name: "Hobby",
  content: <Hobby/>,
};
const accountMenuList: SubMenuType[] = [
  sub_profile,
  sub_work_experience,
  sub_hobby,
];

const study_record_app: SubMenuType = {
  icon: <RiFlutterLine size="75%"/>,
  name: "study_record_app",
  content: <InfoStudyRecordApp/>,
};
const ff_quiz_app: SubMenuType = {
  icon: <RiFlutterLine size="60%"/>,
  name: "ff_quiz_app",
  content: <InfoFFQuizApp/>,
};
const marvel_app: SubMenuType = {
  icon: <RiFlutterLine size="60%"/>,
  name: "marvel_app",
  content: <InfoMarvelApp/>,
};
const other_products: SubMenuType = {
  icon: <FaCode size="60%"/>,
  name: "Others",
  content: <InfoOtherProducts/>
};
const productMenuList: SubMenuType[] = [
  study_record_app,
  ff_quiz_app,
  marvel_app,
  other_products,
];

const link_github: SubMenuType = {
  icon: <FaGithub size="80%"/>,
  name: "Github",
  content: <div></div>,
  onClick: () => window.open('https://github.com/linnefromice', '_blank')
}
const linkMenuList: SubMenuType[] = [
  link_github,
];

const main_account_information: MainMenuType = {
  icon: <MdAccountCircle size="100%"/>,
  name: "Account Information",
  subMenuList: accountMenuList,
};
const main_product: MainMenuType = {
  icon: <FaCode size="100%"/>,
  name: "Product(private)",
  subMenuList: productMenuList,
};
const main_links: MainMenuType = {
  icon: <FaLink size="100%"/>,
  name: "Links",
  subMenuList: linkMenuList
};
const mainMenuList: MainMenuType[] = [
  main_account_information,
  main_product,
  main_links
];

type MainMenuListProps = {
  focusedIndex: number,
  selectMenu: (idx: number) => void,
  menuList: MainMenuType[]
}
const MainMenuList: FC<MainMenuListProps> = ({focusedIndex, selectMenu, menuList}) => {
  return (
    <div className="wrapperMainMenu">
      {
        menuList.map((value, index) => {
          if (index === focusedIndex) {
            return (
              <FocusedMainMenu
                key={`main_menu.${index}`}
                icon={value.icon}
                name={value.name}
                onClick={() => selectMenu(index)}
              />
            );
          } else {
            return (
              <MainMenu
                key={`main_menu.${index}`}
                icon={value.icon}
                name={value.name}
                onClick={() => selectMenu(index)}
              />
            );
          }
        })
      }
    </div>
  );
}
type SubMenuListProps = {
  focusedIndex: number,
  selectMenu: (idx: number) => void,
  menuList: SubMenuType[]
}
const SubMenuList: FC<SubMenuListProps> = ({focusedIndex, selectMenu, menuList}) => {
  return (
    <div className="wrapperSubMenu">
      {
        menuList.map((value, index) => {
          if (index === focusedIndex) {
            if (value.onClick === undefined) {
              return (
                <FocusedSubMenu
                  key={`sub_menu.${index}`}
                  icon={value.icon}
                  name={value.name}
                  onClick={() => selectMenu(index)}
                />
              ); 
            } else {
              return (
                <FocusedSubMenu
                  key={`sub_menu.${index}`}
                  icon={value.icon}
                  name={value.name}
                  onClick={value.onClick}
                />
              ); 
            }
          } else {
            if (value.onClick === undefined) {
              return (
                <SubMenu
                  key={`sub_menu.${index}`}
                  icon={value.icon}
                  name={value.name}
                  onClick={() => selectMenu(index)}
                />
              ); 
            } else {
              return (
                <SubMenu
                  key={`sub_menu.${index}`}
                  icon={value.icon}
                  name={value.name}
                  onClick={value.onClick}
                />
              ); 
            }
          }
        })
      }
    </div>
  );
}

const useSelectMenu = () => {
  const [focusedMainMenuIndex, setFocusedMainMenuIndex] = useState(0);
  const [focusedSubMenuIndex, setFocusedSubMenuIndex] = useState(0);

  const selectSubMenu = useCallback((idx: number) => {
    setFocusedSubMenuIndex(idx);
  }, [])
  const selectMainMenu = useCallback((idx: number) => {
    setFocusedMainMenuIndex(idx);
    setFocusedSubMenuIndex(0);
  }, [])

  return {
    focusedMainMenuIndex,
    focusedSubMenuIndex,
    selectSubMenu,
    selectMainMenu,
  };
}

const Content: FC = () => {
  const { focusedMainMenuIndex, focusedSubMenuIndex, selectSubMenu, selectMainMenu } = useSelectMenu();

  return (
    <>
      <MainMenuList focusedIndex={focusedMainMenuIndex} selectMenu={selectMainMenu} menuList={mainMenuList} />
      <SubMenuList focusedIndex={focusedSubMenuIndex} selectMenu={selectSubMenu} menuList={mainMenuList[focusedMainMenuIndex].subMenuList} />
      <div className="wrapperContent">
        {mainMenuList[focusedMainMenuIndex].subMenuList[focusedSubMenuIndex].content}
      </div>
    </>
  )
}

export default Content;