export type WorkLanguage = 'zh' | 'en'

export interface WorkListItem {
  name: string
  meta?: string
  tags?: string[]
  link?: string
  slug?: string
}

export type WorkItem = WorkListItem

export interface WorkGroup {
  heading: string
  items: string[]
}

export interface WorkSection {
  id: string
  no: string
  title: string
  tagline: string
  items?: WorkListItem[]
  groups?: WorkGroup[]
  awards?: string[]
  footer?: string
}

export interface WorksLang {
  title: string
  closeLabel: string
  openLabel: string
  hint: string
  awardsLabel: string
  visitLabel: string
  detailPlaceholder: string
  phImageLabel: string
  phButtonLabel: string
  countLabel: (n: number) => string
  sections: WorkSection[]
}

export type WorksCopy = WorksLang

export const WORKS: Record<WorkLanguage, WorksLang> = {
  "zh": {
    "title": "项目经历",
    "closeLabel": "返回",
    "openLabel": "展开作品",
    "hint": "继续下滑",
    "awardsLabel": "项目成果",
    "visitLabel": "查看完整项目",
    "detailPlaceholder": "项目详情",
    "phImageLabel": "项目预览",
    "phButtonLabel": "打开项目",
    "countLabel": (n: number) => `${n} 个项目`,
    "sections": [
      {
        "id": "project-2",
        "no": "01",
        "title": "校园推广与活动执行",
        "tagline": "校园活动｜跨团队执行｜宣传物料｜反馈迭代",
        "items": [
          {
            "name": "AI教育产品校园推广与活动执行",
            "meta": "AI Education Campus Promotion & Event Execution",
            "slug": "ai-education-partnership",
            "link": `${import.meta.env.BASE_URL}projects/ai-education-partnership/case_study.html`,
            "tags": [
              "高校活动：流程、演示物料、现场组织与答疑",
              "用户洞察：100+条反馈，支持宣传与活动优化",
              "内容资产：30+篇指南、FAQ与场景案例",
              "反馈迭代：10条建议；期间核心功能使用率+30%"
            ]
          }
        ]
      },
      {
        "id": "project-1",
        "no": "02",
        "title": "品牌内容与渠道推广",
        "tagline": "用户洞察｜内容调性｜达人协作｜AI复盘",
        "items": [
          {
            "name": "AI资讯产品品牌内容与渠道推广",
            "meta": "AI Information Product Brand Content & Channel Promotion",
            "slug": "ai-news-dashboard",
            "link": `${import.meta.env.BASE_URL}projects/ai-news-dashboard/case_study.html`,
            "tags": [
              "用户洞察：反馈与价格问卷，提炼传播重点",
              "内容协作：100+条内容，达人素材与调性校对",
              "活动与渠道：线上线下推广，内容A/B测试",
              "AI复盘：注册较前周+50%；首次专题创建率相对约+15%"
            ]
          }
        ]
      },
      {
        "id": "project-4",
        "no": "03",
        "title": "新品策划与社媒传播",
        "tagline": "新品洞察｜内容制作｜渠道物料｜持续复盘",
        "items": [
          {
            "name": "ZUS Coffee新品策划与社媒传播",
            "meta": "ZUS Coffee Product Planning & Social Communication",
            "slug": "zus-everywhere",
            "link": `${import.meta.env.BASE_URL}projects/zus-everywhere/case_study.html`,
            "tags": [
              "新品调研：用户偏好、社媒反馈与竞品内容",
              "内容执行：50条Instagram，拍摄剪辑与英文文案",
              "渠道协作：线上首发、FamilyMart物料与排期",
              "持续复盘：15+次内容复盘；账号粉丝增长1.1w+"
            ]
          }
        ]
      }
    ]
  },
  "en": {
    "title": "Project Experience",
    "closeLabel": "Back",
    "openLabel": "Open case",
    "hint": "Scroll to continue",
    "awardsLabel": "Outcomes",
    "visitLabel": "View full case",
    "detailPlaceholder": "Project details",
    "phImageLabel": "Project preview",
    "phButtonLabel": "Open project",
    "countLabel": (n: number) => `${n} projects`,
    "sections": [
      {
        "id": "project-2",
        "no": "01",
        "title": "Campus Promotion & Event Execution",
        "tagline": "Campus Events · Cross-team Execution · Materials · Iteration",
        "items": [
          {
            "name": "AI Education Campus Promotion & Event Execution",
            "meta": "University Events, Materials & Feedback-led Iteration",
            "slug": "ai-education-partnership",
            "link": `${import.meta.env.BASE_URL}projects/ai-education-partnership/case_study.html`,
            "tags": [
              "Campus events: flow, demo materials, on-site organization and Q&A",
              "Insights: 100+ feedback items informed communication and event improvements",
              "Content assets: 30+ guides, FAQs and use cases",
              "Iteration: 10 suggestions; core-feature usage increased 30% during the period"
            ]
          }
        ]
      },
      {
        "id": "project-1",
        "no": "02",
        "title": "Brand Content & Channel Promotion",
        "tagline": "User Insights · Brand Expression · Creators · AI Reviews",
        "items": [
          {
            "name": "AI Information Product Brand Content & Channel Promotion",
            "meta": "From User Needs to Content, Campaigns & Performance Review",
            "slug": "ai-news-dashboard",
            "link": `${import.meta.env.BASE_URL}projects/ai-news-dashboard/case_study.html`,
            "tags": [
              "Research: user feedback and pricing surveys informed messages by user stage",
              "Content: 100+ posts, creator assets and consistent brand expression",
              "Execution: online acquisition, offline promotion and channel content tests",
              "Review: AI dashboard; registrations +50% versus prior week, first-topic rate approximately +15% relatively"
            ]
          }
        ]
      },
      {
        "id": "project-4",
        "no": "03",
        "title": "Product Planning & Social Communication",
        "tagline": "Product Insights · Content · Channel Assets · Reviews",
        "items": [
          {
            "name": "ZUS Coffee Product Planning & Social Communication",
            "meta": "New-Product Messages, Instagram & Retail Communication",
            "slug": "zus-everywhere",
            "link": `${import.meta.env.BASE_URL}projects/zus-everywhere/case_study.html`,
            "tags": [
              "Research: consumer preferences and competitor content shaped launch messages",
              "Content: 50 Instagram posts, shooting, editing and English copy",
              "Channels: online launch and FamilyMart assets and schedules",
              "Review: 15+ reviews; contributed to 11k+ account follower growth"
            ]
          }
        ]
      }
    ]
  }
}


export const WORKS_CONTENT = WORKS

export const SECTION_COVERS: Record<string, string> = {
  'project-1': `${import.meta.env.BASE_URL}works/covers/sohu-dashboard.png`,
  'project-2': `${import.meta.env.BASE_URL}works/covers/education-pilot.png`,
  'project-4': `${import.meta.env.BASE_URL}works/covers/zus-everywhere.jpg`,
}
