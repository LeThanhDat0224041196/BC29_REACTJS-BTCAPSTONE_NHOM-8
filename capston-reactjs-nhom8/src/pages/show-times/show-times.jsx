import React from 'react'
import ContentShowTime from '../../modules/content-showTime/contentShowTime'
import TabShowTime from '../../modules/tab-showTime/TabShowTimes'


export default function ShowTimes() {
  return (
    <div className="row">
      <div className="col-3">
          <TabShowTime />
      </div>
      <div className="col-9">
          <ContentShowTime />
      </div>
    </div>
  )
}
