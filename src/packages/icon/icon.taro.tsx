import React, { FC } from 'react'
import { View, Image } from '@tarojs/components'

const left =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48cGF0aCBkPSJNNi42MDUgOS40OWEuNzcxLjc3MSAwIDAgMSAwLS45OGwzLjYtNC4zNzJhLjc3MS43NzEgMCAwIDEgMS4xOS45ODFMOC4yIDlsMy4xOTcgMy44ODFhLjc3MS43NzEgMCAxIDEtMS4xOTEuOThsLTMuNi00LjM3eiIvPjwvc3ZnPg=='

const right =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48cGF0aCBkPSJNMTEuMzk2IDkuNDlhLjc3MS43NzEgMCAwIDAgMC0uOThsLTMuNi00LjM3MmEuNzcxLjc3MSAwIDAgMC0xLjE5MS45ODFMOS44IDlsLTMuMTk2IDMuODgxYS43NzEuNzcxIDAgMCAwIDEuMTkuOThsMy42LTQuMzd6Ii8+PC9zdmc+'

const doubleLeft =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48cGF0aCBkPSJNMTMuODUzIDQuMDI2YS43NzEuNzcxIDAgMCAxIC4xMiAxLjA4NUwxMC44NjQgOWwzLjExIDMuODg5YS43NzEuNzcxIDAgMSAxLTEuMjA0Ljk2M2wtMy40OTgtNC4zN2EuNzcxLjc3MSAwIDAgMSAwLS45NjRsMy40OTctNC4zNzFhLjc3MS43NzEgMCAwIDEgMS4wODQtLjEyem0tNS4yNDUgMGEuNzcxLjc3MSAwIDAgMSAuMTIgMS4wODVMNS42MTcgOWwzLjExMSAzLjg4OWEuNzcxLjc3MSAwIDAgMS0xLjIwNS45NjNsLTMuNDk3LTQuMzdhLjc3MS43NzEgMCAwIDEgMC0uOTY0bDMuNDk3LTQuMzcxYS43NzEuNzcxIDAgMCAxIDEuMDg1LS4xMnoiLz48L3N2Zz4='

const doubleRight =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48cGF0aCBkPSJNNC4xNDcgMTMuOTc0YS43NzEuNzcxIDAgMCAxLS4xMi0xLjA4NUw3LjEzNiA5IDQuMDI4IDUuMTFhLjc3MS43NzEgMCAxIDEgMS4yMDQtLjk2M2wzLjQ5NyA0LjM3MWEuNzcxLjc3MSAwIDAgMSAwIC45NjRsLTMuNDk3IDQuMzcxYS43NzEuNzcxIDAgMCAxLTEuMDg0LjEyem01LjI0NSAwYS43NzEuNzcxIDAgMCAxLS4xMi0xLjA4NUwxMi4zODMgOSA5LjI3MiA1LjExYS43NzEuNzcxIDAgMSAxIDEuMjA1LS45NjNsMy40OTcgNC4zNzFhLjc3MS43NzEgMCAwIDEgMCAuOTY0bC0zLjQ5NyA0LjM3MWEuNzcxLjc3MSAwIDAgMS0xLjA4NS4xMnoiLz48L3N2Zz4='

interface IconProps {
  url: string
}

const Icon: FC<IconProps> = ({ url }) => {
  const style = {
    background: `url('${url}') no-repeat center`,
    backgroundSize: '100% 100%',
    width: '18px',
    height: '18px',
  }
  return <View style={style} />
}

const Icon2: FC<IconProps> = ({ url }) => {
  const style = {
    // background: `url('${url}') no-repeat center`,
    // backgroundSize: '100% 100%',
    width: 20,
    height: 20,
  }
  return <Image src={url} svg style={style} />
}

export const ArrowLeft: FC = () => <Icon url={left} />

export const ArrowRight: FC = () => <Icon2 url={right} />

export const DoubleLeft: FC = () => (
  <Image
    src="https://storage.360buyimg.com/imgtools/81adb71e35-b50bf7b0-9b64-11ef-af04-5bf0dc015f03.svg"
    svg
    style={{ width: 20, height: 20 }}
  />
)

export const DoubleRight: FC = () => (
  <Image src={doubleRight} svg style={{ width: 20, height: 20 }} />
)
