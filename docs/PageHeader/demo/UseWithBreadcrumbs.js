import * as React from 'react'
import { A10PageHeader } from '../../../src'

const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
]

const UseWithBreadcrumbs = () => (
  <A10PageHeader title="Title" breadcrumb={{ routes }} />
)

export default UseWithBreadcrumbs
