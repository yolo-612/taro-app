import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import eSf from '@/assets/images/cv-info/logo_sf.png';
import dHome from '@/assets/images/cv-info/d_home.svg';
import dSkills from '@/assets/images/cv-info/d_skills.svg';
import dExp from '@/assets/images/cv-info/d_exp.svg';
import dWorks from '@/assets/images/cv-info/d_works.svg';
import dContact from '@/assets/images/cv-info/d_contact.svg';
import sGithub from '@/assets/images/cv-info/s_github.svg';
import sSf from '@/assets/images/cv-info/s_sf.svg';
import sBlog from '@/assets/images/cv-info/s_blog.svg';
import wLs from '@/assets/images/cv-info/w_ls.jpg';
import yj_gzh from '@/assets/images/cv-info/yj_gzh.jpg';
import djs_avatar from '@/assets/images/cv-info/hd_20191.jpg'


type ImageResource = string; // 图片资源的类型定义，通常是一个URL或路径

// Header：包含语言列表和标题列表。
export interface Header {
  langList: string[];
  titleList: {
    svg: ImageResource;
    title: string;
  }[];
}

// Footer：包含版权信息等。
type Footer = string[]

// Overview：包含个人基本信息、引言和描述列表。
export interface Overview {
  photoUrl: ImageResource;
  infoList: string[];
  quote: string;
  desList: string[];
}

// Skill：包含外圈技能列表、内圈技能列表和技能描述列表。
export interface Skill {
  outCircleList: {
    bg: {
      backgroundColor: string;
    };
    name: string;
  }[];
  innerCircleList: {
    bg: {
      backgroundColor: string;
    };
    name: string;
  }[];
  desList: string[];
}

// Experience：包含工作经验列表，每个经验项包含标题、时间、职位、图片和内容列表。
export interface Experience {
  expList: {
    title: string;
    time: string;
    post: string;
    img: {
      backgroundImage: string;
      backgroundSize: string;
    };
    contentList: string[];
  }[];
}

// Works：包含作品列表，每个作品项包含标题、描述、缩略图、URL和样式。
export interface Works {
  worksList: {
    title: string;
    des: string;
    mini: ImageResource;
    style: Record<string, string>;
  }[];
  viewMore: string;
  gitUrl: string;
}

// Contact：包含联系信息，包括标题、描述列表、下载链接、文件列表和联系方式列表。
export interface Contact {
  title: string;
  desList1: string[];
  desList2: string[];
  download: string;
  fileList: {
    title: string;
    url: string;
  }[];
  typeList: {
    icon: ImageResource;
    url: string;
  }[];
}

/** store数据类型定义 */ 
export interface cvInfoState {
  header: Header;
  footer: Footer;
  overview: Overview;
  skill: Skill;
  exp: Experience;
  works: Works;
  contact: Contact;
}

const initialState: cvInfoState = {
  header: {
    langList: ['中', '英'],
    titleList: [
      {
        svg: dHome,
        title: '首页'
      },
      {
        svg: dSkills,
        title: '能力'
      },
      {
        svg: dExp,
        title: '经历'
      },
      {
        svg: dWorks,
        title: '作品集'
      },
      {
        svg: dContact,
        title: '联系我'
      }
    ]
  },
  footer: ['Released under the MIT License', 'All Rights Reserved ', `Copyright © 2014-${new Date().getFullYear()} Korey Zhao`],
  overview: {
    photoUrl: djs_avatar,
    infoList: [`${new Date().getFullYear() - 1996}岁`, '硕士', '深圳', '在职'],
    quote: '善始者实繁,克终者盖寡',
    desList: ['我叫戴金森，毕业于南京邮电大学', '现于顺丰科技/客户渠道产品研发中心担任前端开发工程师', 'keruisiya0818@163.com']
  },
  skill: {
    outCircleList: [
      {
        bg: {
          backgroundColor: 'rgba(121,100,102,0.8)'
        },
        name: 'vue'
      },
      {
        bg: {
          backgroundColor: 'rgba(49,65,82,0.8)'
        },
        name: 'Html5'
      },
      {
        bg: {
          backgroundColor: 'rgba(76,157,160,0.8)'
        },
        name: 'Css3'
      },
      {
        bg: {
          backgroundColor: 'rgba(66,66,66,0.8)'
        },
        name: 'nodejs'
      },
      {
        bg: {
          backgroundColor: 'rgba(193,131,106,0.8)'
        },
        name: '小程序'
      },
      {
        bg: {
          backgroundColor: 'rgba(117,148,179,0.8)'
        },
        name: 'Js'
      },
      {
        bg: {
          backgroundColor: 'rgba(71,83,94,0.8)'
        },
        name: 'Git'
      },
      {
        bg: {
          backgroundColor: 'rgba(147,147,189,0.8)'
        },
        name: 'ts'
      }
    ],
    innerCircleList: [
      {
        bg: {
          backgroundColor: 'rgba(179,164,140,0.8)'
        },
        name: '调试'
      },
      {
        bg: {
          backgroundColor: 'rgba(171,209,220,0.8)'
        },
        name: '优化'
      },
      {
        bg: {
          backgroundColor: 'rgba(238,215,163,0.8)'
        },
        name: '测试'
      },
      {
        bg: {
          backgroundColor: 'rgba(207,184,178,0.8)'
        },
        name: '部署'
      }
    ],
    desList: [
      '组内担任顺丰速运月结服务/签约、预付等业务模块的日常开发',
      '涉及PC、H5、小程序多端开发，有taro及webcomponent等跨平台技术开发经验',
      '前端技术栈VUE3、Webpack、TS, UI组件库均有尝试，包括echart',
      '自我驱动力强，参与公司开源项目UI组件库的建设开发, 撰写输出技术专利',
      '擅长样式布局、组件开发及构建优化等，有前端项目的部署工作经验'
    ]
  },
  exp: {
    expList: [
      {
        title: '顺丰科技',
        time: '2021年5月~至今',
        post: '前端开发工程师',
        img: {
          backgroundImage: `url(${eSf})`,
          backgroundSize: '100%'
        },
        contentList: [
          '负责顺丰月结服务项目的开发设计工作',
          '参与业务需求拆解、方案设计、开发联调、代码评审',
          '输出主导业务相关文档，优化主导项目页面性能',
          '主持前端周例会议、组内分享，参与制定团队规范建设',
          '参与公司开源项目UI组件库建设开发'
        ]
      }
    ]
  },
  works: {
    worksList: [
      {
        title: '顺丰速运月结服务公众号',
        des: `顺丰月结公众号是面向顺丰月结客户的专属服务平台，提供在线签约、寄件插件、对账发票、投诉理赔等模块功能。
        公众号页面交互功能基于H5开发，采用Multi-repo的方式独立托管管理各业务模块代码，快速响应迭代
        `,
        mini: yj_gzh,
        style: {}
      },
      {
        title: '企业服务平台',
        des: `企业服务平台是面向顺丰月结客户的一站式PC端平台，集企业寄件、查件、财务结算于一体，满足企业物流全生命周期需求，为子产品：数字商店、顺丰同城服务等导流。
        PC端页面基于VUE2框架进行开发，
        `,
        mini: wLs,
        style: {}
      }
    ],
    viewMore: 'github上面查看更多',
    gitUrl: 'https://github.com/yolo-612'
  },
  contact: {
    title: '联系我',
    desList1: ['灵感', '代码', '梦想', '未来'],
    desList2: ['注重效率，偏爱敏捷开发', '喜欢尝试，期待新鲜事物', '前端即兴趣，兴趣即未来', '行路有良友，便是捷径', '带上我吧，一起看到更大的世界'],
    download: '下载简历',
    fileList: [
      {
        title: 'HTML版',
        url: 'www.baidu.com'
      },
      {
        title: 'PDF版',
        url: 'www.baidu.com'
      }
    ],
    typeList: [
      {
        icon: sGithub,
        url: 'https://github.com/yolo-612'
      },
      {
        icon: sSf,
        url: ''
      },
      {
        icon: sBlog,
        url: ''
      }
    ]
  }
};

export const cvInfoSlice = createSlice({
  name: 'cvInfoSlice',
  initialState,
  reducers: {
    setFootValue(state, action: PayloadAction<string[]>) {
      state.footer = action.payload;
    },
    setOverviewValue(state, action: PayloadAction<Partial<Overview>>) {
      state.overview = {
        ...state.overview,
        ...action.payload
      };
    },
  },
});

export const {
  setFootValue,
  setOverviewValue
} = cvInfoSlice.actions;

export default cvInfoSlice.reducer;
