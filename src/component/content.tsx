import React, { FC, useState } from 'react';
import { FaCode, FaLink, FaGithub } from 'react-icons/fa';
import { IconType } from 'react-icons'
import { MdAccountCircle, MdWork, MdFreeBreakfast } from 'react-icons/md';
import { RiProfileLine, RiFlutterLine } from 'react-icons/ri';

import { MainMenu, FocusedMainMenu } from './common/main_menu.jsx';
import { SubMenu, FocusedSubMenu } from './common/sub_menu.jsx';

import Profile from './contents/profile';
import WorkExperience from './contents/work_experience';
import Hobby from './contents/hobby';
import InfoStudyRecordApp from './contents/info_study_record_app';
import InfoFFQuizApp from './contents/info_ff_quiz_app';
import InfoMarvelApp from './contents/info_marvel_app';
import InfoOtherProducts from './contents/info_other_products';
// import './content.scss';

type SubMenuType = {
  icon: JSX.Element,
  name: string,
  content: JSX.Element,
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const key_sub_profile = "key_sub_profile";
const sub_profile: SubMenuType = {
  icon: <RiProfileLine size="100%"/>,
  name: "Profile",
  content: <Profile/>,
};
const key_sub_work_experience = "key_sub_work_experience"; // eslint-disable-line
const sub_work_experience: SubMenuType = {
  icon: <MdWork size="100%"/>,
  name: "Work Experience",
  content: <WorkExperience/>,
};
const key_sub_hobby = "key_sub_hobby"; // eslint-disable-line
const sub_hobby: SubMenuType = {
  icon: <MdFreeBreakfast size="100%"/>,
  name: "Hobby",
  content: <Hobby/>,
};
const accountMenuList = {
  key_sub_profile: sub_profile,
  key_sub_work_experience: sub_work_experience,
  key_sub_hobby: sub_hobby,
};

const key_study_record_app = "key_study_record_app"; // eslint-disable-line
const study_record_app: SubMenuType = {
  icon: <RiFlutterLine size="75%"/>,
  name: "study_record_app",
  content: <InfoStudyRecordApp/>,
};
const key_ff_quiz_app = "key_ff_quiz_app"; // eslint-disable-line
const ff_quiz_app: SubMenuType = {
  icon: <RiFlutterLine size="75%"/>,
  name: "ff_quiz_app",
  content: <InfoFFQuizApp/>,
};
const key_marvel_app = "key_marvel_data_app"; // eslint-disable-line
const marvel_app: SubMenuType = {
  icon: <RiFlutterLine size="75%"/>,
  name: "marvel_app",
  content: <InfoMarvelApp/>,
};
const key_other_products = "key_other_products"; // eslint-disable-line
const other_products: SubMenuType = {
  icon: <FaCode size="75%"/>,
  name: "Others",
  content: <InfoOtherProducts/>
};
const productMenuList = {
  key_study_record_app: study_record_app,
  key_ff_quiz_app: ff_quiz_app,
  key_marvel_app: marvel_app,
  key_other_products: other_products,
};

const key_link_github = "key_link_github"; // eslint-disable-line
const link_github: SubMenuType = {
  icon: <FaGithub size="100%"/>,
  name: "Github",
  content: <div></div>,
  onClick: () => window.open('https://github.com/linnefromice', '_blank')
}
const linkMenuList = {
  key_link_github: link_github,
};
const subMenuList = {
  key_sub_profile: sub_profile,
  key_sub_work_experience: sub_work_experience,
  key_sub_hobby: sub_hobby,
  key_study_record_app: study_record_app,
  key_ff_quiz_app: ff_quiz_app,
  key_marvel_app: marvel_app,
  key_other_products: other_products,
  key_link_github: link_github,
}

type MainMenuType = {
  icon: JSX.Element,
  name: string,
  subMenuList: any // eslint-disable-line @typescript-eslint/no-explicit-any
}
const key_main_account_information = "key_main_account_information";
const main_account_information: MainMenuType = {
  icon: <MdAccountCircle size="100%"/>,
  name: "Account Information",
  subMenuList: accountMenuList,
};
const key_main_product = "key_main_product"; // eslint-disable-line
const main_product: MainMenuType = {
  icon: <FaCode size="100%"/>,
  name: "Product(private)",
  subMenuList: productMenuList,
};
const key_main_links = "key_main_links"; // eslint-disable-line
const main_links: MainMenuType = {
  icon: <FaLink size="100%"/>,
  name: "Links",
  subMenuList: linkMenuList
};
const mainMenuList = {
  key_main_account_information: main_account_information,
  key_main_product: main_product,
  key_main_links: main_links
};

type MenuListProps = {
  focusedKey: string,
  setFocusedKey: React.Dispatch<React.SetStateAction<string>>,
  menuList: any // eslint-disable-line @typescript-eslint/no-explicit-any
}
const MainMenuList: FC<MenuListProps> = ({focusedKey, setFocusedKey, menuList}) => {
  return (
    <div className="wrapperMainMenu">
      {
        Object.keys(menuList).map((value, index) => {
          if (value === focusedKey) {
            return (
              <FocusedMainMenu
                key={`${value}.${index}`}
                icon={menuList[value].icon}
                name={menuList[value].name}
                onClick={() => setFocusedKey(value)}
              />
            );
          } else {
            return (
              <MainMenu
                key={`${value}.${index}`}
                icon={menuList[value].icon}
                name={menuList[value].name}
                onClick={() => setFocusedKey(value)}
              />
            );
          }
        })
      }
    </div>
  );
}

const SubMenuList: FC<MenuListProps> = ({focusedKey, setFocusedKey, menuList}) => {
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
  const [focusedMainMenuKey, setFocusedMainMenuKey] = useState(key_main_account_information);
  const [focusedSubMenuKey, setFocusedSubMenuKey] = useState(key_sub_profile);

  return (
    <div>
      <MainMenuList focusedKey={focusedMainMenuKey} setFocusedKey={setFocusedMainMenuKey} menuList={mainMenuList} />
      <SubMenuList focusedKey={focusedSubMenuKey} setFocusedKey={setFocusedSubMenuKey} menuList={mainMenuList[focusedMainMenuKey].subMenuList} />
      <div className="wrapperContent">
        {subMenuList[focusedSubMenuKey].content}
      </div>
    </div>
  )
}

export default Content;