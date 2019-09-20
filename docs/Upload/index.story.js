import * as React from 'react'
import { A10Upload } from '../../src'
import { withReadme } from 'storybook-readme'
import { Code, CodeComponent, CodeCard } from '../utils'

import { uploadClickCode, defaultFileCode, comControlCode, uploadDirCode, pictureListCode, avatarCode, pictureWallCode, dragDropCode, manualCode } from './demo/code.js'
import UploadByClickingExample from './demo/UploadByClicking'
import DefaultFileExample from './demo/DefaultFile'
import ComConExample from './demo/ComConOvFileList'
import PicWithStyleExample from './demo/PicWithStyle'
import UploadDirExample from './demo/UploadDir'
import AvatarExample from './demo/Avatar'
import PicturesWallExample from './demo/PicturesWall'
import DragAndDropExample from './demo/DragAndDrop'
import UploadManuallyExample from './demo/UploadManually'

const A10UploadReadme = require('../../src/Upload/README.md')

const Example = () => {
  return (
    <CodeComponent>
      <CodeCard
        title="Upload by clicking"
        desc="Classic mode. File selection dialog pops up when upload button is clicked."
        code={<Code string={uploadClickCode} />}
      >
        <div className="UploadSpecific" >
          <UploadByClickingExample />
        </div>
      </CodeCard>

      <CodeCard
        title="Default Files"
        desc="Use defaultFileList for uploaded files when page init."
        code={<Code string={defaultFileCode} />}
      >
        <div className="UploadSpecific" >
          <DefaultFileExample />
        </div>
      </CodeCard>

      <CodeCard
        title="Complete control over file list"
        desc="You can gain full control over filelist by configuring fileList."
        code={<Code string={comControlCode} />}
      >
        <div className="UploadSpecific" >
          <ComConExample />
        </div>
      </CodeCard>

      <CodeCard
        title="Upload directory"
        desc="You can select and upload a whole directory."
        code={<Code string={uploadDirCode} />}
      >
        <div className="UploadSpecific" >
          <UploadDirExample />
        </div>
      </CodeCard>

      <CodeCard
        title="Picture With List"
        desc="If uploaded file is a picture, the thumbnail can be shown. IE8/9 do not support local thumbnail show. Please use thumbUrl instead."
        code={<Code string={pictureListCode} />}
      >
        <div className="UploadSpecific" >
          <PicWithStyleExample />
        </div>
      </CodeCard>

      <CodeCard
        title="Avatar"
        desc="Click to upload user's avatar, and validate size and format of picture with beforeUpload."
        code={<Code string={avatarCode} />}
      >
        <div className="UploadSpecific">
          <AvatarExample />
        </div>
      </CodeCard>

      <CodeCard
        title="Pictures Wall"
        desc="After users upload picture, the thumbnail will be shown in list. The upload button will disappear when count meets limitation."
        code={<Code string={pictureWallCode} />}
      >
        <div className="UploadSpecific" >
          <PicturesWallExample />
        </div>
      </CodeCard>

      <CodeCard
        title="Drag and Drop"
        desc="You can drag files to a specific area, to upload. Alternatively, you can also upload by selecting.We can upload serveral files at once in modern browsers by giving the input the multiple attribute."
        code={<Code string={dragDropCode} />}
      >
        <div className="UploadSpecific" >
          <DragAndDropExample />
        </div>
      </CodeCard>

      <CodeCard
        title="Upload manually"
        desc="Upload files manually after beforeUpload returns false."
        code={<Code string={manualCode} />}
      >
        <div className="UploadSpecific" >
          <UploadManuallyExample />
        </div>
      </CodeCard>
    </CodeComponent>
  )
}

export default story => {
  story.add('A10Upload', withReadme(A10UploadReadme, Example))
}
