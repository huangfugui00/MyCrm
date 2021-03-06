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
    {
        title:'地址',
        dataIndex:'address',
    },
    {
        title:'备注',
        dataIndex:'remark',
    }
  ];

  export const PRODUCT_COLUMNS=[
    {title:'产品名称',
    dataIndex:'product' },
    {title:'产品价格',
    dataIndex:'price' },
    {title:'备注',
    dataIndex:'remark' }
    ]


export const come = ["线上", "邮件", "介绍","促销",'预约','广告'] as const;
export const industry = ['金融业','IT','房地产','商业服务','政府','其他'] as const;
export const level = ['A(重点)' , 'B(普通客户)' , 'C(非优先客户)'] as const
export const gender = ['男' , '女'] as const
export const CONTRACT_TYPE = ['直销','代销','服务','快销'] as const
export const REFUND_TYPE = ['支付宝','微信','银行转账','境外汇款','现金'] as const