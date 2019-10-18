export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5da972e4f8a9b49cc78522a7',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-fhet5z7y',
                  apiId: 'cd4ddb6f-dcc6-40a1-b954-6ea1562b2ca1'
                },
                {
                  buildHookId: '5da972e51743473c1c3cfd22',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-jpuiibgm',
                  apiId: 'd0200c62-6c93-42bc-ab7e-20e920fad20f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sGrevling/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-jpuiibgm.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
