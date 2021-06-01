
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','e36'),
  exact: true,
},
{
  path: '/blog/start',
  component: ComponentCreator('/blog/start','3b4'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','9af'),
  exact: true,
},
{
  path: '/blog/tags/manual',
  component: ComponentCreator('/blog/tags/manual','03e'),
  exact: true,
},
{
  path: '/blog/tags/nexivil',
  component: ComponentCreator('/blog/tags/nexivil','197'),
  exact: true,
},
{
  path: '/blog/tags/넥시빌',
  component: ComponentCreator('/blog/tags/넥시빌','7bc'),
  exact: true,
},
{
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','aca'),
  
  routes: [
{
  path: '/docs/Auth/로그인',
  component: ComponentCreator('/docs/Auth/로그인','3c8'),
  exact: true,
},
{
  path: '/docs/Auth/회원가입',
  component: ComponentCreator('/docs/Auth/회원가입','3d5'),
  exact: true,
},
{
  path: '/docs/AuthSetting/intro',
  component: ComponentCreator('/docs/AuthSetting/intro','ff8'),
  exact: true,
},
{
  path: '/docs/DesignExpress/intro',
  component: ComponentCreator('/docs/DesignExpress/intro','318'),
  exact: true,
},
{
  path: '/docs/intro',
  component: ComponentCreator('/docs/intro','e84'),
  exact: true,
},
{
  path: '/docs/Package/intro',
  component: ComponentCreator('/docs/Package/intro','7ed'),
  exact: true,
},
{
  path: '/docs/ProjectSetting/intro',
  component: ComponentCreator('/docs/ProjectSetting/intro','b2e'),
  exact: true,
},
{
  path: '/docs/ProjectSetting/manageUser',
  component: ComponentCreator('/docs/ProjectSetting/manageUser','cb8'),
  exact: true,
},
{
  path: '/docs/Template/intro',
  component: ComponentCreator('/docs/Template/intro','c8f'),
  exact: true,
},
{
  path: '/docs/Template/make',
  component: ComponentCreator('/docs/Template/make','82c'),
  exact: true,
},
{
  path: '/docs/Template/start',
  component: ComponentCreator('/docs/Template/start','517'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
