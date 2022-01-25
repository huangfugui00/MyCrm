import {columnsDataIndex} from './type'

type columnsProp={
    title:string,
    dataIndex:columnsDataIndex
}


export const columns:columnsProp[] = [
    {
      title: '客户姓名',
      dataIndex: 'name',
    },
    {
      title: '电话',
      dataIndex: 'phone',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
     
    },
    {
        title:'网址',
        dataIndex:'url',
     
    },
    {
        title:'客户行业',
        dataIndex:'industry',
      
    },
    {
        title:'客户来源',
        dataIndex:'come',
    
    },
    {
        title:'手机',
        dataIndex:'mobilePhone',
      
    },
    {
        title:'客户级别',
        dataIndex:'level',
    },
    {
        title:'下次联系时间',
        dataIndex:'nextTime',
        
    },
    {
        title:'负责人',
        dataIndex:'principal',

    },
   
   

  ];
