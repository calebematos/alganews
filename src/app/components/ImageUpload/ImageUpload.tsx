
import { mdiDelete, mdiTrashCan, mdiTrashCanOutline, mdiUpload } from '@mdi/js'
import Icon from '@mdi/react'
import { ChangeEvent, useState } from 'react'
import Button from '../Button/Button'
import * as IU from './ImageUpload.styles'

interface ImageUploadProps {
  label:string
}

function ImageUpload({ label } : ImageUploadProps) {
  
  const [filePreview, setFilePreview] = useState<string | null>(null)
  
  function handlerChange(e: ChangeEvent<HTMLInputElement> ) {
    const file = e.target.files![0]

    if(file) {
      const reader = new FileReader()

      reader.addEventListener('load', e => {
        setFilePreview(String(e.target?.result))
      })

      reader.readAsDataURL(file)
    }
  }
  if(filePreview) {
    return<IU.ImagePreviewWrapper>
      <IU.ImagePreview preview={filePreview}>
        <Button  
          variant={'text'}
          label={<>
            <span>Remover imagem</span>
            <Icon
              size={'24px'}
              path={mdiDelete}
            />
            </>
          }
          onClick={() => setFilePreview(null)}
        />
      </IU.ImagePreview>
    </IU.ImagePreviewWrapper>
  }
  
  return <IU.Wrapper>
    <IU.Label>
      <Icon
        size={'24px'}
        path={mdiUpload}
      />
      {label}
      <IU.Input 
        type="file"
        onChange={handlerChange}
      />
    </IU.Label>
  </IU.Wrapper>
}

export default ImageUpload