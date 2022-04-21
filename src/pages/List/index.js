import React from "react";
import  { Button, List} from 'antd';
import './index.css';
const data = [
   {
     key: 1,
     value:'今日学习'
   },
   {
    key: 2,
    value:'今日游泳'
  },
  {
    key: 3,
    value:'今日跑步'
  },
  ];

function TodoList() {
    return(
        <div className="list-box">
          <List
            size="large"
            bordered
            dataSource={data}
            renderItem={item => 
              <List.Item 
               actions={[<Button key="list-loadmore-edit">删除</Button>]}>
                 {item.value}
              </List.Item>}
          />
        </div>
    )
}
export default TodoList;