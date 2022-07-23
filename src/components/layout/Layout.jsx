import React from 'react';
import './style.css'

const Layout = (props) => {
    return (
        <div className="layout">
            {props.children} {/* // TodoList 파일 안에 있는 Layout 안 header, list를 props.children으로 가져온다 */}
        </div>
    );
};

export default Layout;