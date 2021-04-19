import React, { FC, useCallback, useState } from 'react';
import { FaCode } from 'react-icons/fa';
import { MdAccountCircle, MdWork, MdFreeBreakfast, MdSmartphone, MdWebAsset } from 'react-icons/md';
import { RiProfileLine, RiFlutterFill, RiVuejsFill } from 'react-icons/ri';

import { MainMenu, FocusedMainMenu } from './common/main_menu.jsx';
import { SubMenu, FocusedSubMenu } from './common/sub_menu.jsx';
import Profile from './contents/profile';
import WorkExperience from './contents/work_experience';
import Hobby from './contents/hobby';
import InfoStudyRecordApp from './contents/products/info_study_record_app';
import InfoFFQuizApp from './contents/products/info_ff_quiz_app';
import InfoMarvelApp from './contents/products/info_marvel_app';
import InfoOtherProducts from './contents/products/info_other_products';
import InfoVuetifyNewsApp from './contents/products/info_vuetify_news_app.js';
import InfoSlideVue from './contents/products/info_slide_vue.js';
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
  icon: <RiFlutterFill size="75%"/>,
  name: "study_record_app",
  content: <InfoStudyRecordApp/>,
};
const ff_quiz_app: SubMenuType = {
  icon: <RiFlutterFill size="60%"/>,
  name: "ff_quiz_app",
  content: <InfoFFQuizApp/>,
};
const zenn_rss_feeder: SubMenuType = {
  icon: <RiFlutterFill size="60%"/>,
  name: "zenn_rss_feeder",
  content: <>Please wait...</>,
};
const marvel_app: SubMenuType = {
  icon: <RiFlutterFill size="60%"/>,
  name: "marvel_app",
  content: <InfoMarvelApp/>,
};
const productMobileList: SubMenuType[] = [
  study_record_app,
  ff_quiz_app,
  zenn_rss_feeder,
  marvel_app,
];

const vuetify_news_app: SubMenuType = {
  icon: <RiVuejsFill size="60%"/>,
  name: "vuetify_news_app",
  content: <InfoVuetifyNewsApp/>
};
const slide_vue: SubMenuType = {
  icon: <RiVuejsFill size="60%"/>,
  name: "slide_vue",
  content: <InfoSlideVue/>
};

const other_products: SubMenuType = {
  icon: <FaCode size="60%"/>,
  name: "Others",
  content: <InfoOtherProducts/>
};
const productWebList: SubMenuType[] = [
  vuetify_news_app,
  slide_vue,
  other_products,
];

const main_account_information: MainMenuType = {
  icon: <MdAccountCircle size="100%"/>,
  name: "Account Information",
  subMenuList: accountMenuList,
};
const product_mobile: MainMenuType = {
  icon: <MdSmartphone size="100%"/>,
  name: "Product Mobile",
  subMenuList: productMobileList,
};
const product_web: MainMenuType = {
  icon: <MdWebAsset size="100%"/>,
  name: "Product Web",
  subMenuList: productWebList
};
const mainMenuList: MainMenuType[] = [
  main_account_information,
  product_mobile,
  product_web
];

type MainMenuListProps = {
  focusedIndex: number,
  selectMenu: (idx: number) => void,
  menuList: MainMenuType[]
}
const MainMenuList: FC<MainMenuListProps> = ({focusedIndex, selectMenu, menuList}) => {
  return (
    <div className="wrapper-mainmenu">
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
    <div className="wrapper-submenu">
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
      <div className="wrapper-content">
        {mainMenuList[focusedMainMenuIndex].subMenuList[focusedSubMenuIndex].content}
      </div>
    </>
  )
}

export default Content;
