export const menuIcon = {
  系统设置: 'team',
}

export const allMenu = [
  {
    id: 400110100,
    name: '系统设置',
    sort: 10,
    children: [
      { name: '城市开通', url: '/home', allow: 'S' },
      { name: 'APP版本管理', url: '/shop', allow: 'S' },
    ],
  },
]
