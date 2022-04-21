import React from "react";
import { Button, Input  } from 'antd';  
import './index.css';

function Home() {
   return(
       <div className='headerBox'>
         <Input placeholder="请输入今日任务" />
         <Button type="primary">新增</Button>
       </div>
   )
 }
export default Home;