import React from 'react'
import Header from 'components/header'
// import Header from '../../components/header'

const navLists=[
    {
        label:'仪表盘',
        path:'/crm/workbench',
    },
    {
        label:'客户',
        path:'/crm/customers',
    },
]


type LayoutProp={
    children:React.ReactNode,
}

const Layout:React.FC<LayoutProp> = (props) => {
    return (
        <div>
            <div className=" py-4 border-b ">
            <Header navLists={navLists}/>
            </div>
            <div className="p-4">
            {props.children}
            </div>
        </div>
    )
}

export default Layout