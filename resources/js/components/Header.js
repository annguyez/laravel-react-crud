import React from 'react';
import {Link} from 'react-router-dom'
import {PageHeader, Button} from 'antd';


function Header() {
    return (
        <div>
            <PageHeader
                style={{
                    border: '1px solid rgb(235, 237, 240)',
                }}
                title="Thông tin sinh viên"
                extra={[
                    <Link to='create'>
                        <Button key="1" type="primary">
                            Thêm sinh viên
                        </Button>
                    </Link>
                ]}
            />
        </div>
    );
}

export default Header;