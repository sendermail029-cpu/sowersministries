export type GalleryCategory = 'pastors' | 'children' | 'outreach' | 'graduation'

export interface GalleryItem {
  id: number
  src: string
  thumb: string
  category: GalleryCategory
  caption: string
  location: string
  tall: boolean
}

export const seedGalleryItems: GalleryItem[] = [
  {
    id: 1,
    src: '/child12-opt.webp',
    thumb: '/child12-opt.webp',
    category: 'children',
    caption: 'Children receiving care through SOWERS Ministry',
    location: 'Andhra Pradesh, India',
    tall: true,
  },
  {
    id: 2,
    src: '/outreach-opt.webp',
    thumb: '/outreach-opt.webp',
    category: 'outreach',
    caption: 'Sunday worship gathering in a village ministry setting',
    location: 'Telangana, India',
    tall: false,
  },
  {
    id: 3,
    src: '/or2-opt.webp',
    thumb: '/or2-opt.webp',
    category: 'outreach',
    caption: 'Community outreach with food and practical support',
    location: 'Odisha, India',
    tall: false,
  },
  {
    id: 4,
    src: '/church1-opt.webp',
    thumb: '/church1-opt.webp',
    category: 'outreach',
    caption: 'Village believers gathered for worship and prayer',
    location: 'Karnataka, India',
    tall: true,
  },
  {
    id: 5,
    src: '/grad-opt.webp',
    thumb: '/grad-opt.webp',
    category: 'graduation',
    caption: 'Graduation ceremony for trained leaders and pastors',
    location: 'Vijayawada, India',
    tall: false,
  },
  {
    id: 6,
    src: '/bt-opt.webp',
    thumb: '/bt-opt.webp',
    category: 'graduation',
    caption: 'Training conference and ministry equipping gathering',
    location: 'Andhra Pradesh, India',
    tall: false,
  },
  {
    id: 7,
    src: '/reach1-opt.webp',
    thumb: '/reach1-opt.webp',
    category: 'outreach',
    caption: 'Mission team serving a remote community',
    location: 'Tribal Belt, India',
    tall: true,
  },
  {
    id: 8,
    src: '/gal11-opt.webp',
    thumb: '/gal11-opt.webp',
    category: 'children',
    caption: 'A child receiving practical support through the ministry',
    location: 'South India',
    tall: false,
  },
  {
    id: 9,
    src: '/pastors%20(3).webp',
    thumb: '/pastors%20(3).webp',
    category: 'pastors',
    caption: 'Village pastors gathering for prayer and encouragement',
    location: 'Rural India',
    tall: false,
  },
  {
    id: 10,
    src: '/bt-opt.webp',
    thumb: '/bt-opt.webp',
    category: 'graduation',
    caption: 'Students and leaders gathered for ministry training',
    location: 'Andhra Pradesh, India',
    tall: true,
  },
  {
    id: 11,
    src: '/or-opt.webp',
    thumb: '/or-opt.webp',
    category: 'outreach',
    caption: 'Widows receiving monthly food support from SOWERS',
    location: 'Telangana, India',
    tall: false,
  },
  {
    id: 12,
    src: '/church3-opt.webp',
    thumb: '/church3-opt.webp',
    category: 'outreach',
    caption: 'Believers gathered for evening prayer in the village',
    location: 'Village Church, India',
    tall: false,
  },
  {
    id: 13,
    src: '/pastors%20(7).webp',
    thumb: '/pastors%20(7).webp',
    category: 'pastors',
    caption: 'Pastors standing together after training session',
    location: 'Andhra Pradesh, India',
    tall: true,
  },
  {
    id: 14,
    src: '/pastors%20(10).webp',
    thumb: '/pastors%20(10).webp',
    category: 'pastors',
    caption: 'Pastor speaking during a ministry gathering',
    location: 'South India',
    tall: false,
  },
  {
    id: 15,
    src: '/pastors%20(12).webp',
    thumb: '/pastors%20(12).webp',
    category: 'pastors',
    caption: 'Leaders equipped for village church ministry',
    location: 'Telangana, India',
    tall: true,
  },
]
