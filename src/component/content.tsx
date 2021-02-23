import React, { FC, useState } from 'react';
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
type SubMenuListType = {
  [key: string] : SubMenuType;
}
type MainMenuType = {
  icon: JSX.Element,
  name: string,
  subMenuList: SubMenuListType
}
type MainMenuListType = {
  [key: string] : MainMenuType;
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
const accountMenuList: SubMenuListType = {
  "key_sub_profile": sub_profile,
  "key_sub_work_experience": sub_work_experience,
  "key_sub_hobby": sub_hobby,
};

const study_record_app: SubMenuType = {
  icon: <RiFlutterLine size="75%"/>,
  name: "study_record_app",
  content: <InfoStudyRecordApp/>,
};
const ff_quiz_app: SubMenuType = {
  icon: <RiFlutterLine size="75%"/>,
  name: "ff_quiz_app",
  content: <InfoFFQuizApp/>,
};
const marvel_app: SubMenuType = {
  icon: <RiFlutterLine size="75%"/>,
  name: "marvel_app",
  content: <InfoMarvelApp/>,
};
const other_products: SubMenuType = {
  icon: <FaCode size="75%"/>,
  name: "Others",
  content: <InfoOtherProducts/>
};
const productMenuList: SubMenuListType = {
  "key_study_record_app": study_record_app,
  "key_ff_quiz_app": ff_quiz_app,
  "key_marvel_app": marvel_app,
  "key_other_products": other_products,
};

const link_github: SubMenuType = {
  icon: <FaGithub size="100%"/>,
  name: "Github",
  content: <div></div>,
  onClick: () => window.open('https://github.com/linnefromice', '_blank')
}
const linkMenuList: SubMenuListType = {
  "key_link_github": link_github,
};
const subMenuList: SubMenuListType = {
  "key_sub_profile": sub_profile,
  "key_sub_work_experience": sub_work_experience,
  "key_sub_hobby": sub_hobby,
  "key_study_record_app": study_record_app,
  "key_ff_quiz_app": ff_quiz_app,
  "key_marvel_app": marvel_app,
  "key_other_products": other_products,
  "key_link_github": link_github,
}

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
  focusedKey: number,
  setFocusedKey: React.Dispatch<React.SetStateAction<number>>,
  menuList: MainMenuType[]
}
const MainMenuList: FC<MainMenuListProps> = ({focusedKey, setFocusedKey, menuList}) => {
  return (
    <div className="wrapperMainMenu">
      {
        menuList.map((value, index) => {
          if (index === focusedKey) {
            return (
              <FocusedMainMenu
                key={`main_menu.${index}`}
                icon={value.icon}
                name={value.name}
                onClick={() => setFocusedKey(index)}
              />
            );
          } else {
            return (
              <MainMenu
                key={`main_menu.${index}`}
                icon={value.icon}
                name={value.name}
                onClick={() => setFocusedKey(index)}
              />
            );
          }
        })
      }
    </div>
  );
}
type SubMenuListProps = {
  focusedKey: string,
  setFocusedKey: React.Dispatch<React.SetStateAction<string>>,
  menuList: any
}
const SubMenuList: FC<SubMenuListProps> = ({focusedKey, setFocusedKey, menuList}) => {
  return (
    <div className="wrapperSubMenu">
      {
        Object.keys(menuList).map((value, index) => {
          if (value === focusedKey) {
            if (menuList[value].onClick === undefined) {
              return (
                <FocusedSubMenu
                  key={`${value}.${index}`}
                  icon={menuList[value].icon}
                  name={menuList[value].name}
                  onClick={() => setFocusedKey(value)}
                />
              ); 
            } else {
              return (
                <FocusedSubMenu
                  key={`${value}.${index}`}
                  icon={menuList[value].icon}
                  name={menuList[value].name}
                  onClick={menuList[value].onClick}
                />
              ); 
            }
          } else {
            if (menuList[value].onClick === undefined) {
              return (
                <SubMenu
                  key={`${value}.${index}`}
                  icon={menuList[value].icon}
                  name={menuList[value].name}
                  onClick={() => setFocusedKey(value)}
                />
              ); 
            } else {
              return (
                <SubMenu
                  key={`${value}.${index}`}
                  icon={menuList[value].icon}
                  name={menuList[value].name}
                  onClick={menuList[value].onClick}
                />
              ); 
            }
          }
        })
      }
    </div>
  );
}

const Content: FC = () => {
  const [focusedMainMenuKey, setFocusedMainMenuKey] = useState(0);
  const [focusedSubMenuKey, setFocusedSubMenuKey] = useState("key_sub_profile");

  return (
    <>
      <MainMenuList focusedKey={focusedMainMenuKey} setFocusedKey={setFocusedMainMenuKey} menuList={mainMenuList} />
      <SubMenuList focusedKey={focusedSubMenuKey} setFocusedKey={setFocusedSubMenuKey} menuList={mainMenuList[focusedMainMenuKey].subMenuList} />
      <div className="wrapperContent">
        {subMenuList[focusedSubMenuKey].content}
      </div>
    </>
  )
}

export default Content;