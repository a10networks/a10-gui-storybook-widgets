import * as React from 'react'
import { A10Typography } from '../../../src'

const { Paragraph } = A10Typography

const Ellipsis = () => (
  <div>
    <Paragraph ellipsis>
      Ant Design, a design language for background applications, is refined by
      Ant UED Team. Ant Design, a design language for background applications,
      is refined by Ant UED Team. Ant Design, a design language for background
      applications, is refined by Ant UED Team. Ant Design, a design language
      for background applications, is refined by Ant UED Team. Ant Design, a
      design language for background applications, is refined by Ant UED Team.
      Ant Design, a design language for background applications, is refined by
      Ant UED Team.
    </Paragraph>

    <Paragraph ellipsis={{ rows: 3, expandable: true }}>
      Ant Design, a design language for background applications, is refined by
      Ant UED Team. Ant Design, a design language for background applications,
      is refined by Ant UED Team. Ant Design, a design language for background
      applications, is refined by Ant UED Team. Ant Design, a design language
      for background applications, is refined by Ant UED Team. Ant Design, a
      design language for background applications, is refined by Ant UED Team.
      Ant Design, a design language for background applications, is refined by
      Ant UED Team.
    </Paragraph>
  </div>
)

export default Ellipsis
